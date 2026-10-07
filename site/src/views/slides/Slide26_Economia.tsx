import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide26_Economia: React.FC = () => {
  return (
    <SlideShell id={26} total={totalSlides} title={slidesData[25].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>Aspectos Econômicos – Modelos de Contratação (Unid. IV, p. 36)</h2>
          <ul>
            <li><strong>PayGo (Pay as you Go – sob demanda)</strong>: faturamento por consumo real. Flexível para variações de volume na abertura de contas.</li>
            <li><strong>Reservado (1 ou 3 anos)</strong>: compromisso de médio/longo prazo, com potencial de economia frente a PayGo para carga previsível.</li>
            <li><strong>Créditos (Compra pré-paga/subscrição)</strong>: compra de créditos (12, 24 ou 36 meses), modalidade baseada em consumo com planejamento orçamentário.</li>
          </ul>
        </div>
        <div className="card">
          <h2>Observação Importante</h2>
          <p>
            A presente proposta é <strong>arquitetural e conceitual</strong> (descritiva). <strong>Não há implantação real dos serviços AWS</strong>. Portanto, <strong>não existe custo de execução associado a este trabalho acadêmico</strong>. A solução será publicada exclusivamente via <strong>GitHub Pages</strong> (SPA estática), sem consumo de recursos de nuvem computacional.
          </p>
          <p style={{ color: 'var(--muted)', marginTop: 'clamp(6px,1vw,10px)' }}>
            Essa distinção reforça a coerência entre o escopo proposto, os entregáveis e a justificativa da solução (Critério 2).
          </p>
        </div>
      </div>
    </SlideShell>
  );
};
