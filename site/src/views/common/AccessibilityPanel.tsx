import React from 'react';
import { cn } from '../../utils/classNames';
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

const SR_STATUS_LABEL: Record<ScreenReaderStatus, string> = {
  idle: 'Pronto.',
  speaking: 'Lendo o slide…',
  paused: 'Pausado.',
  unavailable: 'Leitura por voz indisponível neste navegador.',
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
  return (
    <div
      className={cn('deck-access', open && 'is-open')}
      role="dialog"
      aria-modal="true"
      aria-label="Opções de acessibilidade"
      onClick={onClose}
    >
      <div className="access-panel" role="document" onClick={(e) => e.stopPropagation()}>
        <header className="access-header">
          <h2 className="access-title">Acessibilidade</h2>
          <button type="button" className="help-close" onClick={onClose} aria-label="Fechar opções de acessibilidade">
            <XIcon size={18} />
            Fechar
          </button>
        </header>

        <section className="access-section" aria-labelledby="access-vision-title">
          <h3 id="access-vision-title">Visual</h3>
          <div className="switch-row">
            <span className="switch-label">
              Alto contraste<span className="switch-hint">Fundo preto, texto branco, destaques amarelos</span>
            </span>
            <Switch checked={hc} onToggle={onToggleHc} label="Ativar alto contraste" />
          </div>
          <div className="switch-row">
            <span className="switch-label">
              Tamanho das letras<span className="switch-hint">Redimensiona o conteúdo do slide</span>
            </span>
            <div className="scale-group" role="radiogroup" aria-label="Tamanho das letras">
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
              Reduzir movimento<span className="switch-hint">Desativa animações e transições</span>
            </span>
            <Switch checked={reduceMotion} onToggle={onToggleReduceMotion} label="Reduzir movimento" />
          </div>
        </section>

        <section className="access-section" aria-labelledby="access-sr-title">
          <h3 id="access-sr-title">Leitura em voz alta</h3>
          {!srSupported ? (
            <p className="sr-status" role="status">
              {SR_STATUS_LABEL.unavailable}
            </p>
          ) : (
            <>
              <div className="sr-controls">
                <button type="button" onClick={onSpeak} className="sr-btn">
                  Ouvir slide
                </button>
                <button type="button" onClick={onPause} className="sr-btn" disabled={srStatus !== 'speaking'}>
                  Pausar
                </button>
                <button type="button" onClick={onResume} className="sr-btn" disabled={srStatus !== 'paused'}>
                  Retomar
                </button>
                <button type="button" onClick={onStop} className="sr-btn" disabled={srStatus === 'idle'}>
                  Parar
                </button>
              </div>
              <div className="switch-row">
                <span className="switch-label">
                  Ler ao navegar<span className="switch-hint">Fala cada slide ao entrar</span>
                </span>
                <Switch checked={autoRead} onToggle={onToggleAutoRead} label="Ler cada slide ao navegar" />
              </div>
              <p className="sr-status" role="status">
                {SR_STATUS_LABEL[srStatus]}
              </p>
            </>
          )}
        </section>
      </div>
    </div>
  );
};