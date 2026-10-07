import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide22_Cripto: React.FC = () => {
  return (
    <SlideShell id={22} total={totalSlides} title={slidesData[21].title}>
      <div className="card">
        <h2>Criptografia – Repouso, Trânsito e Uso (Req. 5)</h2>
        <p>Conforme Unid. III, p. 25: criptografia protege informações <strong>em repouso</strong>, <strong>em trânsito</strong> ou <strong>em uso</strong>.</p>
        <ul>
          <li><strong>Em repouso (at rest)</strong>: dados armazenados em <strong>Amazon Aurora</strong>, <strong>Amazon S3</strong>, com criptografia gerenciada via <strong>AWS KMS</strong>. Reduz exposição caso ocorra acesso não autorizado ao armazenamento.</li>
          <li><strong>Em trânsito (in transit)</strong>: toda comunicação entre componentes utiliza <strong>TLS 1.2/1.3</strong> (HTTPS). Integração com <strong>Salesforce CRM (SaaS)</strong> por canal criptografado. Conexão privada via <strong>AWS Direct Connect</strong> reforça isolamento do tráfego crítico.</li>
          <li><strong>Em uso (in use)</strong>: boas práticas de tratamento seguro de dados durante processamento (com gestão de chaves centralizada via <strong>KMS</strong> e segmentação de acesso por IAM) — abordagem conceitual alinhada ao material didático.</li>
          <li><strong>Base para LGPD</strong>: segurança de dados enquanto tratados, em alinhamento aos princípios de <strong>segurança</strong> e <strong>responsabilização</strong> (Slide 24).</li>
        </ul>
      </div>
    </SlideShell>
  );
};
