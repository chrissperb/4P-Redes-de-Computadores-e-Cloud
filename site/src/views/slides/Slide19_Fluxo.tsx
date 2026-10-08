import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';
import { FlowDiagramIcon } from '../../components/icons/Illustrations';

export const Slide19_Fluxo: React.FC = () => {
  return (
    <SlideShell id={19} total={totalSlides} title={slidesData[18].title}>
      <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: 'clamp(12px,2vw,24px)' }}>
        <div style={{ flex: '0 0 auto' }}>
          <FlowDiagramIcon width="clamp(150px, 22vw, 300px)" height="auto" />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Fluxo End-to-End (Deliv. 2)</h2>
        <ol>
          <li><strong>Solicitação</strong> (Cliente) → Acesso via canal público (CloudFront + WAF) com autenticação (Cognito + MFA).</li>
          <li><strong>Validação</strong> → API Gateway recebe requisição e aciona orquestração (Step Functions).</li>
          <li><strong>Verificações</strong> → Núcleo (Lambda/ECS) consulta/valida regras; quando necessário, integra-se ao <strong>SAP ERP</strong> via <strong>Direct Connect + PrivateLink</strong>.</li>
          <li><strong>CRM</strong> → Registro/atualização no <strong>Salesforce CRM (SaaS)</strong> via integração <strong>server-side</strong> (autorizada).</li>
          <li><strong>Persistência</strong> → Dados gravados em Aurora/S3 com criptografia via <strong>KMS</strong> (repouso).</li>
          <li><strong>Eventos</strong> → SQS/EventBridge notificam etapas, garantindo rastreabilidade e consistência.</li>
          <li><strong>Resposta</strong> → Cliente recebe retorno seguro pelo mesmo canal. <strong>Trilhas</strong> registradas (auditoria) em todo o fluxo.</li>
        </ol>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          Fluxo reutiliza as <strong>mesmas zonas/cores</strong> do diagrama (Slide 12), reforçando clareza de diagramação.
        </p>
        </div>
      </div>
    </SlideShell>
  );
};
