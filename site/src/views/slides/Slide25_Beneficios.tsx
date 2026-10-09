import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Principais Benefícios da Solução Proposta (Deliv. 5)',
    en: 'Key Benefits of the Proposed Solution (Deliv. 5)',
  },
  liSecurity: {
    pt: <><strong>Segurança reforçada</strong>: link privado (Direct Connect) + WAF + MFA + criptografia em repouso/trânsito + auditoria — redução da superfície de exposição.</>,
    en: <><strong>Enhanced security</strong>: private link (Direct Connect) + WAF + MFA + encryption at rest/in transit + auditing — reduced exposure surface.</>,
  },
  liFit: {
    pt: <><strong>Aderência total às restrições</strong>: mantém SAP ERP <strong>on-premise</strong>, integra Salesforce (SaaS), executa solução em nuvem pública — cobre todos os 5 requisitos (Critério 3).</>,
    en: <><strong>Full fit with the constraints</strong>: keeps SAP ERP <strong>on-premise</strong>, integrates Salesforce (SaaS), runs the solution on public cloud — covers all 5 requirements (Criterion 3).</>,
  },
  liInterop: {
    pt: <><strong>Interoperabilidade controlada</strong>: todos os sistemas interligados com comunicações definidas e autorizadas (Requisito 4).</>,
    en: <><strong>Controlled interoperability</strong>: all systems interconnected with defined and authorized communications (Requisite 4).</>,
  },
  liAgility: {
    pt: <><strong>Agilidade e time-to-market</strong>: orquestração (Step Functions) + PaaS reduz complexidade, acelera jornada de abertura de contas.</>,
    en: <><strong>Agility and time-to-market</strong>: orchestration (Step Functions) + PaaS reduces complexity, accelerates the account opening journey.</>,
  },
  liScale: {
    pt: <><strong>Escalabilidade e resiliência</strong>: arquitetura desacoplada (event-driven) e com componentes gerenciados, suportando crescimento sem reinventar infraestrutura.</>,
    en: <><strong>Scalability and resilience</strong>: decoupled (event-driven) architecture with managed components, supporting growth without reinventing infrastructure.</>,
  },
  liDefense: {
    pt: <><strong>Defesa em profundidade + governança</strong>: responsabilidade compartilhada bem delimitada, trilhas auditáveis e princípios LGPD aplicados arquiteturalmente.</>,
    en: <><strong>Defense in depth + governance</strong>: well-delineated shared responsibility, auditable trails and LGPD principles applied architecturally.</>,
  },
};

export const Slide25_Beneficios: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={25} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>{L.heading[lang]}</h2>
          <ul>
            <li>{L.liSecurity[lang]}</li>
            <li>{L.liFit[lang]}</li>
            <li>{L.liInterop[lang]}</li>
            <li>{L.liAgility[lang]}</li>
            <li>{L.liScale[lang]}</li>
            <li>{L.liDefense[lang]}</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
