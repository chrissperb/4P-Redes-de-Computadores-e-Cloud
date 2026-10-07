import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide05_Escopo: React.FC = () => {
  return (
    <SlideShell id={5} total={totalSlides} title={slidesData[4].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>Escopo</h2>
          <ul>
            <li>Proposta arquitetural conceitual (diagrama + descrição de componentes).</li>
            <li>Foco na <strong>abertura de contas digital</strong> (jornada inicial da transformação 100% digital).</li>
            <li>Integração segura entre <strong>on-premise (SAP ERP)</strong>, <strong>nuvem pública (AWS)</strong> e <strong>Salesforce CRM (SaaS)</strong>.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Fora do Escopo</h2>
          <ul>
            <li>Implementação/implantação em produção.</li>
            <li>Detalhamento de DPA, normativos específicos de banco (sem extrapolar o foco em <strong>LGPD</strong>).</li>
            <li>Customizações internas do SAP/Salesforce.</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
