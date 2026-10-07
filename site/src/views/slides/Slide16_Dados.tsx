import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide16_Dados: React.FC = () => {
  return (
    <SlideShell id={16} total={totalSlides} title={slidesData[15].title}>
      <div className="card">
        <h2>Componentes e Funcionalidades</h2>
        <ul>
          <li><strong>Amazon Aurora</strong>: armazenamento transacional estruturado (dados de conta/propostas) com alta disponibilidade.</li>
          <li><strong>Amazon S3</strong>: armazenamento de documentos/artefatos com controles de acesso e políticas de ciclo de vida.</li>
          <li><strong>Amazon SQS / EventBridge</strong>: desacoplamento assíncrono (event-driven) entre etapas — reduz acoplamento, melhora resiliência.</li>
          <li><strong>AWS KMS (Key Management Service)</strong>: <strong>gestão centralizada de chaves criptográficas</strong>. Suporta <strong>criptografia em repouso</strong> e reforça <strong>criptografia em uso</strong> via boas práticas (conceito dos 3 estados – Unid. III, p. 25).</li>
          <li><strong>Proteção de dados</strong>: base para minimização/tratamento adequado, alinhado aos <strong>princípios LGPD</strong> (Slide 24).</li>
        </ul>
      </div>
    </SlideShell>
  );
};
