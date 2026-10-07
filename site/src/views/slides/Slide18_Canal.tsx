import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide18_Canal: React.FC = () => {
  return (
    <SlideShell id={18} total={totalSlides} title={slidesData[17].title}>
      <div className="card">
        <h2>Componentes e Funcionalidades</h2>
        <ul>
          <li><strong>Amazon Route 53</strong>: DNS gerenciado — resolução de nomes (conceitos DNS – Unid. I).</li>
          <li><strong>Amazon CloudFront</strong>: CDN para entrega otimizada, reduz latência e contribui p/ segurança/controle de borda.</li>
          <li><strong>AWS WAF</strong>: Web Application Firewall — proteção contra vetores comuns, filtragem de tráfego malicioso (camada de aplicação/perímetro controlado).</li>
          <li><strong>Amazon Cognito + MFA</strong>: gestão de identidades/autenticação de clientes. <strong>MFA</strong> reforça autenticação multifator (conceito de autenticação – Unid. II, p. 54+; componentes de segurança – Unid. III, p. 24). Aplica princípio de verificação por múltiplos fatores.</li>
          <li><strong>Entrada pública controlada</strong>: única via borda (com WAF + autenticação), enquanto integrações críticas permanecem via <strong>link privado</strong> (Direct Connect).</li>
        </ul>
      </div>
    </SlideShell>
  );
};
