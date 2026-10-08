import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';
import { CloudHybridIcon } from '../../components/icons/Illustrations';

export const Slide08_Hibrida: React.FC = () => {
  return (
    <SlideShell id={8} total={totalSlides} title={slidesData[7].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: 'clamp(12px,2vw,24px)' }}>
          <div style={{ flex: '0 0 auto' }}>
            <CloudHybridIcon width="clamp(140px, 22vw, 300px)" height="auto" />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'clamp(6px,1vw,10px)' }}>
            <h2>Por que Cloud Híbrida?</h2>
            <p>O cliente <strong>exige</strong> que o SAP ERP permaneça <strong>on-premise</strong> (por questões de segurança), ao mesmo tempo que requer a solução de abertura digital em <strong>nuvem pública</strong>. Essa combinação caracteriza, conceitualmente, uma <strong>arquitetura híbrida</strong> (Unid. IV).</p>
          </div>
        </div>
        <div className="card">
          <h2>Vantagens</h2>
          <ul>
            <li><strong>Segurança/controle</strong>: dados/serviços sensíveis permanecem no ambiente on-premise.</li>
            <li><strong>Escalabilidade</strong>: jornada de onboarding na nuvem pública (escala sob demanda).</li>
            <li><strong>Interoperabilidade</strong>: integra sistemas sem expor o ERP diretamente à Internet.</li>
            <li><strong>Aderência ao problema</strong>: atende exatamente às restrições do cliente (Critério 3).</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
