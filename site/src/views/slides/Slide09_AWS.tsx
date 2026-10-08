import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { BrandLogo } from '../../components/Brands';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Justificativa da Escolha – AWS',
    en: 'Rationale for the Choice – AWS',
  },
  item1: {
    pt: <><strong>Liderança e abrangência</strong>: plataforma mais adotada e com ampla gama de serviços (conforme abordagem didática dos principais provedores – Unid. IV, pp. 5–7).</>,
    en: <><strong>Leadership and breadth</strong>: the most adopted platform, with a wide range of services (following the didactic approach to the major providers – Unit IV, pp. 5–7).</>,
  },
  item2: {
    pt: <><strong>Suporte à integração privada</strong>: <strong>AWS Direct Connect</strong> permite extensão dedicada e privada do ambiente on-premise à nuvem, sem depender exclusivamente de túnel sobre Internet pública.</>,
    en: <><strong>Support for private integration</strong>: <strong>AWS Direct Connect</strong> provides a dedicated and private extension of the on-premise environment to the cloud, without relying exclusively on a tunnel over the public Internet.</>,
  },
  item3: {
    pt: <><strong>Segurança por camadas</strong>: oferta conceitual alinhada aos componentes de segurança em cloud (responsabilidade compartilhada, IAM, criptografia, auditoria, monitoração – Unid. III, pp. 22–27).</>,
    en: <><strong>Layered security</strong>: a conceptual offering aligned with cloud security components (shared responsibility, IAM, encryption, auditing, monitoring – Unit III, pp. 22–27).</>,
  },
  item4: {
    pt: <><strong>Maturidade e aderência à solução</strong>: facilita a narrativa de <strong>justificativa</strong> (Critério 2), conectando decisão técnica às restrições do cliente.</>,
    en: <><strong>Maturity and fit to the solution</strong>: facilitates the <strong>justification</strong> narrative (Criterion 2), connecting the technical decision to the client's constraints.</>,
  },
  item5: {
    pt: <><strong>Viabilidade didática</strong>: escolha descritiva (não há implantação). Foco na <strong>aderência conceitual</strong> ao material da disciplina.</>,
    en: <><strong>Didactic viability</strong>: a descriptive choice (no deployment involved). Focus on <strong>conceptual alignment</strong> with the course material.</>,
  },
};

export const Slide09_AWS: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={9} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
            <h2>{L.heading[lang]}</h2>
            <BrandLogo name="aws" height={40} />
          </div>
          <ul>
            <li>{L.item1[lang]}</li>
            <li>{L.item2[lang]}</li>
            <li>{L.item3[lang]}</li>
            <li>{L.item4[lang]}</li>
            <li>{L.item5[lang]}</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  );
};
