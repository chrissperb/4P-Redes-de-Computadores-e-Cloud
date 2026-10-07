import { useEffect } from 'react';

interface UseKeyboardNavOpts {
  current: number;
  total: number;
  next: () => void;
  prev: () => void;
  first: () => void;
  last: () => void;
  toggleOverview: () => void;
}

export function useKeyboardNav({ current, total, next, prev, first, last, toggleOverview }: UseKeyboardNavOpts) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable) return;

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
          e.preventDefault();
          // help not implemented; noop safe
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
          else document.documentElement.requestFullscreen().catch(() => {});
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [current, total, next, prev, first, last, toggleOverview]);
}
