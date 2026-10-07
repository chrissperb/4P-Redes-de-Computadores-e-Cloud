import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide21_IAM: React.FC = () => {
  return (
    <SlideShell id={21} total={totalSlides} title={slidesData[20].title}>
      <div className="card">
        <h2>IAM, Políticas de Segurança e MFA (Req. 5)</h2>
        <ul>
          <li><strong>IAM (Identity and Access Management)</strong>: especifica <em>quem/o que</em> pode acessar recursos, com permissões refinadas e centralizadas (Unid. III, p. 23). Aplicação do <strong>princípio do menor privilégio</strong>.</li>
          <li><strong>Políticas de Segurança</strong>: conjunto de princípios/diretrizes que orientam a estratégia de segurança (Unid. III, p. 24). Traduzidas em políticas de acesso, configurações seguras e rastreabilidade.</li>
          <li><strong>MFA (Autenticação Multifator)</strong>: processo de login em etapas (além da senha). Reduz risco de acesso não autorizado em caso de comprometimento de credenciais (Unid. III, pp. 24–25). Aplicado no <strong>Amazon Cognito</strong> (canal do cliente).</li>
          <li><strong>Defesa em profundidade</strong>: autenticação/autorização em múltiplas camadas (conceito de Segurança de Redes – Unid. II, p. 40+).</li>
        </ul>
      </div>
    </SlideShell>
  );
};
