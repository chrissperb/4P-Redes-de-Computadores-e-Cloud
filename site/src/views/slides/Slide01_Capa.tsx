import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { totalSlides } from '../../data/slidesData';
import { BrandRow } from '../../components/Brands';
import { useI18n } from '../../i18n/context';

const L = {
  tag: {
    pt: 'SDMD S/A – "Seu dinheiro, meu dinheiro S/A"',
    en: 'SDMD S/A – "Your money, my money Inc."',
  },
  subtitle: {
    pt: 'Empresas Soluções em TI',
    en: 'IT Solutions Company',
  },
  title: {
    pt: 'Proposta de Arquitetura para Abertura de Contas 100% Digital',
    en: 'Architecture Proposal for 100% Digital Account Opening',
  },
  teacher: {
    pt: 'Professores: Rodrigo Petcov e Leonardo Orabona',
    en: 'Teachers: Rodrigo Petcov and Leonardo Orabona',
  },
  student: {
    pt: 'Estudante: Christian Sperb',
    en: 'Student: Christian Sperb',
  }
};

export const Slide01_Capa: React.FC = () => {
  const { lang } = useI18n();
  return (
    <SlideShell id={1} total={totalSlides}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '1.2vw' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(18px, 3vw, 42px)', fontWeight: 600 }}>
          {L.tag[lang]}
        </h2>
        <p style={{ margin: 0, color: 'var(--muted)', fontSize: 'clamp(14px, 2vw, 26px)' }}>
          {L.subtitle[lang]}
        </p>
        <p style={{ margin: 0, fontSize: 'clamp(13px, 1.8vw, 22px)' }}>
          {L.title[lang]}
        </p>
        <div style={{ marginTop: '1.6vw' }}>
          <BrandRow height={44} />
        </div>
        <div style={{ marginTop: '1.6vw', display: 'flex', flexDirection: 'column', gap: '0.8vw' }}>
          <p style={{ margin: 0, fontSize: 'clamp(12px, 1.6vw, 18px)' }}>
            {L.teacher[lang]}
          </p>
          <p style={{ margin: 0, fontSize: 'clamp(12px, 1.6vw, 18px)' }}>
            {L.student[lang]}
          </p>
        </div>
      </div>
    </SlideShell>
  );
};