import React from 'react';
import { cn } from '../../utils/classNames';
import { useI18n } from '../../i18n/context';
import { XIcon } from '../../components/icons/Icons';
import { TextScale } from '../../hooks/useAccessibility';
import { ScreenReaderStatus } from '../../hooks/useScreenReader';

interface AccessibilityPanelProps {
  open: boolean;
  onClose: () => void;
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
}

const SCALE_OPTIONS: Array<{ value: TextScale; label: string }> = [
  { value: 1, label: '100%' },
  { value: 1.25, label: '125%' },
  { value: 1.5, label: '150%' },
];

const SR_STATUS_KEY: Record<ScreenReaderStatus, string> = {
  idle: 'sr.idle',
  speaking: 'sr.speaking',
  paused: 'sr.paused',
  unavailable: 'sr.unavailable',
};

function Switch({
  checked,
  onToggle,
  label,
}: {
  checked: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className="a11y-switch"
      onClick={onToggle}
    />
  );
}

export const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  open,
  onClose,
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
}) => {
  const { t } = useI18n();
  return (
    <div
      className={cn('deck-access', open && 'is-open')}
      role="dialog"
      aria-modal="true"
      aria-label={t('access.aria')}
      onClick={onClose}
    >
      <div className="access-panel" role="document" onClick={(e) => e.stopPropagation()}>
        <header className="access-header">
          <h2 className="access-title">{t('access.title')}</h2>
          <button type="button" className="help-close" onClick={onClose} aria-label={t('access.closeAria')}>
            <XIcon size={18} />
            {t('access.close')}
          </button>
        </header>

        <section className="access-section" aria-labelledby="access-vision-title">
          <h3 id="access-vision-title">{t('access.visionTitle')}</h3>
          <div className="switch-row">
            <span className="switch-label">
              {t('access.hc')}
              <span className="switch-hint">{t('access.hcHint')}</span>
            </span>
            <Switch checked={hc} onToggle={onToggleHc} label={t('access.hcAria')} />
          </div>
          <div className="switch-row">
            <span className="switch-label">
              {t('access.fontSize')}
              <span className="switch-hint">{t('access.fontSizeHint')}</span>
            </span>
            <div className="scale-group" role="radiogroup" aria-label={t('access.fontSizeAria')}>
              {SCALE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  role="radio"
                  aria-checked={textScale === opt.value}
                  className={cn('scale-opt', textScale === opt.value && 'is-active')}
                  onClick={() => onSelectTextScale(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="switch-row">
            <span className="switch-label">
              {t('access.motion')}
              <span className="switch-hint">{t('access.motionHint')}</span>
            </span>
            <Switch checked={reduceMotion} onToggle={onToggleReduceMotion} label={t('access.motionAria')} />
          </div>
        </section>

        <section className="access-section" aria-labelledby="access-sr-title">
          <h3 id="access-sr-title">{t('access.srTitle')}</h3>
          {!srSupported ? (
            <p className="sr-status" role="status">
              {t(SR_STATUS_KEY.unavailable)}
            </p>
          ) : (
            <>
              <div className="sr-controls">
                <button type="button" onClick={onSpeak} className="sr-btn">
                  {t('access.listen')}
                </button>
                <button type="button" onClick={onPause} className="sr-btn" disabled={srStatus !== 'speaking'}>
                  {t('access.pause')}
                </button>
                <button type="button" onClick={onResume} className="sr-btn" disabled={srStatus !== 'paused'}>
                  {t('access.resume')}
                </button>
                <button type="button" onClick={onStop} className="sr-btn" disabled={srStatus === 'idle'}>
                  {t('access.stop')}
                </button>
              </div>
              <div className="switch-row">
                <span className="switch-label">
                  {t('access.autoRead')}
                  <span className="switch-hint">{t('access.autoReadHint')}</span>
                </span>
                <Switch checked={autoRead} onToggle={onToggleAutoRead} label={t('access.autoReadAria')} />
              </div>
              <p className="sr-status" role="status">
                {t(SR_STATUS_KEY[srStatus])}
              </p>
            </>
          )}
        </section>
      </div>
    </div>
  );
};