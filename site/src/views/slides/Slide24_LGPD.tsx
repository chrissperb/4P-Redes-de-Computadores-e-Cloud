import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'LGPD – Princípios Aplicados à Solução (Req. 5)',
    en: 'LGPD – Principles Applied to the Solution (Req. 5)',
  },
  intro: {
    pt: <>Foco exclusivo em <strong>LGPD</strong>, conforme solicitado. Mapeamento <strong>arquitetural</strong> dos princípios aos controles propostos.</>,
    en: <>Exclusively focused on <strong>LGPD</strong>, as requested. <strong>Architectural</strong> mapping of the principles to the proposed controls.</>,
  },
  thPrinciple: {
    pt: 'Princípio LGPD',
    en: 'LGPD Principle',
  },
  thApplication: {
    pt: 'Aplicação na Arquitetura',
    en: 'Application in the Architecture',
  },
  purposeLabel: {
    pt: 'Finalidade e necessidade',
    en: 'Purpose and necessity',
  },
  purposeValue: {
    pt: <>Coleta/tratamento restritos ao <strong>processo de abertura de contas digital</strong>. Busca-se <strong>minimização</strong> de dados.</>,
    en: <>Collection/processing restricted to the <strong>digital account opening process</strong>. <strong>Data minimization</strong> is pursued.</>,
  },
  securityLabel: {
    pt: 'Segurança',
    en: 'Security',
  },
  securityValue: {
    pt: <>Criptografia <strong>em repouso</strong> (Aurora/S3/KMS), <strong>em trânsito</strong> (TLS 1.2/1.3, Direct Connect privado), boas práticas <strong>em uso</strong>. Defesa em profundidade.</>,
    en: <>Encryption <strong>at rest</strong> (Aurora/S3/KMS), <strong>in transit</strong> (TLS 1.2/1.3, private Direct Connect), <strong>in-use</strong> best practices. Defense in depth.</>,
  },
  transparencyLabel: {
    pt: 'Transparência',
    en: 'Transparency',
  },
  transparencyValue: {
    pt: <>Trilhas auditáveis (conceitual CloudTrail/Config/CloudWatch), rastreabilidade ponta-a-ponta (eventos + logs) — <strong>contribui</strong> para transparência.</>,
    en: <>Auditable trails (conceptual CloudTrail/Config/CloudWatch), end-to-end traceability (events + logs) — <strong>contributes</strong> to transparency.</>,
  },
  accountabilityLabel: {
    pt: 'Responsabilização',
    en: 'Accountability',
  },
  accountabilityValue: {
    pt: <><strong>Responsabilidade compartilhada</strong> (AWS × Cliente) claramente delimitada (Slide 20), com papéis definidos.</>,
    en: <><strong>Shared responsibility</strong> (AWS × Customer) clearly delineated (Slide 20), with defined roles.</>,
  },
  accessLabel: {
    pt: 'Acesso e exatidão',
    en: 'Access and accuracy',
  },
  accessValue: {
    pt: <><strong>IAM + MFA + políticas</strong> com menor privilégio (Slide 21). Acesso restrito por necessidade funcional.</>,
    en: <><strong>IAM + MFA + policies</strong> with least privilege (Slide 21). Access restricted by functional need.</>,
  },
  limitationLabel: {
    pt: 'Limitação de tratamento e eliminação',
    en: 'Processing limitation and elimination',
  },
  limitationValue: {
    pt: <><strong>S3 Lifecycle</strong> (conceitual) e políticas de retenção/expurgo, alinhadas ao ciclo de vida dos documentos/artefatos.</>,
    en: <><strong>S3 Lifecycle</strong> (conceptual) and retention/disposal policies, aligned with the lifecycle of documents/artifacts.</>,
  },
  note: {
    pt: <>Abordagem <strong>pragmática e conceitual</strong>: visa aplicar princípios arquiteturalmente, contribuindo para atender ao <strong>Req. 5</strong> e ao <strong>Critério 3</strong> (aderência às necessidades do cliente).</>,
    en: <>A <strong>pragmatic and conceptual</strong> approach: it aims to apply the principles architecturally, contributing to meeting <strong>Req. 5</strong> and <strong>Criterion 3</strong> (fit with the client's needs).</>,
  },
};

export const Slide24_LGPD: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={24} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>{L.heading[lang]}</h2>
          <p>{L.intro[lang]}</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>{L.thPrinciple[lang]}</th>
              <th>{L.thApplication[lang]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{L.purposeLabel[lang]}</strong></td>
              <td>{L.purposeValue[lang]}</td>
            </tr>
            <tr>
              <td><strong>{L.securityLabel[lang]}</strong></td>
              <td>{L.securityValue[lang]}</td>
            </tr>
            <tr>
              <td><strong>{L.transparencyLabel[lang]}</strong></td>
              <td>{L.transparencyValue[lang]}</td>
            </tr>
            <tr>
              <td><strong>{L.accountabilityLabel[lang]}</strong></td>
              <td>{L.accountabilityValue[lang]}</td>
            </tr>
            <tr>
              <td><strong>{L.accessLabel[lang]}</strong></td>
              <td>{L.accessValue[lang]}</td>
            </tr>
            <tr>
              <td><strong>{L.limitationLabel[lang]}</strong></td>
              <td>{L.limitationValue[lang]}</td>
            </tr>
          </tbody>
        </table>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          {L.note[lang]}
        </p>
      </div>
    </SlideShell>
  );
};
