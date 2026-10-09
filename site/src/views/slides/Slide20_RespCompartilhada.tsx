import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { ShieldIcon } from '../../components/icons/Illustrations';
import { useI18n } from '../../i18n/context';

const L = {
  headingModel: {
    pt: 'Modelo de Responsabilidade Compartilhada',
    en: 'Shared Responsibility Model',
  },
  respIntro: {
    pt: 'Conceito central em Segurança em Cloud: ',
    en: 'Central concept in Cloud Security: ',
  },
  respQuote: {
    pt: '"o provedor opera, gerencia e controla os componentes do sistema operacional do host e da camada de virtualização até a segurança física; o cliente é responsável pelo que coloca na nuvem"',
    en: '"the provider operates, manages and controls the components of the host operating system and the virtualization layer down to physical security; the customer is responsible for what it places in the cloud"',
  },
  respCite: {
    pt: ' (Unidade III, pp. 22–23).',
    en: ' (Unit III, pp. 22–23).',
  },
  headingAws: {
    pt: 'Responsabilidade AWS (conceitual)',
    en: 'AWS Responsibility (conceptual)',
  },
  securityWord: {
    pt: 'Segurança ',
    en: 'Security ',
  },
  awsOf: {
    pt: 'da',
    en: 'of',
  },
  awsCloud: {
    pt: ' nuvem (infra física, rede, virtualização).',
    en: ' the cloud (physical infrastructure, network, virtualization).',
  },
  awsLi2: {
    pt: 'Proteções de infraestrutura e serviços gerenciados.',
    en: 'Infrastructure protections and managed services.',
  },
  headingCustomer: {
    pt: 'Responsabilidade do Cliente (SDMD S/A)',
    en: 'Customer Responsibility (SDMD S/A)',
  },
  customerIn: {
    pt: 'na',
    en: 'in',
  },
  customerCloud: {
    pt: ' nuvem (dados, IAM, chaves, configurações).',
    en: ' the cloud (data, IAM, keys, configurations).',
  },
  customerLi2: {
    pt: 'Controle de acesso, criptografia, logs, conformidade com LGPD.',
    en: 'Access control, encryption, logs, compliance with LGPD.',
  },
  customerLi3: {
    pt: 'Segurança das integrações e do uso dos serviços.',
    en: 'Security of integrations and of service usage.',
  },
};

export const Slide20_RespCompartilhada: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={20} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: 'clamp(12px,2vw,24px)' }}>
          <div style={{ flex: '0 0 auto' }}>
            <ShieldIcon width="clamp(90px, 12vw, 160px)" height="auto" />
          </div>
          <div style={{ flex: 1 }}>
            <h2>{L.headingModel[lang]}</h2>
            <p>{L.respIntro[lang]}<em>{L.respQuote[lang]}</em>{L.respCite[lang]}</p>
          </div>
        </div>
        <div className="grid-two">
          <div className="card">
            <h2>{L.headingAws[lang]}</h2>
            <ul>
              <li>{L.securityWord[lang]}<strong>{L.awsOf[lang]}</strong>{L.awsCloud[lang]}</li>
              <li>{L.awsLi2[lang]}</li>
            </ul>
          </div>
          <div className="card">
            <h2>{L.headingCustomer[lang]}</h2>
            <ul>
              <li>{L.securityWord[lang]}<strong>{L.customerIn[lang]}</strong>{L.customerCloud[lang]}</li>
              <li>{L.customerLi2[lang]}</li>
              <li>{L.customerLi3[lang]}</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
