import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { useI18n } from '../../i18n/context';

const L = {
  businessTitle: { pt: 'Negócio', en: 'Business' },
  businessBody: {
    pt: 'A empresa de serviços financeiros "Seu dinheiro, meu dinheiro S/A" (SDMD S/A) é um pequeno banco em processo de transformação digital.',
    en: 'The financial services company "Your money, my money Inc." (SDMD S/A) is a small bank undergoing digital transformation.',
  },
  objectiveTitle: { pt: 'Objetivo', en: 'Objective' },
  objectiveA: {
    pt: 'Tornar-se um banco 100% digital, iniciando pela facilitação do processo de ',
    en: 'Becoming a 100% digital bank, starting by facilitating the process of ',
  },
  accountOpening: { pt: 'abertura de contas', en: 'account opening' },
  objectiveB: { pt: ' para seus clientes.', en: ' for its customers.' },
  problemTitle: { pt: 'Problema', en: 'Problem' },
  problemA: {
    pt: 'Necessidade de modernizar o processo de abertura de contas, mantendo a ',
    en: 'Need to modernize the account opening process while maintaining ',
  },
  security: { pt: 'segurança', en: 'security' },
  problemMid: { pt: ', a ', en: ', ' },
  interoperability: { pt: 'interoperabilidade', en: 'interoperability' },
  problemC: {
    pt: ' com sistemas existentes e respeitando restrições operacionais definidas pelo cliente.',
    en: ' with existing systems and respecting the operational restrictions defined by the client.',
  },
};

export const Slide03_Contexto: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={3} total={totalSlides}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>{L.businessTitle[lang]}</h2>
          <p>{L.businessBody[lang]}</p>
        </div>
        <div className="card">
          <h2>{L.objectiveTitle[lang]}</h2>
          <p>{L.objectiveA[lang]}<strong>{L.accountOpening[lang]}</strong>{L.objectiveB[lang]}</p>
        </div>
        <div className="card">
          <h2>{L.problemTitle[lang]}</h2>
          <p>{L.problemA[lang]}<strong>{L.security[lang]}</strong>{L.problemMid[lang]}<strong>{L.interoperability[lang]}</strong>{L.problemC[lang]}</p>
        </div>
      </div>
    </SlideShell>
  );
};
