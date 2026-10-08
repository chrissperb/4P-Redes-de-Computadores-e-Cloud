import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  scopeTitle: { pt: 'Escopo', en: 'Scope' },
  scopeLi1: {
    pt: 'Proposta arquitetural conceitual (diagrama + descrição de componentes).',
    en: 'Conceptual architectural proposal (diagram + component description).',
  },
  scopeLi2a: { pt: 'Foco na ', en: 'Focus on ' },
  digitalAccountOpening: { pt: 'abertura de contas digital', en: 'digital account opening' },
  scopeLi2b: {
    pt: ' (jornada inicial da transformação 100% digital).',
    en: ' (initial journey of the 100% digital transformation).',
  },
  scopeLi3a: { pt: 'Integração segura entre ', en: 'Secure integration among ' },
  onPremiseSap: { pt: 'on-premise (SAP ERP)', en: 'on-premise (SAP ERP)' },
  publicCloudAws: { pt: 'nuvem pública (AWS)', en: 'public cloud (AWS)' },
  scopeLi3And: { pt: ' e ', en: ' and ' },
  salesforceCrmSaas: { pt: 'Salesforce CRM (SaaS)', en: 'Salesforce CRM (SaaS)' },
  outScopeTitle: { pt: 'Fora do Escopo', en: 'Out of Scope' },
  outLi1: {
    pt: 'Implementação/implantação em produção.',
    en: 'Implementation/deployment in production.',
  },
  outLi2a: {
    pt: 'Detalhamento de DPA, normativos específicos de banco (sem extrapolar o foco em ',
    en: 'Detailing of DPA, specific banking regulations (without extrapolating the focus on ',
  },
  lgpd: { pt: 'LGPD', en: 'LGPD' },
  outLi3: {
    pt: 'Customizações internas do SAP/Salesforce.',
    en: 'Internal SAP/Salesforce customizations.',
  },
};

export const Slide05_Escopo: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={5} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>{L.scopeTitle[lang]}</h2>
          <ul>
            <li>{L.scopeLi1[lang]}</li>
            <li>{L.scopeLi2a[lang]}<strong>{L.digitalAccountOpening[lang]}</strong>{L.scopeLi2b[lang]}</li>
            <li>{L.scopeLi3a[lang]}<strong>{L.onPremiseSap[lang]}</strong>, <strong>{L.publicCloudAws[lang]}</strong>{L.scopeLi3And[lang]}<strong>{L.salesforceCrmSaas[lang]}</strong>.</li>
          </ul>
        </div>
        <div className="card">
          <h2>{L.outScopeTitle[lang]}</h2>
          <ul>
            <li>{L.outLi1[lang]}</li>
            <li>{L.outLi2a[lang]}<strong>{L.lgpd[lang]}</strong>).</li>
            <li>{L.outLi3[lang]}</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
