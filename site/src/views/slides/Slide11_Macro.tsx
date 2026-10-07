import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide11_Macro: React.FC = () => {
  return (
    <SlideShell id={11} total={totalSlides} title={slidesData[10].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>Visão Macro</h2>
          <ul>
            <li><strong>On-Premise</strong>: SAP ERP + agências físicas (mantidos isolados).</li>
            <li><strong>Integração privada</strong>: <strong>AWS Direct Connect</strong> + <strong>PrivateLink</strong> conectam on-prem à VPC da AWS (sa-east-1).</li>
            <li><strong>Núcleo de onboarding</strong>: API Gateway, Step Functions, Lambda/ECS orquestram a abertura de contas.</li>
            <li><strong>Dados</strong>: Aurora, S3, SQS/EventBridge, com <strong>AWS KMS</strong> para criptografia e gestão de chaves.</li>
            <li><strong>CRM</strong>: integração <strong>server-side</strong> com <strong>Salesforce CRM (SaaS)</strong>.</li>
            <li><strong>Canal cliente</strong>: Route 53, CloudFront, <strong>AWS WAF</strong>, Amazon Cognito + <strong>MFA</strong>.</li>
            <li><strong>Fronteira</strong>: <em>apenas</em> o <strong>Direct Connect</strong> cruza a fronteira on-prem ↔ AWS; SaaS via HTTPS controlado.</li>
          </ul>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          Próximo slide: <strong>Diagrama detalhado (SVG)</strong> com zonas numeradas ①–⑥.
        </p>
      </div>
    </SlideShell>
  );
};
