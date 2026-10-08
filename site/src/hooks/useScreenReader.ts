import { useCallback, useEffect, useState } from 'react';

export type ScreenReaderStatus = 'idle' | 'speaking' | 'paused' | 'unavailable';

function pickPtVoice(speech: SpeechSynthesis): SpeechSynthesisVoice | undefined {
  const voices = speech.getVoices();
  if (!voices.length) return undefined;
  return (
    voices.find((v) => v.lang.toLowerCase().replace('_', '-').startsWith('pt-br')) ||
    voices.find((v) => v.lang.toLowerCase().replace('_', '-').startsWith('pt')) ||
    voices[0]
  );
}

export function useScreenReader() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [status, setStatus] = useState<ScreenReaderStatus>(supported ? 'idle' : 'unavailable');

  useEffect(() => {
    if (!supported) {
      setStatus('unavailable');
      return;
    }
    // Warm up voice list (populated asynchronously in some browsers).
    speechSynthesis.getVoices();
    const onVoicesChanged = () => {
      /* voices ready; pickPtVoice resolves lazily on speak */
    };
    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

    const poll = window.setInterval(() => {
      const s = speechSynthesis;
      if (s.speaking) setStatus(s.paused ? 'paused' : 'speaking');
      else setStatus('idle');
    }, 200);

    return () => {
      window.clearInterval(poll);
      speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      speechSynthesis.cancel();
    };
  }, [supported]);

  const getSlideText = useCallback((slideId: number): string => {
    const slide = document.querySelector(`.slide[data-slide-id="${slideId}"]`);
    if (!slide) return '';
    const title = slide.querySelector('.slide-title')?.textContent?.trim() ?? '';
    const content = slide.querySelector('.slide-content')?.textContent ?? '';
    const joined = `${title}. ${content}`.replace(/\s+/g, ' ').trim();
    return joined;
  }, []);

  const speak = useCallback(
    (slideId: number) => {
      if (!supported) return;
      const text = getSlideText(slideId);
      if (!text) return;
      speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pt-BR';
      const voice = pickPtVoice(speechSynthesis);
      if (voice) utter.voice = voice;
      utter.rate = 0.95;
      speechSynthesis.speak(utter);
    },
    [supported, getSlideText],
  );

  const pause = useCallback(() => {
    if (supported) speechSynthesis.pause();
  }, [supported]);

  const resume = useCallback(() => {
    if (supported) speechSynthesis.resume();
  }, [supported]);

  const stop = useCallback(() => {
    if (supported) speechSynthesis.cancel();
  }, [supported]);

  return { supported, status, speak, pause, resume, stop };
}