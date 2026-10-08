import React from 'react';
import { useI18n } from '../../i18n/context';
import { slidesData } from '../../data/slidesData';

interface SlideShellProps {
  id: number;
  total: number;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const SlideShell: React.FC<SlideShellProps> = ({ id, total, title: propTitle, children, className = '' }) => {
  const { lang } = useI18n();
  // Migrated slides stop passing `title`; fallback resolves it by slide id so
  // the header always follows the active language.
  const title = propTitle?.trim() ? propTitle : (slidesData[id - 1]?.title[lang] ?? '');
  return (
    <section
      className={`slide ${className}`}
      role="region"
      aria-label={`Slide ${id} de ${total}`}
      aria-roledescription="slide"
      data-slide-id={id}
    >
      <header className="slide-header">
        <h1 className="slide-title" tabIndex={-1}>{title}</h1>
        <span className="slide-kicker">SDMD S/A</span>
      </header>
      <div className="slide-content">{children}</div>
      <footer className="slide-footer">
        <span className="slide-counter">
          {id} / {total}
        </span>
      </footer>
    </section>
  );
};