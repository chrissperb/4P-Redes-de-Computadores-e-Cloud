import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Criptografia – Repouso, Trânsito e Uso (Req. 5)',
    en: 'Encryption – At Rest, In Transit and In Use (Req. 5)',
  },
  introText: {
    pt: 'Conforme Unid. III, p. 25: criptografia protege informações ',
    en: 'As per Unit III, p. 25: encryption protects information ',
  },
  introRest: {
    pt: 'em repouso',
    en: 'at rest',
  },
  introComma: {
    pt: ', ',
    en: ', ',
  },
  introTransit: {
    pt: 'em trânsito',
    en: 'in transit',
  },
  introOr: {
    pt: ' ou ',
    en: ' or ',
  },
  introUse: {
    pt: 'em uso',
    en: 'in use',
  },
  introEnd: {
    pt: '.',
    en: '.',
  },
  restLabel: {
    pt: 'Em repouso (at rest)',
    en: 'At rest',
  },
  restText1: {
    pt: ': dados armazenados em ',
    en: ': data stored in ',
  },
  restAurora: {
    pt: 'Amazon Aurora',
    en: 'Amazon Aurora',
  },
  restComma: {
    pt: ', ',
    en: ', ',
  },
  restS3: {
    pt: 'Amazon S3',
    en: 'Amazon S3',
  },
  restText2: {
    pt: ', com criptografia gerenciada via ',
    en: ', with encryption managed via ',
  },
  restKms: {
    pt: 'AWS KMS',
    en: 'AWS KMS',
  },
  restText3: {
    pt: '. Reduz exposição caso ocorra acesso não autorizado ao armazenamento.',
    en: '. Reduces exposure in case of unauthorized access to the storage.',
  },
  transitLabel: {
    pt: 'Em trânsito (in transit)',
    en: 'In transit',
  },
  transitText1: {
    pt: ': toda comunicação entre componentes utiliza ',
    en: ': all communication between components uses ',
  },
  transitTls: {
    pt: 'TLS 1.2/1.3',
    en: 'TLS 1.2/1.3',
  },
  transitText2: {
    pt: ' (HTTPS). Integração com ',
    en: ' (HTTPS). Integration with ',
  },
  transitSf: {
    pt: 'Salesforce CRM (SaaS)',
    en: 'Salesforce CRM (SaaS)',
  },
  transitText3: {
    pt: ' por canal criptografado. Conexão privada via ',
    en: ' over an encrypted channel. Private connection via ',
  },
  transitDc: {
    pt: 'AWS Direct Connect',
    en: 'AWS Direct Connect',
  },
  transitText4: {
    pt: ' reforça isolamento do tráfego crítico.',
    en: ' reinforces the isolation of critical traffic.',
  },
  useLabel: {
    pt: 'Em uso (in use)',
    en: 'In use',
  },
  useText1: {
    pt: ': boas práticas de tratamento seguro de dados durante processamento (com gestão de chaves centralizada via ',
    en: ': best practices for secure data handling during processing (with centralized key management via ',
  },
  useKms: {
    pt: 'KMS',
    en: 'KMS',
  },
  useText2: {
    pt: ' e segmentação de acesso por IAM) — abordagem conceitual alinhada ao material didático.',
    en: ' and access segmentation by IAM) — conceptual approach aligned with the course material.',
  },
  lgpdLabel: {
    pt: 'Base para LGPD',
    en: 'Basis for LGPD',
  },
  lgpdText1: {
    pt: ': segurança de dados enquanto tratados, em alinhamento aos princípios de ',
    en: ': data security while processed, in alignment with the principles of ',
  },
  lgpdSecurity: {
    pt: 'segurança',
    en: 'security',
  },
  lgpdAnd: {
    pt: ' e ',
    en: ' and ',
  },
  lgpdAccountability: {
    pt: 'responsabilização',
    en: 'accountability',
  },
  lgpdText2: {
    pt: ' (Slide 24).',
    en: ' (Slide 24).',
  },
};

export const Slide22_Cripto: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={22} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
        <p>{L.introText[lang]}<strong>{L.introRest[lang]}</strong>{L.introComma[lang]}<strong>{L.introTransit[lang]}</strong>{L.introOr[lang]}<strong>{L.introUse[lang]}</strong>{L.introEnd[lang]}</p>
        <ul>
          <li><strong>{L.restLabel[lang]}</strong>{L.restText1[lang]}<strong>{L.restAurora[lang]}</strong>{L.restComma[lang]}<strong>{L.restS3[lang]}</strong>{L.restText2[lang]}<strong>{L.restKms[lang]}</strong>{L.restText3[lang]}</li>
          <li><strong>{L.transitLabel[lang]}</strong>{L.transitText1[lang]}<strong>{L.transitTls[lang]}</strong>{L.transitText2[lang]}<strong>{L.transitSf[lang]}</strong>{L.transitText3[lang]}<strong>{L.transitDc[lang]}</strong>{L.transitText4[lang]}</li>
          <li><strong>{L.useLabel[lang]}</strong>{L.useText1[lang]}<strong>{L.useKms[lang]}</strong>{L.useText2[lang]}</li>
          <li><strong>{L.lgpdLabel[lang]}</strong>{L.lgpdText1[lang]}<strong>{L.lgpdSecurity[lang]}</strong>{L.lgpdAnd[lang]}<strong>{L.lgpdAccountability[lang]}</strong>{L.lgpdText2[lang]}</li>
        </ul>
      </div>
    </SlideShell>
  );
};
