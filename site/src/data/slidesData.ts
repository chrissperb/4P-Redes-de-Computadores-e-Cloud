import { SlidesList } from '../models/slide.types';

export const slidesData: SlidesList = [
  { id: 1, title: { pt: 'Capa', en: 'Cover' }, component: 'Slide01_Capa' },
  { id: 2, title: { pt: 'Roteiro', en: 'Roadmap' }, component: 'Slide02_Roteiro' },
  { id: 3, title: { pt: 'Contexto do Negócio', en: 'Business Context' }, component: 'Slide03_Contexto' },
  { id: 4, title: { pt: 'Desafio: Abertura de Contas', en: 'Challenge: Account Opening' }, component: 'Slide04_Desafio' },
  { id: 5, title: { pt: 'Escopo do Projeto', en: 'Project Scope' }, component: 'Slide05_Escopo' },
  { id: 6, title: { pt: 'Requisitos da Solução', en: 'Solution Requirements' }, component: 'Slide06_Requisitos' },
  { id: 7, title: { pt: 'Requisitos → Decisões Arquiteturais', en: 'Requirements → Architectural Decisions' }, component: 'Slide07_Rastreabilidade' },
  { id: 8, title: { pt: 'Por que Arquitetura Híbrida', en: 'Why Hybrid Architecture' }, component: 'Slide08_Hibrida' },
  { id: 9, title: { pt: 'Justificativa do Provedor (AWS)', en: 'Provider Justification (AWS)' }, component: 'Slide09_AWS' },
  { id: 10, title: { pt: 'Modelos de Serviço (IaaS/PaaS/SaaS)', en: 'Service Models (IaaS/PaaS/SaaS)' }, component: 'Slide10_Modelos' },
  { id: 11, title: { pt: 'Visão Macro da Arquitetura', en: 'High-Level Architecture' }, component: 'Slide11_Macro' },
  { id: 12, title: { pt: 'Diagrama de Arquitetura (Detalhado)', en: 'Architecture Diagram (Detailed)' }, component: 'Slide12_Diagrama' },
  { id: 13, title: { pt: '① Zona On-Premise', en: '① On-Premises Zone' }, component: 'Slide13_OnPrem' },
  { id: 14, title: { pt: '② Integração Privada (Direct Connect + PrivateLink)', en: '② Private Integration (Direct Connect + PrivateLink)' }, component: 'Slide14_Integracao' },
  { id: 15, title: { pt: '③ Núcleo de Onboarding', en: '③ Onboarding Core' }, component: 'Slide15_Nucleo' },
  { id: 16, title: { pt: '④ Camada de Dados', en: '④ Data Layer' }, component: 'Slide16_Dados' },
  { id: 17, title: { pt: '⑤ Integração com Salesforce CRM', en: '⑤ Salesforce CRM Integration' }, component: 'Slide17_Salesforce' },
  { id: 18, title: { pt: '⑥ Canal do Cliente', en: '⑥ Customer Channel' }, component: 'Slide18_Canal' },
  { id: 19, title: { pt: 'Fluxo End-to-End – Abertura de Conta Digital', en: 'End-to-End Flow – Digital Account Opening' }, component: 'Slide19_Fluxo' },
  { id: 20, title: { pt: 'Segurança – Responsabilidade Compartilhada', en: 'Security – Shared Responsibility' }, component: 'Slide20_RespCompartilhada' },
  { id: 21, title: { pt: 'Segurança – IAM, Políticas e MFA', en: 'Security – IAM, Policies and MFA' }, component: 'Slide21_IAM' },
  { id: 22, title: { pt: 'Segurança – Criptografia (Repouso, Trânsito e Uso)', en: 'Security – Encryption (At Rest, In Transit, In Use)' }, component: 'Slide22_Cripto' },
  { id: 23, title: { pt: 'Segurança – Auditoria, Monitoração e Rastreabilidade', en: 'Security – Auditing, Monitoring and Traceability' }, component: 'Slide23_Auditoria' },
  { id: 24, title: { pt: 'LGPD – Princípios Aplicados à Solução', en: 'LGPD – Principles Applied to the Solution' }, component: 'Slide24_LGPD' },
  { id: 25, title: { pt: 'Principais Benefícios da Solução Proposta', en: 'Key Benefits of the Proposed Solution' }, component: 'Slide25_Beneficios' },
  { id: 26, title: { pt: 'Aspectos Econômicos (PayGo / Reservado / Créditos)', en: 'Financial Aspects (PayGo / Reserved / Credits)' }, component: 'Slide26_Economia' },
  { id: 27, title: { pt: 'Conclusão', en: 'Conclusion' }, component: 'Slide27_Conclusao' },
  { id: 28, title: { pt: 'Referências', en: 'References' }, component: 'Slide28_Referencias' },
];

export const totalSlides = slidesData.length;