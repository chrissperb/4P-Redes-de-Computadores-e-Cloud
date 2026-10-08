import React from 'react';
import { cn } from '../../utils/classNames';
import { XIcon } from '../../components/icons/Icons';

interface HelpOverlayProps {
  open: boolean;
  onClose: () => void;
}

const SHORTCUTS: Array<{ keys: string[]; action: string }> = [
  { keys: ['←', '→'], action: 'Navegar entre slides' },
  { keys: ['Espaço', 'PgDn', 'PgUp'], action: 'Navegar entre slides' },
  { keys: ['Home', 'End'], action: 'Ir ao primeiro / último slide' },
  { keys: ['O'], action: 'Abrir / fechar visão geral (mapa de slides)' },
  { keys: ['A'], action: 'Abrir / fechar opções de acessibilidade' },
  { keys: ['R'], action: 'Ler o slide atual em voz alta' },
  { keys: ['S'], action: 'Parar a leitura' },
  { keys: ['F'], action: 'Entrar / sair da tela cheia' },
  { keys: ['T'], action: 'Alternar tema claro / escuro' },
  { keys: ['?', 'H'], action: 'Abrir / fechar esta ajuda' },
  { keys: ['Esc'], action: 'Fechar este painel' },
];

const TIPS: string[] = [
  'Use os botões na parte inferior da tela ou o teclado para navegar.',
  'A visão geral (botão "Visão geral" ou tecla O) lista todos os slides de uma vez.',
  'Na tela de projeção, use tela cheia (tecla F) para melhor aproveitamento.',
  'Precisa de ajustes visuais ou auditivos? Use o painel de acessibilidade (tecla A): alto contraste, letras maiores, reduzir movimento e leitura em voz alta.',
  'Imprima com Ctrl+P para gerar um PDF com um slide por página.',
];

export const HelpOverlay: React.FC<HelpOverlayProps> = ({ open, onClose }) => {
  return (
    <div
      className={cn('deck-help', open && 'is-open')}
      role="dialog"
      aria-modal="true"
      aria-label="Ajuda e atalhos de teclado"
      onClick={onClose}
    >
      <div className="help-panel" role="document" onClick={(e) => e.stopPropagation()}>
        <header className="help-header">
          <h2 className="help-title">Apoio ao usuário</h2>
          <button type="button" className="help-close" onClick={onClose} aria-label="Fechar ajuda">
            <XIcon size={18} />
            Fechar
          </button>
        </header>

        <section className="help-section" aria-labelledby="help-tips-title">
          <h3 id="help-tips-title">Como navegar</h3>
          <ul className="help-list">
            {TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="help-section" aria-labelledby="help-keys-title">
          <h3 id="help-keys-title">Atalhos de teclado</h3>
          <ul className="shortcut-list">
            {SHORTCUTS.map(({ keys, action }) => (
              <li key={action}>
                <span className="shortcut-keys">
                  {keys.map((k) => (
                    <kbd key={k}>{k}</kbd>
                  ))}
                </span>
                <span className="shortcut-action">{action}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};