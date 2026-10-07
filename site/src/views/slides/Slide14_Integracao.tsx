import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide14_Integracao: React.FC = () => {
  return (
    <SlideShell id={14} total={totalSlides} title={slidesData[13].title}>
      <div className="card">
        <h2>Componentes e Funcionalidades</h2>
        <ul>
          <li><strong>AWS Direct Connect</strong>: conexão de rede dedicada entre ambiente on-premise e AWS. Não trafega pela Internet pública. Fortalece segurança (Req. 5) e atende Req. 4.</li>
          <li><strong>AWS PrivateLink (Interface VPC Endpoint)</strong>: expõe serviços AWS de forma privada (sem trânsito pela Internet). Apoia princípio de <strong>menor privilégio</strong> e segmentação.</li>
          <li><strong>Rede privada e controlada</strong>: reduz exposição, facilita rastreabilidade e reforça defesa em camadas (conceitos de Segurança de Redes – Unid. II).</li>
          <li><strong>Justificativa técnica</strong>: materializa a interligação segura entre todos os sistemas citados (Req. 4), com base conceitual nos modelos de referência e TCP/IP (Unid. I–II).</li>
        </ul>
      </div>
    </SlideShell>
  );
};
