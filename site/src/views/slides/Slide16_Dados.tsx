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
    pt: <><strong>Amazon Aurora</strong>: armazenamento transacional estruturado (dados de conta/propostas) com alta disponibilidade.</>,
    en: <><strong>Amazon Aurora</strong>: structured transactional storage (account/proposal data) with high availability.</>,
  },
  item2: {
    pt: <><strong>Amazon S3</strong>: armazenamento de documentos/artefatos com controles de acesso e políticas de ciclo de vida.</>,
    en: <><strong>Amazon S3</strong>: document/artifact storage with access controls and lifecycle policies.</>,
  },
  item3: {
    pt: <><strong>Amazon SQS / EventBridge</strong>: desacoplamento assíncrono (event-driven) entre etapas — reduz acoplamento, melhora resiliência.</>,
    en: <><strong>Amazon SQS / EventBridge</strong>: asynchronous decoupling (event-driven) between steps — reduces coupling, improves resilience.</>,
  },
  item4: {
    pt: <><strong>AWS KMS (Key Management Service)</strong>: <strong>gestão centralizada de chaves criptográficas</strong>. Suporta <strong>criptografia em repouso</strong> e reforça <strong>criptografia em uso</strong> via boas práticas (conceito dos 3 estados – Unidade III, p. 25).</>,
    en: <><strong>AWS KMS (Key Management Service)</strong>: <strong>centralized management of cryptographic keys</strong>. Supports <strong>encryption at rest</strong> and reinforces <strong>encryption in use</strong> through best practices (concept of the 3 states – Unit III, p. 25).</>,
  },
  item5: {
    pt: <><strong>Proteção de dados</strong>: base para minimização/tratamento adequado, alinhado aos <strong>princípios LGPD</strong> (Slide 24).</>,
    en: <><strong>Data protection</strong>: basis for minimization/appropriate processing, aligned with the <strong>LGPD principles</strong> (Slide 24).</>,
  },
};

export const Slide16_Dados: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={16} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
        <ul>
          <li>{L.item1[lang]}</li>
          <li>{L.item2[lang]}</li>
          <li>{L.item3[lang]}</li>
          <li>{L.item4[lang]}</li>
          <li>{L.item5[lang]}</li>
        </ul>
      </div>
    </SlideShell>
  );
};
