import React, { ReactNode } from 'react';
import { ISlide } from '../../models/slide.types';
import '../../styles/deck.css';
import '../../styles/print.css';
import { cn } from '../../utils/classNames';

interface LayoutProps {
  current: number;
  total: number;
  slides: ISlide[];
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (id: number) => void;
  overviewOpen: boolean;
  onToggleOverview: () => void;
  onCloseOverview: () => void;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  current,
  total,
  slides,
  onNext,
  onPrev,
  onGoTo,
  overviewOpen,
  onToggleOverview,
  onCloseOverview,
  children,
}) => {
  const progress = ((current - 1) / Math.max(1, total - 1)) * 100;
  const progressStyle = { '--p': `${progress}%` } as React.CSSProperties;

  return (
    <div className="deck-root">
      <div className="deck-progress" style={progressStyle} aria-hidden="true" />
      <div className="deck-stage" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <nav className="deck-nav" aria-label="Navegação do deck">
        <button onClick={onPrev} disabled={current <= 1} title="Anterior (←, PageUp)">
          Anterior
        </button>
        <button onClick={onToggleOverview} title="Visão Geral (O)">
          Visão Geral ({current}/{total})
        </button>
        <button onClick={onNext} disabled={current >= total} title="Próximo (→, Espaço, PageDown)">
          Próximo
        </button>
        <button
          onClick={() => {
            if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
            else document.documentElement.requestFullscreen().catch(() => {});
          }}
          title="Tela cheia (F)"
        >
          Tela cheia
        </button>
        <button onClick={onToggleOverview} title="Ajuda (?)">
          ?
        </button>
      </nav>
      <div className={cn('deck-overview', overviewOpen && 'is-open')} onClick={onCloseOverview}>
        <div className="overview-grid" onClick={(e) => e.stopPropagation()}>
          {slides.map((s) => (
            <button
              key={s.id}
              className={cn('overview-card', s.id === current && 'is-active')}
              onClick={() => {
                onGoTo(s.id);
                onCloseOverview();
              }}
            >
              <span className="overview-id">Slide {s.id}</span>
              <span className="overview-title">{s.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
