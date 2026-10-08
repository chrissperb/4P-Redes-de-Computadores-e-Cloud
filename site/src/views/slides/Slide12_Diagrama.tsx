import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { ArchitectureSVG } from '../svg/ArchitectureSVG';
import { useI18n } from '../../i18n/context';

const L = {
  zones: {
    pt: 'Zonas: ① On-Premise • ② Integração Privada (Direct Connect + PrivateLink) • ③ Núcleo de Onboarding • ④ Camada de Dados • ⑤ Salesforce CRM (SaaS) • ⑥ Canal do Cliente',
    en: 'Zones: ① On-Premise • ② Private Integration (Direct Connect + PrivateLink) • ③ Onboarding Core • ④ Data Layer • ⑤ Salesforce CRM (SaaS) • ⑥ Customer Channel',
  },
};

export const Slide12_Diagrama: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={12} total={totalSlides}>
      <div className="diagram-wrap">
        <ArchitectureSVG />
      </div>
      <p style={{ margin: 0, color: 'var(--muted)', textAlign: 'center', fontSize: 'clamp(11px,1.4vw,16px)' }}>
        {L.zones[lang]}
      </p>
    </SlideShell>
  );
};
