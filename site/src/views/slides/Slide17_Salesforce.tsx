import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { BrandLogo } from '../../components/Brands';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Componentes e Funcionalidades',
    en: 'Components and Functions',
  },
  item1: {
    pt: <><strong>Salesforce CRM (SaaS)</strong>: serviço disponibilizado diretamente pela Salesforce (Requisito 2). Consumido sob demanda, modelo <strong>SaaS</strong> (Unidade III).</>,
    en: <><strong>Salesforce CRM (SaaS)</strong>: service provided directly by Salesforce (Requisite 2). Consumed on demand, <strong>SaaS</strong> model (Unit III).</>,
  },
  item2: {
    pt: <><strong>Integração server-side</strong>: comunicação realizada pelo <strong>núcleo de onboarding</strong> (backend), não pelo cliente (browser). Evita exposição de credenciais/secrets.</>,
    en: <><strong>Server-side integration</strong>: communication performed by the <strong>onboarding core</strong> (backend), not by the client (browser). Avoids exposure of credentials/secrets.</>,
  },
  item3: {
    pt: <><strong>Tráfego controlado por saída</strong>: fluxos autorizados, com autenticação/autorização adequadas na integração.</>,
    en: <><strong>Egress-controlled traffic</strong>: authorized flows, with adequate authentication/authorization in the integration.</>,
  },
  item4: {
    pt: <><strong>Interligação entre sistemas</strong>: materializa o Requisito 4 (todos os sistemas interligados e se comunicando entre si), mantendo coerência com o modelo híbrido.</>,
    en: <><strong>Interconnection between systems</strong>: materializes Requisite 4 (all systems interconnected and communicating with one another), maintaining consistency with the hybrid model.</>,
  },
};

export const Slide17_Salesforce: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={17} total={totalSlides}>
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <h2>{L.heading[lang]}</h2>
          <BrandLogo name="salesforce" height={44} />
        </div>
        <ul>
          <li>{L.item1[lang]}</li>
          <li>{L.item2[lang]}</li>
          <li>{L.item3[lang]}</li>
          <li>{L.item4[lang]}</li>
        </ul>
      </div>
    </SlideShell>
  );
};
