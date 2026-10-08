import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Auditoria, Monitoração e Rastreabilidade (Req. 5)',
    en: 'Auditing, Monitoring and Traceability (Req. 5)',
  },
  intro: {
    pt: <>Conforme Unid. III, pp. 25–26: <em>auditoria</em> simplifica gestão de risco/conformidade; <em>monitoração</em> analisa disponibilidade/desempenho via ferramentas manuais/automatizadas.</>,
    en: <>As per Unit III, pp. 25–26: <em>auditing</em> simplifies risk/compliance management; <em>monitoring</em> analyzes availability/performance through manual/automated tools.</>,
  },
  liAudit: {
    pt: <><strong>Auditoria (trilhas)</strong>: <em>conceitualmente</em>, <strong>AWS CloudTrail</strong> registra ações/API calls (quem, quando, onde) — viabiliza <strong>não-repúdio</strong> e investigação. <strong>AWS Config</strong> (conceitual) permite avaliar configurações contra regras desejadas.</>,
    en: <><strong>Auditing (trails)</strong>: <em>conceptually</em>, <strong>AWS CloudTrail</strong> records actions/API calls (who, when, where) — enabling <strong>non-repudiation</strong> and investigation. <strong>AWS Config</strong> (conceptual) allows evaluating configurations against desired rules.</>,
  },
  liImmutable: {
    pt: <><strong>Imutabilidade</strong>: <em>conceitualmente</em>, <strong>S3 Object Lock</strong> pode proteger logs contra exclusão/alteração indevida.</>,
    en: <><strong>Immutability</strong>: <em>conceptually</em>, <strong>S3 Object Lock</strong> can protect logs against deletion/improper alteration.</>,
  },
  liMonitoring: {
    pt: <><strong>Monitoração</strong>: <em>conceitualmente</em>, <strong>Amazon CloudWatch</strong> (métricas/logs/alarms) detecta anomalias e dispara respostas oportunas.</>,
    en: <><strong>Monitoring</strong>: <em>conceptually</em>, <strong>Amazon CloudWatch</strong> (metrics/logs/alarms) detects anomalies and triggers timely responses.</>,
  },
  liTraceability: {
    pt: <><strong>Rastreabilidade end-to-end</strong>: eventos (SQS/EventBridge) + logs auditáveis cobrem todo o fluxo de abertura de contas (Slide 19).</>,
    en: <><strong>End-to-end traceability</strong>: events (SQS/EventBridge) + auditable logs cover the entire account opening flow (Slide 19).</>,
  },
  liLgpd: {
    pt: <><strong>Apoio à LGPD</strong>: transparência, responsabilização e capacidade de demonstração de controles (princípios aplicados – Slide 24).</>,
    en: <><strong>LGPD support</strong>: transparency, accountability and the ability to demonstrate controls (applied principles – Slide 24).</>,
  },
  note: {
    pt: <>Serviços citados como <strong>exemplos de implementação</strong> dos conceitos apresentados no material didático (vendor-agnóstico na fundamentação).</>,
    en: <>Services cited as <strong>implementation examples</strong> of the concepts presented in the course material (vendor-agnostic in the foundations).</>,
  },
};

export const Slide23_Auditoria: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={23} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
        <p>{L.intro[lang]}</p>
        <ul>
          <li>{L.liAudit[lang]}</li>
          <li>{L.liImmutable[lang]}</li>
          <li>{L.liMonitoring[lang]}</li>
          <li>{L.liTraceability[lang]}</li>
          <li>{L.liLgpd[lang]}</li>
        </ul>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          {L.note[lang]}
        </p>
      </div>
    </SlideShell>
  );
};
