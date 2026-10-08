import React, { useCallback, useEffect, useState } from 'react';
import { slidesData } from '../data/slidesData';
import { useHashSync } from '../hooks/useHashSync';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { useTheme } from '../hooks/useTheme';
import { useAccessibility } from '../hooks/useAccessibility';
import { useScreenReader } from '../hooks/useScreenReader';
import { Layout } from '../views/layout/Layout';
import { Slide01_Capa } from '../views/slides/Slide01_Capa';
import { Slide02_Roteiro } from '../views/slides/Slide02_Roteiro';
import { Slide03_Contexto } from '../views/slides/Slide03_Contexto';
import { Slide04_Desafio } from '../views/slides/Slide04_Desafio';
import { Slide05_Escopo } from '../views/slides/Slide05_Escopo';
import { Slide06_Requisitos } from '../views/slides/Slide06_Requisitos';
import { Slide07_Rastreabilidade } from '../views/slides/Slide07_Rastreabilidade';
import { Slide08_Hibrida } from '../views/slides/Slide08_Hibrida';
import { Slide09_AWS } from '../views/slides/Slide09_AWS';
import { Slide10_Modelos } from '../views/slides/Slide10_Modelos';
import { Slide11_Macro } from '../views/slides/Slide11_Macro';
import { Slide12_Diagrama } from '../views/slides/Slide12_Diagrama';
import { Slide13_OnPrem } from '../views/slides/Slide13_OnPrem';
import { Slide14_Integracao } from '../views/slides/Slide14_Integracao';
import { Slide15_Nucleo } from '../views/slides/Slide15_Nucleo';
import { Slide16_Dados } from '../views/slides/Slide16_Dados';
import { Slide17_Salesforce } from '../views/slides/Slide17_Salesforce';
import { Slide18_Canal } from '../views/slides/Slide18_Canal';
import { Slide19_Fluxo } from '../views/slides/Slide19_Fluxo';
import { Slide20_RespCompartilhada } from '../views/slides/Slide20_RespCompartilhada';
import { Slide21_IAM } from '../views/slides/Slide21_IAM';
import { Slide22_Cripto } from '../views/slides/Slide22_Cripto';
import { Slide23_Auditoria } from '../views/slides/Slide23_Auditoria';
import { Slide24_LGPD } from '../views/slides/Slide24_LGPD';
import { Slide25_Beneficios } from '../views/slides/Slide25_Beneficios';
import { Slide26_Economia } from '../views/slides/Slide26_Economia';
import { Slide27_Conclusao } from '../views/slides/Slide27_Conclusao';
import { Slide28_Referencias } from '../views/slides/Slide28_Referencias';

const slideMap: Record<number, React.FC> = {
  1: Slide01_Capa,
  2: Slide02_Roteiro,
  3: Slide03_Contexto,
  4: Slide04_Desafio,
  5: Slide05_Escopo,
  6: Slide06_Requisitos,
  7: Slide07_Rastreabilidade,
  8: Slide08_Hibrida,
  9: Slide09_AWS,
  10: Slide10_Modelos,
  11: Slide11_Macro,
  12: Slide12_Diagrama,
  13: Slide13_OnPrem,
  14: Slide14_Integracao,
  15: Slide15_Nucleo,
  16: Slide16_Dados,
  17: Slide17_Salesforce,
  18: Slide18_Canal,
  19: Slide19_Fluxo,
  20: Slide20_RespCompartilhada,
  21: Slide21_IAM,
  22: Slide22_Cripto,
  23: Slide23_Auditoria,
  24: Slide24_LGPD,
  25: Slide25_Beneficios,
  26: Slide26_Economia,
  27: Slide27_Conclusao,
  28: Slide28_Referencias,
};

export const DeckController: React.FC = () => {
  const { current, next, prev, first, last, goTo, total } = useHashSync();
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);
  const [autoRead, setAutoRead] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { hc, toggleHc, textScale, selectTextScale, reduceMotion, toggleReduceMotion } =
    useAccessibility();
  const { supported: srSupported, status: srStatus, speak, pause, resume, stop } = useScreenReader();

  const toggleOverview = useCallback(() => setOverviewOpen((o) => !o), []);
  const closeOverview = useCallback(() => setOverviewOpen(false), []);
  const toggleHelp = useCallback(() => setHelpOpen((h) => !h), []);
  const closeHelp = useCallback(() => setHelpOpen(false), []);
  const toggleAccessPanel = useCallback(() => setAccessOpen((a) => !a), []);
  const closeAccessPanel = useCallback(() => setAccessOpen(false), []);
  const toggleAutoRead = useCallback(() => setAutoRead((a) => !a), []);
  const speakSlide = useCallback(() => speak(current), [speak, current]);
  // Início (rodapé): volta ao primeiro slide.
  const goHome = useCallback(() => goTo(1), [goTo]);

  // Auto-read the current slide when enabled.
  useEffect(() => {
    if (autoRead) speak(current);
  }, [autoRead, current, speak]);

  useKeyboardNav({
    current,
    total,
    next,
    prev,
    first,
    last,
    overviewOpen,
    helpOpen,
    accessOpen,
    toggleOverview,
    closeOverview,
    closeHelp,
    toggleHelp,
    toggleAccessPanel,
    closeAccessPanel,
    toggleTheme,
    speakSlide,
    stopSpeak: stop,
  });

  const CurrentSlide = slideMap[current] ?? slideMap[1];

  return (
    <Layout
      current={current}
      total={total}
      slides={slidesData}
      onNext={next}
      onPrev={prev}
      onGoTo={goTo}
      overviewOpen={overviewOpen}
      onToggleOverview={toggleOverview}
      onCloseOverview={closeOverview}
      theme={theme}
      onToggleTheme={toggleTheme}
      helpOpen={helpOpen}
      onToggleHelp={toggleHelp}
      onCloseHelp={closeHelp}
      accessOpen={accessOpen}
      onToggleAccessPanel={toggleAccessPanel}
      onCloseAccessPanel={closeAccessPanel}
      onHome={goHome}
      hc={hc}
      onToggleHc={toggleHc}
      textScale={textScale}
      onSelectTextScale={selectTextScale}
      reduceMotion={reduceMotion}
      onToggleReduceMotion={toggleReduceMotion}
      srSupported={srSupported}
      srStatus={srStatus}
      onSpeak={speakSlide}
      onPause={pause}
      onResume={resume}
      onStop={stop}
      autoRead={autoRead}
      onToggleAutoRead={toggleAutoRead}
    >
      <CurrentSlide />
    </Layout>
  );
};
