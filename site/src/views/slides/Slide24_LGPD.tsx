import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide24_LGPD: React.FC = () => {
  return (
    <SlideShell id={24} total={totalSlides} title={slidesData[23].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>LGPD – Princípios Aplicados à Solução (Req. 5)</h2>
          <p>Foco exclusivo em <strong>LGPD</strong>, conforme solicitado. Mapeamento <strong>arquitetural</strong> dos princípios aos controles propostos.</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Princípio LGPD</th>
              <th>Aplicação na Arquitetura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Finalidade e necessidade</strong></td>
              <td>Coleta/tratamento restritos ao <strong>processo de abertura de contas digital</strong>. Busca-se <strong>minimização</strong> de dados.</td>
            </tr>
            <tr>
              <td><strong>Segurança</strong></td>
              <td>Criptografia <strong>em repouso</strong> (Aurora/S3/KMS), <strong>em trânsito</strong> (TLS 1.2/1.3, Direct Connect privado), boas práticas <strong>em uso</strong>. Defesa em profundidade.</td>
            </tr>
            <tr>
              <td><strong>Transparência</strong></td>
              <td>Trilhas auditáveis (conceitual CloudTrail/Config/CloudWatch), rastreabilidade ponta-a-ponta (eventos + logs) — <strong>contribui</strong> para transparência.</td>
            </tr>
            <tr>
              <td><strong>Responsabilização</strong></td>
              <td><strong>Responsabilidade compartilhada</strong> (AWS × Cliente) claramente delimitada (Slide 20), com papéis definidos.</td>
            </tr>
            <tr>
              <td><strong>Acesso e exatidão</strong></td>
              <td><strong>IAM + MFA + políticas</strong> com menor privilégio (Slide 21). Acesso restrito por necessidade funcional.</td>
            </tr>
            <tr>
              <td><strong>Limitação de tratamento e eliminação</strong></td>
              <td><strong>S3 Lifecycle</strong> (conceitual) e políticas de retenção/expurgo, alinhadas ao ciclo de vida dos documentos/artefatos.</td>
            </tr>
          </tbody>
        </table>
        <p style={{ color: 'var(--muted)', fontSize: 'clamp(11px,1.4vw,16px)' }}>
          Abordagem <strong>pragmática e conceitual</strong>: visa aplicar princípios arquiteturalmente, contribuindo para atender ao <strong>Req. 5</strong> e ao <strong>Critério 3</strong> (aderência às necessidades do cliente).
        </p>
      </div>
    </SlideShell>
  );
};
