import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide28_Referencias: React.FC = () => {
  return (
    <SlideShell id={28} total={totalSlides} title={slidesData[27].title}>
      <div className="card">
        <h2>Referências</h2>
        <ul>
          <li>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade I</strong>. (Fundamentos, modelos de referência, DNS, IPv4/IPv6, topologias).</li>
          <li>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade II</strong>. (Modelo TCP/IP, camadas, TCP vs UDP, Segurança de Redes, Autenticação).</li>
          <li>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade III</strong>. (Web/evolução, virtualização, modelos IaaS/PaaS/SaaS, componentes de segurança em Cloud).</li>
          <li>PETCOV, Rodrigo. <strong>Redes de Computadores e Cloud – Unidade IV</strong>. (Cloud pública/privada/híbrida/multicloud, provedores, aspectos econômicos, diagramas).</li>
          <li>AWS. <em>Amazon Web Services Documentation</em>. Disponível em: <a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/</a> (referência técnica conceitual).</li>
          <li>AWS Well-Architected Framework. Disponível em: <a href="https://docs.aws.amazon.com/wellarchitected/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/wellarchitected/</a>.</li>
          <li>BRASIL. <strong>Lei nº 13.709/2018</strong> – Lei Geral de Proteção de Dados Pessoais (LGPD).</li>
        </ul>
        <p style={{ color: 'var(--muted)', marginTop: 'clamp(6px,1vw,10px)' }}>
          Todas as decisões arquiteturais foram fundamentadas, prioritariamente, no <strong>material didático</strong> das quatro unidades.
        </p>
      </div>
    </SlideShell>
  );
};
