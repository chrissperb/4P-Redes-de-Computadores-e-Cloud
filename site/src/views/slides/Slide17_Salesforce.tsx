import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';
import { BrandLogo } from '../../components/Brands';

export const Slide17_Salesforce: React.FC = () => {
  return (
    <SlideShell id={17} total={totalSlides} title={slidesData[16].title}>
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <h2>Componentes e Funcionalidades</h2>
          <BrandLogo name="salesforce" height={44} />
        </div>
        <ul>
          <li><strong>Salesforce CRM (SaaS)</strong>: serviço disponibilizado diretamente pela Salesforce (Req. 2). Consumido sob demanda, modelo <strong>SaaS</strong> (Unid. III).</li>
          <li><strong>Integração server-side</strong>: comunicação realizada pelo <strong>núcleo de onboarding</strong> (backend), não pelo cliente (browser). Evita exposição de credenciais/secrets.</li>
          <li><strong>Tráfego controlado por saída</strong>: fluxos autorizados, com autenticação/autorização adequadas na integração.</li>
          <li><strong>Interligação entre sistemas</strong>: materializa o Req. 4 (todos os sistemas interligados e se comunicando entre si), mantendo coerência com o modelo híbrido.</li>
        </ul>
      </div>
    </SlideShell>
  );
};
