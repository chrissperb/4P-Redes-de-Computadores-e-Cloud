import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  heading: {
    pt: 'Aspectos Econômicos – Modelos de Contratação (Unidade IV, p. 36)',
    en: 'Economic Aspects – Contracting Models (Unit IV, p. 36)',
  },
  liPaygo: {
    pt: <><strong>PayGo (Pay as you Go – sob demanda)</strong>: faturamento por consumo real. Flexível para variações de volume na abertura de contas.</>,
    en: <><strong>PayGo (Pay as you Go – on demand)</strong>: billing based on actual consumption. Flexible for volume variations in account opening.</>,
  },
  liReserved: {
    pt: <><strong>Reservado (1 ou 3 anos)</strong>: compromisso de médio/longo prazo, com potencial de economia frente a PayGo para carga previsível.</>,
    en: <><strong>Reserved (1 or 3 years)</strong>: mid/long-term commitment, with savings potential over PayGo for predictable workloads.</>,
  },
  liCredits: {
    pt: <><strong>Créditos (Compra pré-paga/subscrição)</strong>: compra de créditos (12, 24 ou 36 meses), modalidade baseada em consumo com planejamento orçamentário.</>,
    en: <><strong>Credits (Prepaid purchase/subscription)</strong>: credit purchase (12, 24 or 36 months), a consumption-based mode with budget planning.</>,
  },
  headingNote: {
    pt: 'Observação Importante',
    en: 'Important Note',
  },
  noteMain: {
    pt: <>A presente proposta é <strong>arquitetural e conceitual</strong> (descritiva). <strong>Não há implantação real dos serviços AWS</strong>. Portanto, <strong>não existe custo de execução associado a este trabalho puramente acadêmico</strong>. A solução será publicada exclusivamente via <strong>GitHub Pages</strong> (SPA estática), sem consumo de recursos de nuvem computacional.</>,
    en: <>The present proposal is <strong>architectural and conceptual</strong> (descriptive). <strong>There is no real deployment of AWS services</strong>. Therefore, <strong>there is no execution cost associated with this academic work</strong>. The solution will be published exclusively via <strong>GitHub Pages</strong> (static SPA), with no consumption of cloud computing resources.</>,
  },
};

export const Slide26_Economia: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={26} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>{L.heading[lang]}</h2>
          <ul>
            <li>{L.liPaygo[lang]}</li>
            <li>{L.liReserved[lang]}</li>
            <li>{L.liCredits[lang]}</li>
          </ul>
        </div>
        <div className="card">
          <h2>{L.headingNote[lang]}</h2>
          <p>
            {L.noteMain[lang]}
          </p>
        </div>
      </div>
    </SlideShell>
  );
};
