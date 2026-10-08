import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Visão Macro',
    en: 'High-Level View',
  },
  item1: {
    pt: <><strong>On-Premise</strong>: SAP ERP + agências físicas (mantidos isolados).</>,
    en: <><strong>On-Premise</strong>: SAP ERP + physical branches (kept isolated).</>,
  },
  item2: {
    pt: <><strong>Integração privada</strong>: <strong>AWS Direct Connect</strong> + <strong>PrivateLink</strong> conectam on-prem à VPC da AWS (sa-east-1).</>,
    en: <><strong>Private integration</strong>: <strong>AWS Direct Connect</strong> + <strong>PrivateLink</strong> connect on-prem to the AWS VPC (sa-east-1).</>,
  },
  item3: {
    pt: <><strong>Núcleo de onboarding</strong>: API Gateway, Step Functions, Lambda/ECS orquestram a abertura de contas.</>,
    en: <><strong>Onboarding core</strong>: API Gateway, Step Functions, Lambda/ECS orchestrate account opening.</>,
  },
  item4: {
    pt: <><strong>Dados</strong>: Aurora, S3, SQS/EventBridge, com <strong>AWS KMS</strong> para criptografia e gestão de chaves.</>,
    en: <><strong>Data</strong>: Aurora, S3, SQS/EventBridge, with <strong>AWS KMS</strong> for encryption and key management.</>,
  },
  item5: {
    pt: <><strong>CRM</strong>: integração <strong>server-side</strong> com <strong>Salesforce CRM (SaaS)</strong>.</>,
    en: <><strong>CRM</strong>: <strong>server-side</strong> integration with <strong>Salesforce CRM (SaaS)</strong>.</>,
  },
  item6: {
    pt: <><strong>Canal cliente</strong>: Route 53, CloudFront, <strong>AWS WAF</strong>, Amazon Cognito + <strong>MFA</strong>.</>,
    en: <><strong>Customer channel</strong>: Route 53, CloudFront, <strong>AWS WAF</strong>, Amazon Cognito + <strong>MFA</strong>.</>,
  },
  item7: {
    pt: <><strong>Fronteira</strong>: <em>apenas</em> o <strong>Direct Connect</strong> cruza a fronteira on-prem ↔ AWS; SaaS via HTTPS controlado.</>,
    en: <><strong>Boundary</strong>: <em>only</em> <strong>Direct Connect</strong> crosses the on-prem ↔ AWS boundary; SaaS via controlled HTTPS.</>,
  },
  nextSlide: {
    pt: <>Próximo slide: <strong>Diagrama detalhado (SVG)</strong> com zonas numeradas ①–⑥.</>,
    en: <>Next slide: <strong>detailed diagram (SVG)</strong> with zones numbered ①–⑥.</>,
  },
};

export const Slide11_Macro: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={11} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>{L.heading[lang]}</h2>
          <ul>
            <li>{L.item1[lang]}</li>
            <li>{L.item2[lang]}</li>
            <li>{L.item3[lang]}</li>
            <li>{L.item4[lang]}</li>
            <li>{L.item5[lang]}</li>
            <li>{L.item6[lang]}</li>
            <li>{L.item7[lang]}</li>
          </ul>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          {L.nextSlide[lang]}
        </p>
      </div>
    </SlideShell>
  );
};
