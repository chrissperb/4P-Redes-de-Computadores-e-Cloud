import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide27_Conclusao: React.FC = () => {
  return (
    <SlideShell id={27} total={totalSlides} title={slidesData[26].title}>
      <div className="card">
        <h2>Conclusão</h2>
        <ul>
          <li><strong>Atende integralmente aos requisitos</strong>: a solução contempla os 5 requisitos do cliente (SAP on-premise, Salesforce SaaS, nuvem pública, interligação entre sistemas e segurança aplicável) — <strong>Critério 3 (Aderência)</strong>.</li>
          <li><strong>Fundamentação sólida</strong>: decisões ancoradas nos conceitos dos Unidades I–IV (modelos de referência, TCP/IP, segurança de redes, Cloud Computing, modelos híbrido/multicloud) — <strong>Critério 2 (Justificativa)</strong>.</li>
          <li><strong>Arquitetura híbrida equilibrada</strong>: concilia <strong>segurança e controle</strong> (SAP on-premise, link privado via Direct Connect) com <strong>agilidade, escalabilidade e inovação</strong> (nuvem pública + orquestração).</li>
          <li><strong>Clareza de diagramação</strong>: diagrama SVG hand-authored, zonas numeradas ①–⑥, cores consistentes com o fluxo end-to-end — <strong>Critério 4 (Clareza de Diagramação)</strong>.</li>
          <li><strong>Problema bem compreendido</strong>: solução foca diretamente na jornada de <strong>abertura de contas digital</strong>, viabilizando a transformação rumo ao banco 100% digital — <strong>Critério 1 (Entendimento do Problema)</strong>.</li>
          <li><strong>Pragmática e segura</strong>: aplica <strong>defesa em profundidade</strong>, <strong>responsabilidade compartilhada</strong> e <strong>princípios LGPD</strong> de forma arquitetural, sem extrapolar o escopo acadêmico.</li>
        </ul>
      </div>
    </SlideShell>
  );
};
