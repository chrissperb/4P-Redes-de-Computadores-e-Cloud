import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  thRequirement: { pt: 'Requisito (Cliente)', en: 'Requirement (Client)' },
  thDecision: { pt: 'Decisão Arquitetural', en: 'Architectural Decision' },
  thRationale: { pt: 'Justificativa', en: 'Rationale' },
  thGrounding: {
    pt: 'Fundamentação (Material Didático)',
    en: 'Grounding (Course Material)',
  },

  r1c1: { pt: '1. SAP ERP on-premise (manter)', en: '1. SAP ERP on-premise (keep)' },
  r1c2a: { pt: 'Arquitetura ', en: 'Hybrid ' },
  r1c2b: { pt: 'híbrida', en: 'architecture' },
  r1c2c: { pt: ' (on-prem ↔ nuvem pública)', en: ' (on-prem ↔ public cloud)' },
  r1c3: {
    pt: 'Respeita restrição de segurança sem abrir o ERP à Internet.',
    en: 'Respects the security restriction without exposing the ERP to the Internet.',
  },
  r1c4: {
    pt: 'Cloud híbrida (Unid. IV). Modelo de implementação e separação de domínios.',
    en: 'Hybrid cloud (Unit IV). Implementation model and domain separation.',
  },

  r2c1: { pt: '2. Salesforce CRM (SaaS)', en: '2. Salesforce CRM (SaaS)' },
  r2c2a: { pt: 'Integração ', en: 'Server-side ' },
  r2c2b: { pt: 'server-side', en: 'integration' },
  r2c2c: { pt: ' via HTTPS (saídas controladas)', en: ' via HTTPS (controlled egress)' },
  r2c3: {
    pt: 'Evita exposição de credenciais no front; mantém comunicação segura entre sistemas (Req. 4).',
    en: 'Prevents credential exposure on the front end; maintains secure communication between systems (Req. 4).',
  },
  r2c4: {
    pt: 'Arquiteturas, comunicação entre sistemas (Unid. I–III). Camada de Aplicação (Unid. II).',
    en: 'Architectures, communication between systems (Units I–III). Application Layer (Unit II).',
  },

  r3c1a: { pt: '3. Solução em ', en: '3. Solution on a ' },
  r3c1b: { pt: 'nuvem pública', en: 'public cloud' },
  aws: { pt: 'AWS', en: 'AWS' },
  r3c2b: { pt: ' (sa-east-1)', en: ' (sa-east-1)' },
  r3c3: {
    pt: 'Ecossistema maduro, compatível com integração privada (Direct Connect), narrativa sólida p/ justificativa.',
    en: 'Mature ecosystem, compatible with private integration (Direct Connect), solid narrative for the rationale.',
  },
  r3c4: {
    pt: 'Principais provedores e modelos (Unid. IV, pp. 5–7).',
    en: 'Main providers and models (Unit IV, pp. 5–7).',
  },

  r4c1: { pt: '4. Interligação entre todos os sistemas', en: '4. Interconnection between all systems' },
  awsDirectConnect: { pt: 'AWS Direct Connect', en: 'AWS Direct Connect' },
  r4c2b: { pt: ' (privado) + HTTPS controlado p/ SaaS', en: ' (private) + controlled HTTPS for SaaS' },
  r4c3a: { pt: 'Tráfego crítico SAP↔núvem em ', en: 'Critical SAP↔cloud traffic over a ' },
  r4c3b: { pt: 'link dedicado privado', en: 'dedicated private link' },
  r4c3c: {
    pt: '; integrações SaaS por egress controlado.',
    en: '; SaaS integrations via controlled egress.',
  },
  r4c4: {
    pt: 'Conceitos de rede, TCP/IP, segurança por camadas (Unid. II). Cloud pública/híbrida (Unid. IV).',
    en: 'Network concepts, TCP/IP, layered security (Unit II). Public/hybrid cloud (Unit IV).',
  },

  r5c1: { pt: '5. Segurança aplicável', en: '5. Applicable security' },
  r5c2: {
    pt: 'Resp. compartilhada, IAM/MFA, criptografia (repouso/trânsito/uso), auditoria/monitoração (LGPD por princípios)',
    en: 'Shared responsibility, IAM/MFA, encryption (at rest/in transit/in use), auditing/monitoring (LGPD via principles)',
  },
  r5c3a: { pt: 'Abordagem ', en: 'A ' },
  r5c3b: { pt: 'por camadas', en: 'layered' },
  r5c3c: {
    pt: ' (defesa em profundidade), ancorada em conceitos didáticos (não só de mercado).',
    en: ' approach (defense in depth), anchored in course concepts (not only market ones).',
  },
  r5c4: {
    pt: 'Componentes de Segurança em Cloud (Unid. III, pp. 22–27); Segurança de Redes (Unid. II, p. 40+); Autenticação (Unid. II, p. 54+).',
    en: 'Cloud Security Components (Unit III, pp. 22–27); Network Security (Unit II, p. 40+); Authentication (Unit II, p. 54+).',
  },
};

export const Slide07_Rastreabilidade: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={7} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <table className="table">
          <thead>
            <tr>
              <th>{L.thRequirement[lang]}</th>
              <th>{L.thDecision[lang]}</th>
              <th>{L.thRationale[lang]}</th>
              <th>{L.thGrounding[lang]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{L.r1c1[lang]}</td>
              <td>{L.r1c2a[lang]}<strong>{L.r1c2b[lang]}</strong>{L.r1c2c[lang]}</td>
              <td>{L.r1c3[lang]}</td>
              <td>{L.r1c4[lang]}</td>
            </tr>
            <tr>
              <td>{L.r2c1[lang]}</td>
              <td>{L.r2c2a[lang]}<strong>{L.r2c2b[lang]}</strong>{L.r2c2c[lang]}</td>
              <td>{L.r2c3[lang]}</td>
              <td>{L.r2c4[lang]}</td>
            </tr>
            <tr>
              <td>{L.r3c1a[lang]}<strong>{L.r3c1b[lang]}</strong></td>
              <td><strong>{L.aws[lang]}</strong>{L.r3c2b[lang]}</td>
              <td>{L.r3c3[lang]}</td>
              <td>{L.r3c4[lang]}</td>
            </tr>
            <tr>
              <td>{L.r4c1[lang]}</td>
              <td><strong>{L.awsDirectConnect[lang]}</strong>{L.r4c2b[lang]}</td>
              <td>{L.r4c3a[lang]}<strong>{L.r4c3b[lang]}</strong>{L.r4c3c[lang]}</td>
              <td>{L.r4c4[lang]}</td>
            </tr>
            <tr>
              <td>{L.r5c1[lang]}</td>
              <td>{L.r5c2[lang]}</td>
              <td>{L.r5c3a[lang]}<strong>{L.r5c3b[lang]}</strong>{L.r5c3c[lang]}</td>
              <td>{L.r5c4[lang]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SlideShell>
  );
};
