import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { StackIcon } from '../../components/icons/Illustrations';
import { useI18n } from '../../i18n/context';

const L = {
  intro: {
    pt: <>A solução combina os <strong>três modelos de serviço</strong> de forma coerente com os conceitos da disciplina (Unid. III).</>,
    en: <>The solution combines the <strong>three service models</strong> coherently with the concepts covered in the course (Unit III).</>,
  },
  thModel: {
    pt: 'Modelo',
    en: 'Model',
  },
  thApplication: {
    pt: 'Aplicação na Solução',
    en: 'Application in the Solution',
  },
  thExplanation: {
    pt: 'Explicação (base conceitual)',
    en: 'Explanation (conceptual basis)',
  },
  iaasName: {
    pt: <><strong>IaaS</strong> (Infraestrutura como Serviço)</>,
    en: <><strong>IaaS</strong> (Infrastructure as a Service)</>,
  },
  iaasApplication: {
    pt: 'Elementos de rede/isolamento e recursos subjacentes que suportam a integração (conceitual)',
    en: 'Network/isolation elements and underlying resources that support the integration (conceptual)',
  },
  iaasExplanation: {
    pt: 'Provisão de recursos computacionais sob demanda (Unid. III – Modelos de Serviços). Flexibiliza capacidade sem gerenciar hardware físico.',
    en: 'Provisioning of computing resources on demand (Unit III – Service Models). Makes capacity flexible without managing physical hardware.',
  },
  paasName: {
    pt: <><strong>PaaS</strong> (Plataforma como Serviço)</>,
    en: <><strong>PaaS</strong> (Platform as a Service)</>,
  },
  paasApplication: {
    pt: 'Orquestração, funções/serviços de execução (ex.: Step Functions/Lambda/ECS) para o fluxo de onboarding',
    en: 'Orchestration, execution functions/services (e.g., Step Functions/Lambda/ECS) for the onboarding flow',
  },
  paasExplanation: {
    pt: 'Foco no desenvolvimento/execução do processo (sem gerenciar SO/infra detalhe) – alinhado a modelos de serviço em Cloud (Unid. III).',
    en: 'Focus on developing/running the process (without managing OS/infrastructure detail) – aligned with cloud service models (Unit III).',
  },
  saasName: {
    pt: <><strong>SaaS</strong> (Software como Serviço)</>,
    en: <><strong>SaaS</strong> (Software as a Service)</>,
  },
  saasApplication: {
    pt: <><strong>Salesforce CRM</strong> (fornecido diretamente pela Salesforce)</>,
    en: <><strong>Salesforce CRM</strong> (provided directly by Salesforce)</>,
  },
  saasExplanation: {
    pt: 'Software consumido sob demanda (aplicação pronta). Atende Req. 2 e reforça interoperabilidade (Unid. III – Modelos de Serviços).',
    en: 'Software consumed on demand (ready-to-use application). Meets Req. 2 and reinforces interoperability (Unit III – Service Models).',
  },
  footnote: {
    pt: 'Classificação conceitual (vendor-agnóstica), coerente com os conceitos trabalhados ao longo da disciplina.',
    en: 'Conceptual classification (vendor-agnostic), consistent with the concepts covered throughout the course.',
  },
};

export const Slide10_Modelos: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={10} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 'clamp(12px,2vw,24px)' }}>
          <div style={{ flex: '0 0 auto' }}>
            <StackIcon width="clamp(130px, 18vw, 240px)" height="auto" />
          </div>
          <p style={{ flex: 1, margin: 0, color: 'var(--muted)', alignSelf: 'center' }}>
            {L.intro[lang]}
          </p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>{L.thModel[lang]}</th>
              <th>{L.thApplication[lang]}</th>
              <th>{L.thExplanation[lang]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{L.iaasName[lang]}</td>
              <td>{L.iaasApplication[lang]}</td>
              <td>{L.iaasExplanation[lang]}</td>
            </tr>
            <tr>
              <td>{L.paasName[lang]}</td>
              <td>{L.paasApplication[lang]}</td>
              <td>{L.paasExplanation[lang]}</td>
            </tr>
            <tr>
              <td>{L.saasName[lang]}</td>
              <td>{L.saasApplication[lang]}</td>
              <td>{L.saasExplanation[lang]}</td>
            </tr>
          </tbody>
        </table>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          {L.footnote[lang]}
        </p>
      </div>
    </SlideShell>
  );
};
