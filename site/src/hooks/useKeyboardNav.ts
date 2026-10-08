import { useEffect } from 'react';

interface UseKeyboardNavOpts {
  current: number;
  total: number;
  next: () => void;
  prev: () => void;
  first: () => void;
  last: () => void;
  overviewOpen: boolean;
  helpOpen: boolean;
  accessOpen: boolean;
  toggleOverview: () => void;
  closeOverview: () => void;
  closeHelp: () => void;
  toggleHelp: () => void;
  toggleAccessPanel: () => void;
  closeAccessPanel: () => void;
  toggleTheme: () => void;
  toggleLang: () => void;
  speakSlide: () => void;
  stopSpeak: () => void;
}

export function useKeyboardNav({
  current,
  total,
  next,
  prev,
  first,
  last,
  overviewOpen,
  helpOpen,
  accessOpen,
  toggleOverview,
  closeOverview,
  closeHelp,
  toggleHelp,
  toggleAccessPanel,
  closeAccessPanel,
  toggleTheme,
  toggleLang,
  speakSlide,
  stopSpeak,
}: UseKeyboardNavOpts) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;

      // Space/Enter on a focused button: let the native click fire, never navigate.
      if ((e.key === ' ' || e.key === 'Enter') && tag === 'BUTTON') return;

      if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        target?.isContentEditable
      ) {
        return;
      }

      // With an overlay open, only Escape acts (closes it).
      if (overviewOpen || helpOpen || accessOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          if (overviewOpen) closeOverview();
          else if (helpOpen) closeHelp();
          else closeAccessPanel();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          first();
          break;
        case 'End':
          e.preventDefault();
          last();
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          toggleOverview();
          break;
        case '?':
        case 'h':
        case 'H':
          e.preventDefault();
          toggleHelp();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
          else document.documentElement.requestFullscreen().catch(() => {});
          break;
        case 't':
        case 'T':
          e.preventDefault();
          toggleTheme();
          break;
        case 'l':
        case 'L':
          e.preventDefault();
          toggleLang();
          break;
        case 'a':
        case 'A':
          e.preventDefault();
          toggleAccessPanel();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          speakSlide();
          break;
        case 's':
        case 'S':
          e.preventDefault();
          stopSpeak();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    current,
    total,
    next,
    prev,
    first,
    last,
    overviewOpen,
    helpOpen,
    accessOpen,
    toggleOverview,
    closeOverview,
    closeHelp,
    toggleHelp,
    toggleAccessPanel,
    closeAccessPanel,
    toggleTheme,
    toggleLang,
    speakSlide,
    stopSpeak,
  ]);
}