import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Componentes e Funcionalidades',
    en: 'Components and Functions',
  },
  item1: {
    pt: <><strong>Amazon API Gateway</strong>: ponto único de entrada (gestão de tráfego, validação, controle de acesso). Ajuda a conter superfície de exposição.</>,
    en: <><strong>Amazon API Gateway</strong>: single entry point (traffic management, validation, access control). Helps contain the exposure surface.</>,
  },
  item2: {
    pt: <><strong>AWS Step Functions</strong>: orquestra o <strong>fluxo de abertura de contas digital</strong> (estados, retries, tratamento de falhas) — promove consistência do processo.</>,
    en: <><strong>AWS Step Functions</strong>: orchestrates the <strong>digital account opening flow</strong> (states, retries, fault handling) — promotes process consistency.</>,
  },
  item3: {
    pt: <><strong>AWS Lambda / ECS</strong>: lógica de negócio sem servidor/orquestrada (PaaS) para processamento de etapas do onboarding (conforme modelos de serviço – Unid. III).</>,
    en: <><strong>AWS Lambda / ECS</strong>: serverless/orchestrated business logic (PaaS) for processing onboarding steps (as per service models – Unit III).</>,
  },
  item4: {
    pt: <><strong>Segregação de responsabilidades</strong>: núcleo de processamento isolado da camada de dados e do canal do cliente, alinhado a boas práticas de arquitetura.</>,
    en: <><strong>Separation of responsibilities</strong>: processing core isolated from the data layer and the customer channel, aligned with architecture best practices.</>,
  },
};

export const Slide15_Nucleo: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={15} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
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
