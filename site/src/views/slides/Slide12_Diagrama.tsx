import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';
import { ArchitectureSVG } from '../svg/ArchitectureSVG';

export const Slide12_Diagrama: React.FC = () => {
  return (
    <SlideShell id={12} total={totalSlides} title={slidesData[11].title}>
      <div className="diagram-wrap">
        <ArchitectureSVG />
      </div>
      <p style={{ margin: 0, color: 'var(--muted)', textAlign: 'center', fontSize: 'clamp(11px,1.4vw,16px)' }}>
        Zonas: ① On-Premise • ② Integração Privada (Direct Connect + PrivateLink) • ③ Núcleo de Onboarding • ④ Camada de Dados • ⑤ Salesforce CRM (SaaS) • ⑥ Canal do Cliente
      </p>
    </SlideShell>
  );
};
