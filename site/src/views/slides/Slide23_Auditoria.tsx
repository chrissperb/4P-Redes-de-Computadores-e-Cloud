import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide23_Auditoria: React.FC = () => {
  return (
    <SlideShell id={23} total={totalSlides} title={slidesData[22].title}>
      <div className="card">
        <h2>Auditoria, Monitoração e Rastreabilidade (Req. 5)</h2>
        <p>Conforme Unid. III, pp. 25–26: <em>auditoria</em> simplifica gestão de risco/conformidade; <em>monitoração</em> analisa disponibilidade/desempenho via ferramentas manuais/automatizadas.</p>
        <ul>
          <li><strong>Auditoria (trilhas)</strong>: <em>conceitualmente</em>, <strong>AWS CloudTrail</strong> registra ações/API calls (quem, quando, onde) — viabiliza <strong>não-repúdio</strong> e investigação. <strong>AWS Config</strong> (conceitual) permite avaliar configurações contra regras desejadas.</li>
          <li><strong>Imutabilidade</strong>: <em>conceitualmente</em>, <strong>S3 Object Lock</strong> pode proteger logs contra exclusão/alteração indevida.</li>
          <li><strong>Monitoração</strong>: <em>conceitualmente</em>, <strong>Amazon CloudWatch</strong> (métricas/logs/alarms) detecta anomalias e dispara respostas oportunas.</li>
          <li><strong>Rastreabilidade end-to-end</strong>: eventos (SQS/EventBridge) + logs auditáveis cobrem todo o fluxo de abertura de contas (Slide 19).</li>
          <li><strong>Apoio à LGPD</strong>: transparência, responsabilização e capacidade de demonstração de controles (princípios aplicados – Slide 24).</li>
        </ul>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          Serviços citados como <strong>exemplos de implementação</strong> dos conceitos apresentados no material didático (vendor-agnóstico na fundamentação).
        </p>
      </div>
    </SlideShell>
  );
};
