import { IZone } from '../models/zone.types';

export const architectureZones: IZone[] = [
  {
    id: 1,
    label: '①',
    title: 'Zona On-Premise',
    description: 'SAP ERP (on-premise, deve permanecer) e ambiente das agências físicas.',
  },
  {
    id: 2,
    label: '②',
    title: 'Integração Privada',
    description: 'AWS Direct Connect + PrivateLink — link dedicado privado, sem tráfego pela Internet pública.',
  },
  {
    id: 3,
    label: '③',
    title: 'Núcleo de Onboarding',
    description: 'API Gateway, orquestração (Step Functions), processamento (Lambda/ECS) para abertura de contas.',
  },
  {
    id: 4,
    label: '④',
    title: 'Camada de Dados',
    description: 'Aurora, S3, SQS/EventBridge e AWS KMS para criptografia e gestão de chaves.',
  },
  {
    id: 5,
    label: '⑤',
    title: 'Salesforce CRM',
    description: 'Integração server-side com Salesforce (SaaS) — comunicação segura entre sistemas.',
  },
  {
    id: 6,
    label: '⑥',
    title: 'Canal do Cliente',
    description: 'Route 53, CloudFront, AWS WAF, Amazon Cognito + MFA — entrada pública controlada e filtrada.',
  },
];
