import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  challengeTitle: { pt: 'Desafio Proposto', en: 'Proposed Challenge' },
  challengeA: {
    pt: 'Como arquiteto da Empresa de Soluções em TI, formular uma proposta de solução para viabilizar a ',
    en: 'As architect of the IT Solutions Company, formulate a solution proposal to enable ',
  },
  digitalAccountOpening: { pt: 'abertura de contas digital', en: 'digital account opening' },
  challengeB: {
    pt: ', contemplando todos os requisitos especificados e os entregáveis solicitados.',
    en: ', addressing all specified requirements and the requested deliverables.',
  },
  keyPointsTitle: { pt: 'Pontos-Chave', en: 'Key Points' },
  li1a: { pt: 'Manter ', en: 'Keep ' },
  sapErp: { pt: 'SAP ERP', en: 'SAP ERP' },
  li1b: { pt: ' em operação ', en: ' in operation ' },
  onPremise: { pt: 'on-premise', en: 'on-premise' },
  li1c: { pt: ' (questão de segurança).', en: ' (a security matter).' },
  li2a: { pt: 'Integrar-se ao ', en: 'Integrate with ' },
  salesforceCrm: { pt: 'Salesforce CRM', en: 'Salesforce CRM' },
  li2b: { pt: ' (SaaS, disponibilizado diretamente pela Salesforce).', en: ' (SaaS, made available directly by Salesforce).' },
  li3a: { pt: 'Executar a solução de abertura digital em ', en: 'Execute the digital account opening solution on a ' },
  publicCloudPlatform: { pt: 'plataforma de nuvem pública', en: 'public cloud platform' },
  li4a: { pt: 'Garantir ', en: 'Ensure ' },
  interconnection: { pt: 'interligação e comunicação', en: 'interconnection and communication' },
  li4b: { pt: ' entre todos os sistemas.', en: ' among all systems.' },
  li5a: { pt: 'Considerar ', en: 'Consider ' },
  applicableSecurityReqs: { pt: 'todos os requisitos de segurança aplicáveis', en: 'all applicable security requirements' },
};

export const Slide04_Desafio: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={4} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>{L.challengeTitle[lang]}</h2>
          <p>{L.challengeA[lang]}<strong>{L.digitalAccountOpening[lang]}</strong>{L.challengeB[lang]}</p>
        </div>
        <div className="card">
          <h2>{L.keyPointsTitle[lang]}</h2>
          <ul>
            <li>{L.li1a[lang]}<strong>{L.sapErp[lang]}</strong>{L.li1b[lang]}<strong>{L.onPremise[lang]}</strong>{L.li1c[lang]}</li>
            <li>{L.li2a[lang]}<strong>{L.salesforceCrm[lang]}</strong>{L.li2b[lang]}</li>
            <li>{L.li3a[lang]}<strong>{L.publicCloudPlatform[lang]}</strong>.</li>
            <li>{L.li4a[lang]}<strong>{L.interconnection[lang]}</strong>{L.li4b[lang]}</li>
            <li>{L.li5a[lang]}<strong>{L.applicableSecurityReqs[lang]}</strong>.</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
