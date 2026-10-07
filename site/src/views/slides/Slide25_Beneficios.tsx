import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide25_Beneficios: React.FC = () => {
  return (
    <SlideShell id={25} total={totalSlides} title={slidesData[24].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>Principais Benefícios da Solução Proposta (Deliv. 5)</h2>
          <ul>
            <li><strong>Segurança reforçada</strong>: link privado (Direct Connect) + WAF + MFA + criptografia em repouso/trânsito + auditoria — redução da superfície de exposição.</li>
            <li><strong>Aderência total às restrições</strong>: mantém SAP ERP <strong>on-premise</strong>, integra Salesforce (SaaS), executa solução em nuvem pública — cobre todos os 5 requisitos (Critério 3).</li>
            <li><strong>Interoperabilidade controlada</strong>: todos os sistemas interligados com comunicações definidas e autorizadas (Req. 4).</li>
            <li><strong>Agilidade e time-to-market</strong>: orquestração (Step Functions) + PaaS reduz complexidade, acelera jornada de abertura de contas.</li>
            <li><strong>Escalabilidade e resiliência</strong>: arquitetura desacoplada (event-driven) e com componentes gerenciados, suportando crescimento sem reinventar infraestrutura.</li>
            <li><strong>Defesa em profundidade + governança</strong>: responsabilidade compartilhada bem delimitada, trilhas auditáveis e princípios LGPD aplicados arquiteturalmente.</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
