import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Componentes e Funcionalidades',
    en: 'Components and Functions',
  },
  route53Label: {
    pt: 'Amazon Route 53',
    en: 'Amazon Route 53',
  },
  route53Text: {
    pt: ': DNS gerenciado — resolução de nomes (conceitos DNS – Unid. I).',
    en: ': Managed DNS — name resolution (DNS concepts – Unit I).',
  },
  cloudFrontLabel: {
    pt: 'Amazon CloudFront',
    en: 'Amazon CloudFront',
  },
  cloudFrontText: {
    pt: ': CDN para entrega otimizada, reduz latência e contribui p/ segurança/controle de borda.',
    en: ': CDN for optimized delivery; reduces latency and contributes to security/edge control.',
  },
  wafLabel: {
    pt: 'AWS WAF',
    en: 'AWS WAF',
  },
  wafText: {
    pt: ': Web Application Firewall — proteção contra vetores comuns, filtragem de tráfego malicioso (camada de aplicação/perímetro controlado).',
    en: ': Web Application Firewall — protection against common vectors, filtering of malicious traffic (application layer/controlled perimeter).',
  },
  cognitoLabel: {
    pt: 'Amazon Cognito + MFA',
    en: 'Amazon Cognito + MFA',
  },
  cognitoText1: {
    pt: ': gestão de identidades/autenticação de clientes. ',
    en: ': customer identity and authentication management. ',
  },
  mfaLabel: {
    pt: 'MFA',
    en: 'MFA',
  },
  cognitoText2: {
    pt: ' reforça autenticação multifator (conceito de autenticação – Unid. II, p. 54+; componentes de segurança – Unid. III, p. 24). Aplica princípio de verificação por múltiplos fatores.',
    en: ' strengthens multifactor authentication (authentication concept – Unit II, p. 54+; security components – Unit III, p. 24). Applies the multiple-factor verification principle.',
  },
  ingressLabel: {
    pt: 'Entrada pública controlada',
    en: 'Controlled public ingress',
  },
  ingressText1: {
    pt: ': única via borda (com WAF + autenticação), enquanto integrações críticas permanecem via ',
    en: ': single edge path (with WAF + authentication), while critical integrations remain over a ',
  },
  privateLinkLabel: {
    pt: 'link privado',
    en: 'private link',
  },
  ingressText2: {
    pt: ' (Direct Connect).',
    en: ' (Direct Connect).',
  },
};

export const Slide18_Canal: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={18} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
        <ul>
          <li><strong>{L.route53Label[lang]}</strong>{L.route53Text[lang]}</li>
          <li><strong>{L.cloudFrontLabel[lang]}</strong>{L.cloudFrontText[lang]}</li>
          <li><strong>{L.wafLabel[lang]}</strong>{L.wafText[lang]}</li>
          <li><strong>{L.cognitoLabel[lang]}</strong>{L.cognitoText1[lang]}<strong>{L.mfaLabel[lang]}</strong>{L.cognitoText2[lang]}</li>
          <li><strong>{L.ingressLabel[lang]}</strong>{L.ingressText1[lang]}<strong>{L.privateLinkLabel[lang]}</strong>{L.ingressText2[lang]}</li>
        </ul>
      </div>
    </SlideShell>
  );
};
