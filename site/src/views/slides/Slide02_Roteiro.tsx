import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide02_Roteiro: React.FC = () => {
  return (
    <SlideShell id={2} total={totalSlides} title={slidesData[1].title}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: 'clamp(8px,1.2vw,16px)' }}>
        <ol style={{ gap: 'clamp(6px,1vw,10px)' }}>
          <li>Contexto do Negócio e Desafio</li>
          <li>Escopo, Requisitos e Rastreabilidade</li>
          <li>Justificativa: Cloud Híbrida + AWS + Direct Connect</li>
          <li>Visão Macro e Diagrama de Arquitetura</li>
          <li>Componentes e Funcionalidades por Zona</li>
          <li>Fluxo End-to-End da Abertura de Conta</li>
          <li>Segurança (Responsabilidade Compartilhada, IAM/MFA, Criptografia, Auditoria/Monitoração)</li>
          <li>LGPD – Princípios Aplicados à Solução</li>
          <li>Benefícios, Aspectos Econômicos, Conclusão e Referências</li>
        </ol>
      </div>
    </SlideShell>
  );
};
