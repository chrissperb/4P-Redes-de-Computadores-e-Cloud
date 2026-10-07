import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide04_Desafio: React.FC = () => {
  return (
    <SlideShell id={4} total={totalSlides} title={slidesData[3].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>Desafio Proposto</h2>
          <p>Como arquiteto da Empresa de Soluções em TI, formular uma proposta de solução para viabilizar a <strong>abertura de contas digital</strong>, contemplando todos os requisitos especificados e os entregáveis solicitados.</p>
        </div>
        <div className="card">
          <h2>Pontos-Chave</h2>
          <ul>
            <li>Manter <strong>SAP ERP</strong> em operação <strong>on-premise</strong> (questão de segurança).</li>
            <li>Integrar-se ao <strong>Salesforce CRM</strong> (SaaS, disponibilizado diretamente pela Salesforce).</li>
            <li>Executar a solução de abertura digital em <strong>plataforma de nuvem pública</strong>.</li>
            <li>Garantir <strong>interligação e comunicação</strong> entre todos os sistemas.</li>
            <li>Considerar <strong>todos os requisitos de segurança aplicáveis</strong>.</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
