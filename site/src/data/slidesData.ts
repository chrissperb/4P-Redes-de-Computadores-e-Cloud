import { SlidesList } from '../models/slide.types';

export const slidesData: SlidesList = [
  { id: 1, title: 'Capa', component: 'Slide01_Capa' },
  { id: 2, title: 'Roteiro', component: 'Slide02_Roteiro' },
  { id: 3, title: 'Contexto do Negócio', component: 'Slide03_Contexto' },
  { id: 4, title: 'Desafio: Abertura de Contas', component: 'Slide04_Desafio' },
  { id: 5, title: 'Escopo do Projeto', component: 'Slide05_Escopo' },
  { id: 6, title: 'Requisitos da Solução', component: 'Slide06_Requisitos' },
  { id: 7, title: 'Requisitos → Decisões Arquiteturais', component: 'Slide07_Rastreabilidade' },
  { id: 8, title: 'Por que Arquitetura Híbrida', component: 'Slide08_Hibrida' },
  { id: 9, title: 'Justificativa do Provedor (AWS)', component: 'Slide09_AWS' },
  { id: 10, title: 'Modelos de Serviço (IaaS/PaaS/SaaS)', component: 'Slide10_Modelos' },
  { id: 11, title: 'Visão Macro da Arquitetura', component: 'Slide11_Macro' },
  { id: 12, title: 'Diagrama de Arquitetura (Detalhado)', component: 'Slide12_Diagrama' },
  { id: 13, title: '① Zona On-Premise', component: 'Slide13_OnPrem' },
  { id: 14, title: '② Integração Privada (Direct Connect + PrivateLink)', component: 'Slide14_Integracao' },
  { id: 15, title: '③ Núcleo de Onboarding', component: 'Slide15_Nucleo' },
  { id: 16, title: '④ Camada de Dados', component: 'Slide16_Dados' },
  { id: 17, title: '⑤ Integração com Salesforce CRM', component: 'Slide17_Salesforce' },
  { id: 18, title: '⑥ Canal do Cliente', component: 'Slide18_Canal' },
  { id: 19, title: 'Fluxo End-to-End – Abertura de Conta Digital', component: 'Slide19_Fluxo' },
  { id: 20, title: 'Segurança – Responsabilidade Compartilhada', component: 'Slide20_RespCompartilhada' },
  { id: 21, title: 'Segurança – IAM, Políticas e MFA', component: 'Slide21_IAM' },
  { id: 22, title: 'Segurança – Criptografia (Repouso, Trânsito e Uso)', component: 'Slide22_Cripto' },
  { id: 23, title: 'Segurança – Auditoria, Monitoração e Rastreabilidade', component: 'Slide23_Auditoria' },
  { id: 24, title: 'LGPD – Princípios Aplicados à Solução', component: 'Slide24_LGPD' },
  { id: 25, title: 'Principais Benefícios da Solução Proposta', component: 'Slide25_Beneficios' },
  { id: 26, title: 'Aspectos Econômicos (PayGo / Reservado / Créditos)', component: 'Slide26_Economia' },
  { id: 27, title: 'Conclusão', component: 'Slide27_Conclusao' },
  { id: 28, title: 'Referências', component: 'Slide28_Referencias' },
];

export const totalSlides = slidesData.length;
