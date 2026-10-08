import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

/**
 * Roteiro organizado em 4 fases (Contexto → Solução → Segurança → Encerramento).
 * Cada card mantém um <ol start="n"> para preservar a semântica de lista ordenada
 * (leitor de tela anuncia "item N de 9"). O badge numérico é aria-hidden para
 * não duplicar a numeração no SR. Textos bilíngues via dicionário local L.
 */
const phases = [
  {
    step: { pt: 'Fase 1', en: 'Phase 1' },
    title: { pt: 'Contexto', en: 'Context' },
    start: 1,
    items: [
      { pt: 'Contexto do Negócio e Desafio', en: 'Business Context and Challenge' },
      { pt: 'Escopo, Requisitos e Rastreabilidade', en: 'Scope, Requirements and Traceability' },
    ],
  },
  {
    step: { pt: 'Fase 2', en: 'Phase 2' },
    title: { pt: 'Solução', en: 'Solution' },
    start: 3,
    items: [
      { pt: 'Justificativa: Cloud Híbrida + AWS + Direct Connect', en: 'Rationale: Hybrid Cloud + AWS + Direct Connect' },
      { pt: 'Visão Macro e Diagrama de Arquitetura', en: 'High-Level View and Architecture Diagram' },
      { pt: 'Componentes e Funcionalidades por Zona', en: 'Components and Functions per Zone' },
      { pt: 'Fluxo End-to-End da Abertura de Conta', en: 'End-to-End Account Opening Flow' },
    ],
  },
  {
    step: { pt: 'Fase 3', en: 'Phase 3' },
    title: { pt: 'Segurança & Conformidade', en: 'Security & Compliance' },
    start: 7,
    items: [
      { pt: 'Segurança — Responsabilidade Compartilhada, IAM/MFA, Criptografia, Auditoria/Monitoração', en: 'Security — Shared Responsibility, IAM/MFA, Encryption, Auditing/Monitoring' },
      { pt: 'LGPD — Princípios Aplicados à Solução', en: 'LGPD — Principles Applied to the Solution' },
    ],
  },
  {
    step: { pt: 'Fase 4', en: 'Phase 4' },
    title: { pt: 'Encerramento', en: 'Closing' },
    start: 9,
    items: [
      { pt: 'Benefícios, Aspectos Econômicos, Conclusão e Referências', en: 'Benefits, Financial Aspects, Conclusion and References' },
    ],
  },
];

export const Slide02_Roteiro: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={2} total={totalSlides}>
      <div className="phase-grid">
        {phases.map((phase) => (
          <section className="phase-card" key={phase.title.pt}>
            <header className="phase-head">
              <span className="phase-step">{phase.step[lang]}</span>
              <h2 className="phase-title">{phase.title[lang]}</h2>
            </header>
            <ol className="phase-list" start={phase.start}>
              {phase.items.map((item, i) => (
                <li className="phase-item" key={item.pt}>
                  <span className="phase-num" aria-hidden="true">
                    {phase.start + i}
                  </span>
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </SlideShell>
  );
};