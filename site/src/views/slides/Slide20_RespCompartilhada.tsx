import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide20_RespCompartilhada: React.FC = () => {
  return (
    <SlideShell id={20} total={totalSlides} title={slidesData[19].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>Modelo de Responsabilidade Compartilhada (Req. 5)</h2>
          <p>Conceito central em Segurança em Cloud: <em>"o provedor opera, gerencia e controla os componentes do sistema operacional do host e da camada de virtualização até a segurança física; o cliente é responsável pelo que coloca na nuvem"</em> (Unid. III, pp. 22–23).</p>
        </div>
        <div className="grid-two">
          <div className="card">
            <h2>Responsabilidade AWS (conceitual)</h2>
            <ul>
              <li>Segurança <strong>da</strong> nuvem (infra física, rede, virtualização).</li>
              <li>Proteções de infraestrutura e serviços gerenciados.</li>
            </ul>
          </div>
          <div className="card">
            <h2>Responsabilidade do Cliente (SDMD S/A)</h2>
            <ul>
              <li>Segurança <strong>na</strong> nuvem (dados, IAM, chaves, configurações).</li>
              <li>Controle de acesso, criptografia, logs, conformidade com LGPD.</li>
              <li>Segurança das integrações e do uso dos serviços.</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
