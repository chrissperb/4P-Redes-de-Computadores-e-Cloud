import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Componentes e Funcionalidades',
    en: 'Components and Functions',
  },
  item1: {
    pt: <><strong>AWS Direct Connect</strong>: conexão de rede dedicada entre ambiente on-premise e AWS. Não trafega pela Internet pública. Fortalece segurança (Req. 5) e atende Req. 4.</>,
    en: <><strong>AWS Direct Connect</strong>: dedicated network connection between the on-premise environment and AWS. Does not travel over the public Internet. Strengthens security (Req. 5) and meets Req. 4.</>,
  },
  item2: {
    pt: <><strong>AWS PrivateLink (Interface VPC Endpoint)</strong>: expõe serviços AWS de forma privada (sem trânsito pela Internet). Apoia princípio de <strong>menor privilégio</strong> e segmentação.</>,
    en: <><strong>AWS PrivateLink (Interface VPC Endpoint)</strong>: exposes AWS services privately (without traversing the Internet). Supports the principle of <strong>least privilege</strong> and segmentation.</>,
  },
  item3: {
    pt: <><strong>Rede privada e controlada</strong>: reduz exposição, facilita rastreabilidade e reforça defesa em camadas (conceitos de Segurança de Redes – Unid. II).</>,
    en: <><strong>Private, controlled network</strong>: reduces exposure, enables traceability and reinforces layered defense (network security concepts – Unit II).</>,
  },
  item4: {
    pt: <><strong>Justificativa técnica</strong>: materializa a interligação segura entre todos os sistemas citados (Req. 4), com base conceitual nos modelos de referência e TCP/IP (Unid. I–II).</>,
    en: <><strong>Technical justification</strong>: materializes the secure interconnection among all systems cited (Req. 4), with a conceptual basis in the reference models and TCP/IP (Unit I–II).</>,
  },
};

export const Slide14_Integracao: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={14} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
        <ul>
          <li>{L.item1[lang]}</li>
          <li>{L.item2[lang]}</li>
          <li>{L.item3[lang]}</li>
          <li>{L.item4[lang]}</li>
        </ul>
      </div>
    </SlideShell>
  );
};
