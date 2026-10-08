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
  toggleOverview: () => void;
  closeOverview: () => void;
  closeHelp: () => void;
  toggleHelp: () => void;
  toggleTheme: () => void;
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
  toggleOverview,
  closeOverview,
  closeHelp,
  toggleHelp,
  toggleTheme,
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
      if (overviewOpen || helpOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          if (overviewOpen) closeOverview();
          else closeHelp();
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
    toggleOverview,
    closeOverview,
    closeHelp,
    toggleHelp,
    toggleTheme,
  ]);
}