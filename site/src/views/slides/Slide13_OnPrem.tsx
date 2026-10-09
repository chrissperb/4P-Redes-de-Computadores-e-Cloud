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
    pt: <><strong>SAP ERP (on-premise)</strong>: sistema transacional da empresa. Mantido <strong>in loco</strong> por questões de segurança (Requisito 1). Não exposto diretamente à Internet.</>,
    en: <><strong>SAP ERP (on-premise)</strong>: the company's transactional system. Kept <strong>on-site</strong> for security reasons (Requisite 1). Not directly exposed to the Internet.</>,
  },
  item2: {
    pt: <><strong>Agências Físicas</strong>: pontos de atendimento. Interação com processos internos conforme modelo atual.</>,
    en: <><strong>Physical Branches</strong>: service points. Interaction with internal processes as per the current model.</>,
  },
  item3: {
    pt: <><strong>Fronteira controlada</strong>: comunicação com nuvem pública ocorre <strong>exclusivamente</strong> via <strong>AWS Direct Connect</strong> (link dedicado privado), reduzindo superfície de ataque.</>,
    en: <><strong>Controlled boundary</strong>: communication with the public cloud occurs <strong>exclusively</strong> via <strong>AWS Direct Connect</strong> (dedicated private link), reducing the attack surface.</>,
  },
  item4: {
    pt: <><strong>Alinhamento conceitual</strong>: arquitetura híbrida (Unidade IV) respeitando restrições explícitas do cliente.</>,
    en: <><strong>Conceptual alignment</strong>: hybrid architecture (Unit IV) respecting the client's explicit constraints.</>,
  },
};

export const Slide13_OnPrem: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={13} total={totalSlides}>
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <h2>{L.heading[lang]}</h2>
          <BrandLogo name="sap" height={34} />
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
