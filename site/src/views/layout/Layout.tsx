import React, { ReactNode, useEffect, useRef } from 'react';
import { ISlide } from '../../models/slide.types';
import { Theme } from '../../hooks/useTheme';
import { TextScale } from '../../hooks/useAccessibility';
import { ScreenReaderStatus } from '../../hooks/useScreenReader';
import { useI18n } from '../../i18n/context';
import { HelpOverlay } from '../common/HelpOverlay';
import { AccessibilityPanel } from '../common/AccessibilityPanel';
import {
  AccessibilityIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ExpandIcon,
  GridIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from '../../components/icons/Icons';
import { BrasilFlag, UsFlag } from '../../components/icons/Flags';
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
  theme: Theme;
  onToggleTheme: () => void;
  onToggleLang: () => void;
  helpOpen: boolean;
  onToggleHelp: () => void;
  onCloseHelp: () => void;
  accessOpen: boolean;
  onToggleAccessPanel: () => void;
  onCloseAccessPanel: () => void;
  onHome: () => void;
  hc: boolean;
  onToggleHc: () => void;
  textScale: TextScale;
  onSelectTextScale: (scale: TextScale) => void;
  reduceMotion: boolean;
  onToggleReduceMotion: () => void;
  srSupported: boolean;
  srStatus: ScreenReaderStatus;
  onSpeak: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  autoRead: boolean;
  onToggleAutoRead: () => void;
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
  theme,
  onToggleTheme,
  onToggleLang,
  helpOpen,
  onToggleHelp,
  onCloseHelp,
  accessOpen,
  onToggleAccessPanel,
  onCloseAccessPanel,
  onHome,
  hc,
  onToggleHc,
  textScale,
  onSelectTextScale,
  reduceMotion,
  onToggleReduceMotion,
  srSupported,
  srStatus,
  onSpeak,
  onPause,
  onResume,
  onStop,
  autoRead,
  onToggleAutoRead,
  children,
}) => {
  const progress = ((current - 1) / Math.max(1, total - 1)) * 100;
  const progressStyle = { '--p': `${progress}%` } as React.CSSProperties;
  const { lang, t, fill } = useI18n();

  const overviewRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overviewOpen) {
      const first = overviewRef.current?.querySelector<HTMLElement>('.overview-card');
      first?.focus();
    }
  }, [overviewOpen]);

  useEffect(() => {
    if (helpOpen) {
      const first = helpRef.current?.querySelector<HTMLElement>('button');
      first?.focus();
    }
  }, [helpOpen]);

  useEffect(() => {
    if (accessOpen) {
      const first = accessRef.current?.querySelector<HTMLElement>('button');
      first?.focus();
    }
  }, [accessOpen]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else document.documentElement.requestFullscreen().catch(() => {});
  };

  return (
    <div className="deck-root">
      <div className="sr-only" aria-live="polite">
        {fill('nav.srLive', { n: current, t: total, title: slides[current - 1]?.title[lang] ?? '' })}
      </div>
      <div className="deck-progress" style={progressStyle} aria-hidden="true" />
      <div className="deck-stage" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <nav className="deck-nav" aria-label={lang === 'pt' ? 'Navegação do deck' : 'Deck navigation'}>
        <button className="icon-only" onClick={onHome} title={t('nav.homeTooltip')} aria-label={t('nav.homeAria')}>
          <HomeIcon />
        </button>
        <button onClick={onPrev} disabled={current <= 1} title={t('nav.prevTooltip')}>
          <ArrowLeftIcon /> {t('nav.prev')}
        </button>
        <button
          onClick={onToggleOverview}
          aria-expanded={overviewOpen}
          aria-haspopup="dialog"
          title={t('nav.overviewTooltip')}
        >
          <GridIcon /> {t('nav.overview')}
        </button>
        <button onClick={onNext} disabled={current >= total} title={t('nav.nextTooltip')}>
          {t('nav.next')} <ArrowRightIcon />
        </button>
        <button className="icon-only" onClick={toggleFullscreen} title={t('nav.fullscreenTooltip')} aria-label={t('nav.fullscreenAria')}>
          <ExpandIcon />
        </button>
        <button
          className="icon-only"
          onClick={onToggleTheme}
          aria-pressed={theme === 'light'}
          title={t('nav.themeTooltip')}
          aria-label={t('nav.themeAria')}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          onClick={onToggleLang}
          aria-label={t('nav.langAria')}
          title={t('nav.langTooltip')}
        >
          {lang === 'pt' ? <BrasilFlag /> : <UsFlag />}
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
        <button
          className="icon-only"
          onClick={onToggleAccessPanel}
          aria-expanded={accessOpen}
          aria-haspopup="dialog"
          title={t('nav.accessTooltip')}
          aria-label={t('nav.accessAria')}
        >
          <AccessibilityIcon />
        </button>
        <button
          onClick={onToggleHelp}
          aria-expanded={helpOpen}
          aria-haspopup="dialog"
          title={t('nav.helpTooltip')}
          aria-label={t('nav.helpAria')}
        >
          ?
        </button>
      </nav>

      <div
        ref={overviewRef}
        className={cn('deck-overview', overviewOpen && 'is-open')}
        role="dialog"
        aria-modal="true"
        aria-label={t('overview.aria')}
        onClick={onCloseOverview}
      >
        <div className="overview-grid" onClick={(e) => e.stopPropagation()}>
          {slides.map((s) => (
            <button
              key={s.id}
              className={cn('overview-card', s.id === current && 'is-active')}
              aria-current={s.id === current ? 'true' : undefined}
              onClick={() => {
                onGoTo(s.id);
                onCloseOverview();
              }}
            >
              <span className="overview-id">{fill('overview.slideOf', { n: s.id })}</span>
              <span className="overview-title">{s.title[lang]}</span>
            </button>
          ))}
        </div>
      </div>

      <div ref={helpRef}>
        <HelpOverlay open={helpOpen} onClose={onCloseHelp} />
      </div>

      <div ref={accessRef}>
        <AccessibilityPanel
          open={accessOpen}
          onClose={onCloseAccessPanel}
          hc={hc}
          onToggleHc={onToggleHc}
          textScale={textScale}
          onSelectTextScale={onSelectTextScale}
          reduceMotion={reduceMotion}
          onToggleReduceMotion={onToggleReduceMotion}
          srSupported={srSupported}
          srStatus={srStatus}
          onSpeak={onSpeak}
          onPause={onPause}
          onResume={onResume}
          onStop={onStop}
          autoRead={autoRead}
          onToggleAutoRead={onToggleAutoRead}
        />
      </div>
    </div>
  );
};