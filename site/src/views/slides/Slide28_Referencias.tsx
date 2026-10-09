import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Referências',
    en: 'References',
  },
  ref1: {
    pt: <>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade I</strong>. (Fundamentos, modelos de referência, DNS, IPv4/IPv6, topologias).</>,
    en: <>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade I</strong>. (Fundamentals, reference models, DNS, IPv4/IPv6, topologies).</>,
  },
  ref2: {
    pt: <>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade II</strong>. (Modelo TCP/IP, camadas, TCP vs UDP, Segurança de Redes, Autenticação).</>,
    en: <>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade II</strong>. (TCP/IP model, layers, TCP vs UDP, Network Security, Authentication).</>,
  },
  ref3: {
    pt: <>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade III</strong>. (Web/evolução, virtualização, modelos IaaS/PaaS/SaaS, componentes de segurança em Cloud).</>,
    en: <>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade III</strong>. (Web/evolution, virtualization, IaaS/PaaS/SaaS models, cloud security components).</>,
  },
  ref4: {
    pt: <>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade IV</strong>. (Cloud pública/privada/híbrida/multicloud, provedores, aspectos econômicos, diagramas).</>,
    en: <>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade IV</strong>. (Public/private/hybrid/multicloud, providers, economic aspects, diagrams).</>,
  },
  ref5: {
    pt: <>AWS. <em>Amazon Web Services Documentation</em>. Disponível em: <a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/</a> (referência técnica conceitual).</>,
    en: <>AWS. <em>Amazon Web Services Documentation</em>. Available at: <a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/</a> (conceptual technical reference).</>,
  },
  ref6: {
    pt: <>AWS Well-Architected Framework. Disponível em: <a href="https://docs.aws.amazon.com/wellarchitected/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/wellarchitected/</a>.</>,
    en: <>AWS Well-Architected Framework. Available at: <a href="https://docs.aws.amazon.com/wellarchitected/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/wellarchitected/</a>.</>,
  },
  ref7: {
    pt: <>BRASIL. <strong>Lei nº 13.709/2018</strong> – Lei Geral de Proteção de Dados Pessoais (LGPD).</>,
    en: <>BRASIL. <strong>Law nº 13.709/2018</strong> – General Data Protection Law (LGPD).</>,
  },
  note: {
    pt: <>Todas as decisões arquiteturais foram fundamentadas, prioritariamente, no <strong>material didático</strong> das quatro unidades.</>,
    en: <>All architectural decisions were grounded, primarily, in the <strong>course material</strong> of the four units.</>,
  },
};

export const Slide28_Referencias: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={28} total={totalSlides}>
      <div className="card">
        <h2>{L.heading[lang]}</h2>
        <ul>
          <li>{L.ref1[lang]}</li>
          <li>{L.ref2[lang]}</li>
          <li>{L.ref3[lang]}</li>
          <li>{L.ref4[lang]}</li>
          <li>{L.ref5[lang]}</li>
          <li>{L.ref6[lang]}</li>
          <li>{L.ref7[lang]}</li>
        </ul>
        <p style={{ color: 'var(--muted)', marginTop: 'clamp(6px,1vw,10px)' }}>
          {L.note[lang]}
        </p>
      </div>
    </SlideShell>
  );
};
