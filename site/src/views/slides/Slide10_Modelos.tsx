import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide10_Modelos: React.FC = () => {
  return (
    <SlideShell id={10} total={totalSlides} title={slidesData[9].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Aplicação na Solução</th>
              <th>Explicação (base conceitual)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>IaaS</strong> (Infraestrutura como Serviço)</td>
              <td>Elementos de rede/isolamento e recursos subjacentes que suportam a integração (conceitual)</td>
              <td>Provisão de recursos computacionais sob demanda (Unid. III – Modelos de Serviços). Flexibiliza capacidade sem gerenciar hardware físico.</td>
            </tr>
            <tr>
              <td><strong>PaaS</strong> (Plataforma como Serviço)</td>
              <td>Orquestração, funções/serviços de execução (ex.: Step Functions/Lambda/ECS) para o fluxo de onboarding</td>
              <td>Foco no desenvolvimento/execução do processo (sem gerenciar SO/infra detalhe) – alinhado a modelos de serviço em Cloud (Unid. III).</td>
            </tr>
            <tr>
              <td><strong>SaaS</strong> (Software como Serviço)</td>
              <td><strong>Salesforce CRM</strong> (fornecido diretamente pela Salesforce)</td>
              <td>Software consumido sob demanda (aplicação pronta). Atende Req. 2 e reforça interoperabilidade (Unid. III – Modelos de Serviços).</td>
            </tr>
          </tbody>
        </table>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          Classificação conceitual (vendor-agnóstica), coerente com os conceitos trabalhados ao longo da disciplina.
        </p>
      </div>
    </SlideShell>
  );
};
