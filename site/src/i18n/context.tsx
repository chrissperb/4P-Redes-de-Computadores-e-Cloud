import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ui, type Lang } from './ui';

export type { Lang };

const STORAGE_KEY = 'sdmd-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt';
  return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pt';
}

interface I18nContextValue {
  lang: Lang;
  /** Shortcut for ui keys: `t('nav.prev')`. Falls back to the key itself. */
  t: (key: string) => string;
  /** Interpolate {n}/{t}/{title} placeholders into a translated template. */
  fill: (key: string, vars: Record<string, string | number>) => string;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'pt',
  t: () => '',
  fill: () => '',
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const t = useCallback((key: string) => ui[key]?.[lang] ?? key, [lang]);

  const fill = useCallback(
    (key: string, vars: Record<string, string | number>) => {
      const base = ui[key]?.[lang] ?? key;
      return base.replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? `{${name}}`));
    },
    [lang],
  );

  const toggleLang = useCallback(() => setLang((l) => (l === 'pt' ? 'en' : 'pt')), []);

  const value = useMemo(() => ({ lang, t, toggleLang, fill }), [lang, t, toggleLang, fill]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}