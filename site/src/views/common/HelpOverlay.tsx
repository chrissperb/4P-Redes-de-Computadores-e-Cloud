import React from 'react';
import { cn } from '../../utils/classNames';
import { useI18n } from '../../i18n/context';
import { XIcon } from '../../components/icons/Icons';

interface HelpOverlayProps {
  open: boolean;
  onClose: () => void;
}

const SHORTCUT_KEYS: Array<{ keys: string[]; action: string }> = [
  { keys: ['←', '→'], action: 'help.shortcut.nav' },
  { keys: ['Espaço', 'PgDn', 'PgUp'], action: 'help.shortcut.nav' },
  { keys: ['Home', 'End'], action: 'help.shortcut.homeEnd' },
  { keys: ['O'], action: 'help.shortcut.overview' },
  { keys: ['A'], action: 'help.shortcut.access' },
  { keys: ['R'], action: 'help.shortcut.read' },
  { keys: ['S'], action: 'help.shortcut.stop' },
  { keys: ['F'], action: 'help.shortcut.fullscreen' },
  { keys: ['T'], action: 'help.shortcut.theme' },
  { keys: ['L'], action: 'help.shortcut.lang' },
  { keys: ['?', 'H'], action: 'help.shortcut.help' },
  { keys: ['Esc'], action: 'help.shortcut.esc' },
];

export const HelpOverlay: React.FC<HelpOverlayProps> = ({ open, onClose }) => {
  const { lang, t } = useI18n();
  const renderKey = (k: string) => (k === 'Espaço' ? (lang === 'pt' ? 'Espaço' : 'Space') : k);
  return (
    <div
      className={cn('deck-help', open && 'is-open')}
      role="dialog"
      aria-modal="true"
      aria-label={t('help.aria')}
      onClick={onClose}
    >
      <div className="help-panel" role="document" onClick={(e) => e.stopPropagation()}>
        <header className="help-header">
          <h2 className="help-title">{t('help.title')}</h2>
          <button type="button" className="help-close" onClick={onClose} aria-label={t('help.closeAria')}>
            <XIcon size={18} />
            {t('help.close')}
          </button>
        </header>

        <section className="help-section" aria-labelledby="help-tips-title">
          <h3 id="help-tips-title">{t('help.tipsTitle')}</h3>
          <ul className="help-list">
            {[1, 2, 3, 4, 5].map((n) => (
              <li key={n}>{t(`help.tip${n}`)}</li>
            ))}
          </ul>
        </section>

        <section className="help-section" aria-labelledby="help-keys-title">
          <h3 id="help-keys-title">{t('help.keysTitle')}</h3>
          <ul className="shortcut-list">
            {SHORTCUT_KEYS.map(({ keys, action }) => (
              <li key={action}>
                <span className="shortcut-keys">
                  {keys.map((k) => (
                    <kbd key={k}>{renderKey(k)}</kbd>
                  ))}
                </span>
                <span className="shortcut-action">{t(action)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};