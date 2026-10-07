import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide07_Rastreabilidade: React.FC = () => {
  return (
    <SlideShell id={7} total={totalSlides} title={slidesData[6].title}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Requisito (Cliente)</th>
              <th>Decisão Arquitetural</th>
              <th>Justificativa</th>
              <th>Fundamentação (Material Didático)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. SAP ERP on-premise (manter)</td>
              <td>Arquitetura <strong>híbrida</strong> (on-prem ↔ nuvem pública)</td>
              <td>Respeita restrição de segurança sem abrir o ERP à Internet.</td>
              <td>Cloud híbrida (Unid. IV). Modelo de implementação e separação de domínios.</td>
            </tr>
            <tr>
              <td>2. Salesforce CRM (SaaS)</td>
              <td>Integração <strong>server-side</strong> via HTTPS (saídas controladas)</td>
              <td>Evita exposição de credenciais no front; mantém comunicação segura entre sistemas (Req. 4).</td>
              <td>Arquiteturas, comunicação entre sistemas (Unid. I–III). Camada de Aplicação (Unid. II).</td>
            </tr>
            <tr>
              <td>3. Solução em <strong>nuvem pública</strong></td>
              <td><strong>AWS</strong> (sa-east-1)</td>
              <td>Ecossistema maduro, compatível com integração privada (Direct Connect), narrativa sólida p/ justificativa.</td>
              <td>Principais provedores e modelos (Unid. IV, pp. 5–7).</td>
            </tr>
            <tr>
              <td>4. Interligação entre todos os sistemas</td>
              <td><strong>AWS Direct Connect</strong> (privado) + HTTPS controlado p/ SaaS</td>
              <td>Tráfego crítico SAP↔núvem em <strong>link dedicado privado</strong>; integrações SaaS por egress controlado.</td>
              <td>Conceitos de rede, TCP/IP, segurança por camadas (Unid. II). Cloud pública/híbrida (Unid. IV).</td>
            </tr>
            <tr>
              <td>5. Segurança aplicável</td>
              <td>Resp. compartilhada, IAM/MFA, criptografia (repouso/trânsito/uso), auditoria/monitoração (LGPD por princípios)</td>
              <td>Abordagem <strong>por camadas</strong> (defesa em profundidade), ancorada em conceitos didáticos (não só de mercado).</td>
              <td>Componentes de Segurança em Cloud (Unid. III, pp. 22–27); Segurança de Redes (Unid. II, p. 40+); Autenticação (Unid. II, p. 54+).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SlideShell>
  );
};
