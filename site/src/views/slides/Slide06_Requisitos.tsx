import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { BrandRow } from '../../components/Brands';
import { useI18n } from '../../i18n/context';

const L = {
  requirementsTitle: {
    pt: 'Requisitos da Solução (Deliv. 1)',
    en: 'Solution Requirements (Deliv. 1)',
  },
  li1a: { pt: 'A empresa possui sistemas de ', en: 'The company has ' },
  sapErp: { pt: 'SAP ERP', en: 'SAP ERP' },
  li1b: { pt: ' sendo executados ', en: ' systems running ' },
  onPremise: { pt: 'on-premise', en: 'on-premise' },
  li1c: {
    pt: ', e por questões de segurança deve permanecer desta forma.',
    en: ', and for security reasons it must remain that way.',
  },
  li2a: { pt: 'A empresa também utiliza os serviços da ', en: 'The company also uses the services of ' },
  salesforce: { pt: 'Salesforce', en: 'Salesforce' },
  li2b: { pt: ' para seu ', en: ' for its ' },
  crm: { pt: 'CRM', en: 'CRM' },
  li2c: {
    pt: ', este serviço é disponibilizado diretamente pela Salesforce (SaaS).',
    en: ', this service is made available directly by Salesforce (SaaS).',
  },
  li3a: {
    pt: 'A solução proposta para o problema da abertura de conta digital deverá ser executada em uma ',
    en: 'The solution proposed for the digital account opening problem shall be executed on a ',
  },
  publicCloudPlatform: { pt: 'plataforma de nuvem pública', en: 'public cloud platform' },
  li3b: { pt: ' à sua escolha.', en: ' of your choice.' },
  li4a: { pt: 'Todos os sistemas citados deverão estar ', en: 'All systems mentioned shall be ' },
  interconnected: {
    pt: 'interligados e se comunicar entre si',
    en: 'interconnected and communicating with one another',
  },
  li5a: { pt: 'Todos os ', en: 'All ' },
  applicableSecurityReqs: {
    pt: 'requisitos de segurança aplicáveis',
    en: 'applicable security requirements',
  },
  li5b: {
    pt: ' deverão ser levados em consideração.',
    en: ' shall be taken into consideration.',
  },
};

export const Slide06_Requisitos: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={6} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px,1.4vw,16px)' }}>
        <div className="card">
          <h2>{L.requirementsTitle[lang]}</h2>
          <ol>
            <li>{L.li1a[lang]}<strong>{L.sapErp[lang]}</strong>{L.li1b[lang]}<strong>{L.onPremise[lang]}</strong>{L.li1c[lang]}</li>
            <li>{L.li2a[lang]}<strong>{L.salesforce[lang]}</strong>{L.li2b[lang]}<strong>{L.crm[lang]}</strong>{L.li2c[lang]}</li>
            <li>{L.li3a[lang]}<strong>{L.publicCloudPlatform[lang]}</strong>{L.li3b[lang]}</li>
            <li>{L.li4a[lang]}<strong>{L.interconnected[lang]}</strong>.</li>
            <li>{L.li5a[lang]}<strong>{L.applicableSecurityReqs[lang]}</strong>{L.li5b[lang]}</li>
          </ol>
        </div>
        <div style={{ paddingTop: 'clamp(4px,0.6vw,8px)' }}>
          <BrandRow height={30} />
        </div>
      </div>
    </SlideShell>
  );
};
