import { useCallback, useEffect, useRef, useState } from 'react';

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
  // Authoritative state for timers/polling closures (they would otherwise
  // capture a stale status).
  const statusRef = useRef<ScreenReaderStatus>(status);
  statusRef.current = status;
  // Last spoken utterance: async end/error events from a *cancelled* older
  // utterance must not overwrite the current state.
  const spokenRef = useRef<SpeechSynthesisUtterance | null>(null);

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

    // Safety net only: detect natural end of speech. Never derive "paused"
    // from Chrome's flaky paused flag — pause/resume state is tracked in
    // this hook via explicit user actions. Only auto-clear from "speaking"
    // so a flickering `speaking` flag can't kill a "paused" state.
    const poll = window.setInterval(() => {
      if (!speechSynthesis.speaking && statusRef.current === 'speaking') {
        setStatus('idle');
      }
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
      spokenRef.current = utter;
      utter.lang = 'pt-BR';
      const voice = pickPtVoice(speechSynthesis);
      if (voice) utter.voice = voice;
      utter.rate = 0.95;
      const isCurrent = () => spokenRef.current === utter;
      utter.onend = () => {
        if (isCurrent()) setStatus('idle');
      };
      utter.onerror = () => {
        if (isCurrent()) setStatus('idle');
      };
      speechSynthesis.speak(utter);
      setStatus('speaking');
    },
    [supported, getSlideText],
  );

  const pause = useCallback(() => {
    if (!supported) return;
    speechSynthesis.pause();
    setStatus('paused');
  }, [supported]);

  const resume = useCallback(() => {
    if (!supported) return;
    // Chrome: resume() while not paused is a no-op; still mark speaking so the
    // UI reacts to the user's intent.
    speechSynthesis.resume();
    setStatus('speaking');
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    const s = speechSynthesis;
    // Chrome no-op: cancel() while paused does nothing.
    if (s.paused) s.resume();
    s.cancel();
    // Chrome bug (crbug/509488): cancel() may fail to interrupt an
    // in-flight utterance. Flush the queue with a silent utterance,
    // then cancel again to force the end of speech.
    if (s.speaking || s.pending) {
      const flush = new SpeechSynthesisUtterance('');
      flush.volume = 0;
      flush.rate = 1;
      s.speak(flush);
      s.cancel();
    }
    setStatus('idle');
  }, [supported]);

  return { supported, status, speak, pause, resume, stop };
}