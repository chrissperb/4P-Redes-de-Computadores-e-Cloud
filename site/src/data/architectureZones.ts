import { IZone } from '../models/zone.types';

export const architectureZones: IZone[] = [
  {
    id: 1,
    label: '①',
    title: {
      pt: 'Zona On-Premise',
      en: 'On-Premises Zone',
    },
    description: {
      pt: 'SAP ERP (on-premise, deve permanecer) e ambiente das agências físicas.',
      en: 'SAP ERP (on-premises, must remain on-premises) and the physical branch environment.',
    },
  },
  {
    id: 2,
    label: '②',
    title: {
      pt: 'Integração Privada',
      en: 'Private Integration',
    },
    description: {
      pt: 'AWS Direct Connect + PrivateLink — link dedicado privado, sem tráfego pela Internet pública.',
      en: 'AWS Direct Connect + PrivateLink — private dedicated link, no traffic over the public Internet.',
    },
  },
  {
    id: 3,
    label: '③',
    title: {
      pt: 'Núcleo de Onboarding',
      en: 'Onboarding Core',
    },
    description: {
      pt: 'API Gateway, orquestração (Step Functions), processamento (Lambda/ECS) para abertura de contas.',
      en: 'API Gateway, orchestration (Step Functions), processing (Lambda/ECS) for account opening.',
    },
  },
  {
    id: 4,
    label: '④',
    title: {
      pt: 'Camada de Dados',
      en: 'Data Layer',
    },
    description: {
      pt: 'Aurora, S3, SQS/EventBridge e AWS KMS para criptografia e gestão de chaves.',
      en: 'Aurora, S3, SQS/EventBridge and AWS KMS for encryption and key management.',
    },
  },
  {
    id: 5,
    label: '⑤',
    title: {
      pt: 'Salesforce CRM',
      en: 'Salesforce CRM',
    },
    description: {
      pt: 'Integração server-side com Salesforce (SaaS) — comunicação segura entre sistemas.',
      en: 'Server-side integration with Salesforce (SaaS) — secure communication between systems.',
    },
  },
  {
    id: 6,
    label: '⑥',
    title: {
      pt: 'Canal do Cliente',
      en: 'Customer Channel',
    },
    description: {
      pt: 'Route 53, CloudFront, AWS WAF, Amazon Cognito + MFA — entrada pública controlada e filtrada.',
      en: 'Route 53, CloudFront, AWS WAF, Amazon Cognito + MFA — controlled, filtered public entry.',
    },
  },
];