import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { FlowDiagramIcon } from '../../components/icons/Illustrations';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Fluxo End-to-End',
    en: 'End-to-End Flow',
  },
  step1Label: {
    pt: 'Solicitação',
    en: 'Request',
  },
  step1Text: {
    pt: ' (Cliente) → Acesso via canal público (CloudFront + WAF) com autenticação (Cognito + MFA).',
    en: ' (Client) → Access via public channel (CloudFront + WAF) with authentication (Cognito + MFA).',
  },
  step2Label: {
    pt: 'Validação',
    en: 'Validation',
  },
  step2Text: {
    pt: ' → API Gateway recebe requisição e aciona orquestração (Step Functions).',
    en: ' → API Gateway receives the request and triggers orchestration (Step Functions).',
  },
  step3Label: {
    pt: 'Verificações',
    en: 'Verifications',
  },
  step3Text1: {
    pt: ' → Núcleo (Lambda/ECS) consulta/valida regras; quando necessário, integra-se ao ',
    en: ' → Core (Lambda/ECS) queries/validates rules; when necessary, it integrates with ',
  },
  step3Sap: {
    pt: 'SAP ERP',
    en: 'SAP ERP',
  },
  step3Text2: {
    pt: ' via ',
    en: ' via ',
  },
  step3Link: {
    pt: 'Direct Connect + PrivateLink',
    en: 'Direct Connect + PrivateLink',
  },
  step3End: {
    pt: '.',
    en: '.',
  },
  step4Label: {
    pt: 'CRM',
    en: 'CRM',
  },
  step4Text1: {
    pt: ' → Registro/atualização no ',
    en: ' → Registration/update in the ',
  },
  step4Salesforce: {
    pt: 'Salesforce CRM (SaaS)',
    en: 'Salesforce CRM (SaaS)',
  },
  step4Text2: {
    pt: ' via integração ',
    en: ' via ',
  },
  step4ServerSide: {
    pt: 'server-side',
    en: 'server-side',
  },
  step4Text3: {
    pt: ' (autorizada).',
    en: ' (authorized).',
  },
  step5Label: {
    pt: 'Persistência',
    en: 'Persistence',
  },
  step5Text1: {
    pt: ' → Dados gravados em Aurora/S3 com criptografia via ',
    en: ' → Data written to Aurora/S3 with encryption via ',
  },
  step5Kms: {
    pt: 'KMS',
    en: 'KMS',
  },
  step5Text2: {
    pt: ' (repouso).',
    en: ' (at rest).',
  },
  step6Label: {
    pt: 'Eventos',
    en: 'Events',
  },
  step6Text: {
    pt: ' → SQS/EventBridge notificam etapas, garantindo rastreabilidade e consistência.',
    en: ' → SQS/EventBridge notify steps, ensuring traceability and consistency.',
  },
  step7Label: {
    pt: 'Resposta',
    en: 'Response',
  },
  step7Text1: {
    pt: ' → Cliente recebe retorno seguro pelo mesmo canal. ',
    en: ' → Client receives a secure response over the same channel. ',
  },
  step7Trilhas: {
    pt: 'Trilhas',
    en: 'Trails',
  },
  step7Text2: {
    pt: ' registradas (auditoria) em todo o fluxo.',
    en: ' recorded (audit) throughout the flow.',
  }
};

export const Slide19_Fluxo: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={19} total={totalSlides}>
      <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: 'clamp(12px,2vw,24px)' }}>
        <div style={{ flex: '0 0 auto' }}>
          <FlowDiagramIcon width="clamp(150px, 22vw, 300px)" height="auto" />
        </div>
        <div style={{ flex: 1 }}>
          <h2>{L.heading[lang]}</h2>
        <ol>
          <li><strong>{L.step1Label[lang]}</strong>{L.step1Text[lang]}</li>
          <li><strong>{L.step2Label[lang]}</strong>{L.step2Text[lang]}</li>
          <li><strong>{L.step3Label[lang]}</strong>{L.step3Text1[lang]}<strong>{L.step3Sap[lang]}</strong>{L.step3Text2[lang]}<strong>{L.step3Link[lang]}</strong>{L.step3End[lang]}</li>
          <li><strong>{L.step4Label[lang]}</strong>{L.step4Text1[lang]}<strong>{L.step4Salesforce[lang]}</strong>{L.step4Text2[lang]}<strong>{L.step4ServerSide[lang]}</strong>{L.step4Text3[lang]}</li>
          <li><strong>{L.step5Label[lang]}</strong>{L.step5Text1[lang]}<strong>{L.step5Kms[lang]}</strong>{L.step5Text2[lang]}</li>
          <li><strong>{L.step6Label[lang]}</strong>{L.step6Text[lang]}</li>
          <li><strong>{L.step7Label[lang]}</strong>{L.step7Text1[lang]}<strong>{L.step7Trilhas[lang]}</strong>{L.step7Text2[lang]}</li>
        </ol>
        </div>
      </div>
    </SlideShell>
  );
};
