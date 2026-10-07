import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide09_AWS: React.FC = () => {
  return (
    <SlideShell id={9} total={totalSlides} title={slidesData[8].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>Justificativa da Escolha – AWS</h2>
          <ul>
            <li><strong>Liderança e abrangência</strong>: plataforma mais adotada e com ampla gama de serviços (conforme abordagem didática dos principais provedores – Unid. IV, pp. 5–7).</li>
            <li><strong>Suporte à integração privada</strong>: <strong>AWS Direct Connect</strong> permite extensão dedicada e privada do ambiente on-premise à nuvem, sem depender exclusivamente de túnel sobre Internet pública.</li>
            <li><strong>Segurança por camadas</strong>: oferta conceitual alinhada aos componentes de segurança em cloud (responsabilidade compartilhada, IAM, criptografia, auditoria, monitoração – Unid. III, pp. 22–27).</li>
            <li><strong>Maturidade e aderência à solução</strong>: facilita a narrativa de <strong>justificativa</strong> (Critério 2), conectando decisão técnica às restrições do cliente.</li>
            <li><strong>Viabilidade didática</strong>: escolha descritiva (não há implantação). Foco na <strong>aderência conceitual</strong> ao material da disciplina.</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
