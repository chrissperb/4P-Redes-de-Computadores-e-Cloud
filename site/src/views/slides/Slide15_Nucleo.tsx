import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide15_Nucleo: React.FC = () => {
  return (
    <SlideShell id={15} total={totalSlides} title={slidesData[14].title}>
      <div className="card">
        <h2>Componentes e Funcionalidades</h2>
        <ul>
          <li><strong>Amazon API Gateway</strong>: ponto único de entrada (gestão de tráfego, validação, controle de acesso). Ajuda a conter superfície de exposição.</li>
          <li><strong>AWS Step Functions</strong>: orquestra o <strong>fluxo de abertura de contas digital</strong> (estados, retries, tratamento de falhas) — promove consistência do processo.</li>
          <li><strong>AWS Lambda / ECS</strong>: lógica de negócio sem servidor/orquestrada (PaaS) para processamento de etapas do onboarding (conforme modelos de serviço – Unid. III).</li>
          <li><strong>Segregação de responsabilidades</strong>: núcleo de processamento isolado da camada de dados e do canal do cliente, alinhado a boas práticas de arquitetura.</li>
        </ul>
      </div>
    </SlideShell>
  );
};
