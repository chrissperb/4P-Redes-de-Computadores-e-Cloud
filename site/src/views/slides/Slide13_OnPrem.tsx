import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide13_OnPrem: React.FC = () => {
  return (
    <SlideShell id={13} total={totalSlides} title={slidesData[12].title}>
      <div className="card">
        <h2>Componentes e Funcionalidades</h2>
        <ul>
          <li><strong>SAP ERP (on-premise)</strong>: sistema transacional da empresa. Mantido <strong>in loco</strong> por questões de segurança (Req. 1). Não exposto diretamente à Internet.</li>
          <li><strong>Agências Físicas</strong>: pontos de atendimento. Interação com processos internos conforme modelo atual.</li>
          <li><strong>Fronteira controlada</strong>: comunicação com nuvem pública ocorre <strong>exclusivamente</strong> via <strong>AWS Direct Connect</strong> (link dedicado privado), reduzindo superfície de ataque.</li>
          <li><strong>Alinhamento conceitual</strong>: arquitetura híbrida (Unid. IV) respeitando restrições explícitas do cliente.</li>
        </ul>
      </div>
    </SlideShell>
  );
};
