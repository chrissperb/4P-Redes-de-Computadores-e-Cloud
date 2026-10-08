import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Conclusão',
    en: 'Conclusion',
  },
  liRequirements: {
    pt: <><strong>Atende integralmente aos requisitos</strong>: a solução contempla os 5 requisitos do cliente (SAP on-premise, Salesforce SaaS, nuvem pública, interligação entre sistemas e segurança aplicável) — <strong>Critério 3 (Aderência)</strong>.</>,
    en: <><strong>Fully meets the requirements</strong>: the solution covers the client's 5 requirements (SAP on-premise, Salesforce SaaS, public cloud, interconnection between systems and applicable security) — <strong>Criterion 3 (Fit)</strong>.</>,
  },
  liFoundation: {
    pt: <><strong>Fundamentação sólida</strong>: decisões ancoradas nos conceitos dos Unidades I–IV (modelos de referência, TCP/IP, segurança de redes, Cloud Computing, modelos híbrido/multicloud) — <strong>Critério 2 (Justificativa)</strong>.</>,
    en: <><strong>Solid foundation</strong>: decisions anchored in the concepts from Units I–IV (reference models, TCP/IP, network security, Cloud Computing, hybrid/multicloud models) — <strong>Criterion 2 (Justification)</strong>.</>,
  },
  liBalanced: {
    pt: <><strong>Arquitetura híbrida equilibrada</strong>: concilia <strong>segurança e controle</strong> (SAP on-premise, link privado via Direct Connect) com <strong>agilidade, escalabilidade e inovação</strong> (nuvem pública + orquestração).</>,
    en: <><strong>Balanced hybrid architecture</strong>: reconciles <strong>security and control</strong> (SAP on-premise, private link via Direct Connect) with <strong>agility, scalability and innovation</strong> (public cloud + orchestration).</>,
  },
  liDiagram: {
    pt: <><strong>Clareza de diagramação</strong>: diagrama SVG hand-authored, zonas numeradas ①–⑥, cores consistentes com o fluxo end-to-end — <strong>Critério 4 (Clareza de Diagramação)</strong>.</>,
    en: <><strong>Diagram clarity</strong>: hand-authored SVG diagram, zones numbered ①–⑥, colors consistent with the end-to-end flow — <strong>Criterion 4 (Diagram Clarity)</strong>.</>,
  },
  liProblem: {
    pt: <><strong>Problema bem compreendido</strong>: solução foca diretamente na jornada de <strong>abertura de contas digital</strong>, viabilizando a transformação rumo ao banco 100% digital — <strong>Critério 1 (Entendimento do Problema)</strong>.</>,
    en: <><strong>Problem well understood</strong>: the solution focuses directly on the <strong>digital account opening</strong> journey, enabling the transformation toward the 100% digital bank — <strong>Criterion 1 (Problem Understanding)</strong>.</>,
  },
  liPragmatic: {
    pt: <><strong>Pragmática e segura</strong>: aplica <strong>defesa em profundidade</strong>, <strong>responsabilidade compartilhada</strong> e <strong>princípios LGPD</strong> de forma arquitetural, sem extrapolar o escopo acadêmico.</>,
    en: <><strong>Pragmatic and secure</strong>: applies <strong>defense in depth</strong>, <strong>shared responsibility</strong> and <strong>LGPD principles</strong> architecturally, without exceeding the academic scope.</>,
  },
};

export const Slide27_Conclusao: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={27} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
        <ul>
          <li>{L.liRequirements[lang]}</li>
          <li>{L.liFoundation[lang]}</li>
          <li>{L.liBalanced[lang]}</li>
          <li>{L.liDiagram[lang]}</li>
          <li>{L.liProblem[lang]}</li>
          <li>{L.liPragmatic[lang]}</li>
        </ul>
      </div>
    </SlideShell>
  );
};
