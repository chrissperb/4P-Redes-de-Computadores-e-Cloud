import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { CloudHybridIcon } from '../../components/icons/Illustrations';
import { useI18n } from '../../i18n/context';

const L = {
  headingWhy: {
    pt: 'Por que Cloud Híbrida?',
    en: 'Why Hybrid Cloud?',
  },
  para: {
    pt: <>O cliente <strong>exige</strong> que o SAP ERP permaneça <strong>on-premise</strong> (por questões de segurança), ao mesmo tempo que requer a solução de abertura digital em <strong>nuvem pública</strong>. Essa combinação caracteriza, conceitualmente, uma <strong>arquitetura híbrida</strong> (Unid. IV).</>,
    en: <>The client <strong>requires</strong> that the SAP ERP remain <strong>on-premise</strong> (for security reasons), while at the same time demanding the digital account opening solution on the <strong>public cloud</strong>. This combination characterizes, conceptually, a <strong>hybrid architecture</strong> (Unit IV).</>,
  },
  headingAdv: {
    pt: 'Vantagens',
    en: 'Advantages',
  },
  adv1: {
    pt: <><strong>Segurança/controle</strong>: dados/serviços sensíveis permanecem no ambiente on-premise.</>,
    en: <><strong>Security/control</strong>: sensitive data/services remain in the on-premise environment.</>,
  },
  adv2: {
    pt: <><strong>Escalabilidade</strong>: jornada de onboarding na nuvem pública (escala sob demanda).</>,
    en: <><strong>Scalability</strong>: the onboarding journey on the public cloud (scales on demand).</>,
  },
  adv3: {
    pt: <><strong>Interoperabilidade</strong>: integra sistemas sem expor o ERP diretamente à Internet.</>,
    en: <><strong>Interoperability</strong>: integrates systems without exposing the ERP directly to the Internet.</>,
  },
  adv4: {
    pt: <><strong>Aderência ao problema</strong>: atende exatamente às restrições do cliente (Critério 3).</>,
    en: <><strong>Fit to the problem</strong>: meets exactly the client's constraints (Criterion 3).</>,
  },
};

export const Slide08_Hibrida: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={8} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: 'clamp(12px,2vw,24px)' }}>
          <div style={{ flex: '0 0 auto' }}>
            <CloudHybridIcon width="clamp(140px, 22vw, 300px)" height="auto" />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'clamp(6px,1vw,10px)' }}>
            <h2>{L.headingWhy[lang]}</h2>
            <p>{L.para[lang]}</p>
          </div>
        </div>
        <div className="card">
          <h2>{L.headingAdv[lang]}</h2>
          <ul>
            <li>{L.adv1[lang]}</li>
            <li>{L.adv2[lang]}</li>
            <li>{L.adv3[lang]}</li>
            <li>{L.adv4[lang]}</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
