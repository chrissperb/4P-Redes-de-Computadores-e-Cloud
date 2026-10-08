import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

/**
 * Roteiro organizado em 4 fases (Contexto → Solução → Segurança → Encerramento).
 * Cada card mantém um <ol start="n"> para preservar a semântica de lista ordenada
 * (leitor de tela anuncia "item N de 9"). O badge numérico é aria-hidden para
 * não duplicar a numeração no SR.
 */
const phases = [
  {
    step: 'Fase 1',
    title: 'Contexto',
    start: 1,
    items: ['Contexto do Negócio e Desafio', 'Escopo, Requisitos e Rastreabilidade'],
  },
  {
    step: 'Fase 2',
    title: 'Solução',
    start: 3,
    items: [
      'Justificativa: Cloud Híbrida + AWS + Direct Connect',
      'Visão Macro e Diagrama de Arquitetura',
      'Componentes e Funcionalidades por Zona',
      'Fluxo End-to-End da Abertura de Conta',
    ],
  },
  {
    step: 'Fase 3',
    title: 'Segurança & Conformidade',
    start: 7,
    items: [
      'Segurança — Responsabilidade Compartilhada, IAM/MFA, Criptografia, Auditoria/Monitoração',
      'LGPD — Princípios Aplicados à Solução',
    ],
  },
  {
    step: 'Fase 4',
    title: 'Encerramento',
    start: 9,
    items: ['Benefícios, Aspectos Econômicos, Conclusão e Referências'],
  },
];

export const Slide02_Roteiro: React.FC = () => {
  return (
    <SlideShell id={2} total={totalSlides} title={slidesData[1].title}>
      <div className="phase-grid">
        {phases.map((phase) => (
          <section className="phase-card" key={phase.title}>
            <header className="phase-head">
              <span className="phase-step">{phase.step}</span>
              <h2 className="phase-title">{phase.title}</h2>
            </header>
            <ol className="phase-list" start={phase.start}>
              {phase.items.map((item, i) => (
                <li className="phase-item" key={item}>
                  <span className="phase-num" aria-hidden="true">
                    {phase.start + i}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </SlideShell>
  );
};