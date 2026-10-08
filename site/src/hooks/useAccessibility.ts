import { useCallback, useEffect, useState } from 'react';

export type TextScale = 1 | 1.25 | 1.5;

const HC_KEY = 'sdmd-hc';
const SCALE_KEY = 'sdmd-text-scale';
const MOTION_KEY = 'sdmd-motion';

function getStored(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStored(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage may be unavailable (private mode); non-fatal */
  }
}

function getInitialHc(): boolean {
  return getStored(HC_KEY) === 'on';
}

function getInitialScale(): TextScale {
  const v = getStored(SCALE_KEY);
  return v === '1.25' || v === '1.5' ? (parseFloat(v) as TextScale) : 1;
}

function getInitialMotion(): boolean {
  return getStored(MOTION_KEY) === 'off';
}

export function useAccessibility() {
  const [hc, setHc] = useState<boolean>(getInitialHc);
  const [textScale, setTextScale] = useState<TextScale>(getInitialScale);
  const [reduceMotion, setReduceMotion] = useState<boolean>(getInitialMotion);

  useEffect(() => {
    document.documentElement.dataset.hc = hc ? 'on' : 'off';
    setStored(HC_KEY, hc ? 'on' : 'off');
  }, [hc]);

  useEffect(() => {
    document.documentElement.dataset.textScale = String(textScale);
    setStored(SCALE_KEY, String(textScale));
  }, [textScale]);

  useEffect(() => {
    document.documentElement.dataset.motion = reduceMotion ? 'off' : 'on';
    setStored(MOTION_KEY, reduceMotion ? 'off' : 'on');
  }, [reduceMotion]);

  const toggleHc = useCallback(() => setHc((v) => !v), []);
  const toggleReduceMotion = useCallback(() => setReduceMotion((v) => !v), []);
  const selectTextScale = useCallback((s: TextScale) => setTextScale(s), []);

  return { hc, toggleHc, textScale, selectTextScale, reduceMotion, toggleReduceMotion };
}