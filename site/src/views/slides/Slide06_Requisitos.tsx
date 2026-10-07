import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide06_Requisitos: React.FC = () => {
  return (
    <SlideShell id={6} total={totalSlides} title={slidesData[5].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px,1.4vw,16px)' }}>
        <div className="card">
          <h2>Requisitos da Solução (Deliv. 1)</h2>
          <ol>
            <li>A empresa possui sistemas de <strong>SAP ERP</strong> sendo executados <strong>on-premise</strong>, e por questões de segurança deve permanecer desta forma.</li>
            <li>A empresa também utiliza os serviços da <strong>Salesforce</strong> para seu <strong>CRM</strong>, este serviço é disponibilizado diretamente pela Salesforce (SaaS).</li>
            <li>A solução proposta para o problema da abertura de conta digital deverá ser executada em uma <strong>plataforma de nuvem pública</strong> à sua escolha.</li>
            <li>Todos os sistemas citados deverão estar <strong>interligados e se comunicar entre si</strong>.</li>
            <li>Todos os <strong>requisitos de segurança aplicáveis</strong> deverão ser levados em consideração.</li>
          </ol>
        </div>
      </div>
    </SlideShell>
  );
};
