import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'IAM, Políticas de Segurança e MFA (Req. 5)',
    en: 'IAM, Security Policies and MFA (Req. 5)',
  },
  iamLabel: {
    pt: 'IAM (Identity and Access Management)',
    en: 'IAM (Identity and Access Management)',
  },
  iamText1: {
    pt: ': especifica ',
    en: ': specifies ',
  },
  iamWho: {
    pt: 'quem/o que',
    en: 'who/what',
  },
  iamText2: {
    pt: ' pode acessar recursos, com permissões refinadas e centralizadas (Unid. III, p. 23). Aplicação do ',
    en: ' can access resources, with refined and centralized permissions (Unit III, p. 23). Application of the ',
  },
  iamLeast: {
    pt: 'princípio do menor privilégio',
    en: 'principle of least privilege',
  },
  iamEnd: {
    pt: '.',
    en: '.',
  },
  policiesLabel: {
    pt: 'Políticas de Segurança',
    en: 'Security Policies',
  },
  policiesText: {
    pt: ': conjunto de princípios/diretrizes que orientam a estratégia de segurança (Unid. III, p. 24). Traduzidas em políticas de acesso, configurações seguras e rastreabilidade.',
    en: ': set of principles/guidelines that guide the security strategy (Unit III, p. 24). Translated into access policies, secure configurations and traceability.',
  },
  mfaLabel: {
    pt: 'MFA (Autenticação Multifator)',
    en: 'MFA (Multifactor Authentication)',
  },
  mfaText1: {
    pt: ': processo de login em etapas (além da senha). Reduz risco de acesso não autorizado em caso de comprometimento de credenciais (Unid. III, pp. 24–25). Aplicado no ',
    en: ': staged login process (beyond the password). Reduces the risk of unauthorized access in case of credential compromise (Unit III, pp. 24–25). Applied in ',
  },
  cognitoLabel: {
    pt: 'Amazon Cognito',
    en: 'Amazon Cognito',
  },
  mfaText2: {
    pt: ' (canal do cliente).',
    en: ' (customer channel).',
  },
  depthLabel: {
    pt: 'Defesa em profundidade',
    en: 'Defense in depth',
  },
  depthText: {
    pt: ': autenticação/autorização em múltiplas camadas (conceito de Segurança de Redes – Unid. II, p. 40+).',
    en: ': authentication/authorization on multiple layers (Network Security concept – Unit II, p. 40+).',
  },
};

export const Slide21_IAM: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={21} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
        <ul>
          <li><strong>{L.iamLabel[lang]}</strong>{L.iamText1[lang]}<em>{L.iamWho[lang]}</em>{L.iamText2[lang]}<strong>{L.iamLeast[lang]}</strong>{L.iamEnd[lang]}</li>
          <li><strong>{L.policiesLabel[lang]}</strong>{L.policiesText[lang]}</li>
          <li><strong>{L.mfaLabel[lang]}</strong>{L.mfaText1[lang]}<strong>{L.cognitoLabel[lang]}</strong>{L.mfaText2[lang]}</li>
          <li><strong>{L.depthLabel[lang]}</strong>{L.depthText[lang]}</li>
        </ul>
      </div>
    </SlideShell>
  );
};
