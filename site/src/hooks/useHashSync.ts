import { useEffect, useState } from 'react';
import { slidesData } from '../data/slidesData';

const TOTAL = slidesData.length;

function clampSlide(n: number): number {
  const num = Number.isFinite(n) ? Math.trunc(n) : 1;
  if (num < 1) return 1;
  if (num > TOTAL) return TOTAL;
  return num;
}

function getHashSlide(): number {
  if (typeof window === 'undefined') return 1;
  const hash = window.location.hash;
  const match = hash.match(/^#\/?(\d+)$/);
  if (!match) return 1;
  return clampSlide(parseInt(match[1], 10));
}

export function useHashSync() {
  const [current, setCurrent] = useState<number>(() => getHashSlide());

  useEffect(() => {
    const onHashChange = () => {
      setCurrent(getHashSlide());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const target = `#/${current}`;
    if (window.location.hash !== target) {
      window.location.hash = target;
    }
    // Focus first heading of active slide for a11y
    const slide = document.querySelector(`.slide[data-slide-id="${current}"]`);
    const heading = slide?.querySelector('.slide-title') as HTMLElement | null;
    heading?.focus({ preventScroll: true });
  }, [current]);

  const goTo = (id: number) => setCurrent(clampSlide(id));
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);
  const first = () => goTo(1);
  const last = () => goTo(TOTAL);

  return { current, goTo, next, prev, first, last, total: TOTAL };
}
