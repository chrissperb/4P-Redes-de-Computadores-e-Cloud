import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';
import { BrandRow } from '../../components/Brands';

export const Slide01_Capa: React.FC = () => {
  return (
    <SlideShell id={1} total={totalSlides} title={slidesData[0].title}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '1.2vw' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(18px, 3vw, 42px)', fontWeight: 600 }}>
          SDMD S/A – "Seu dinheiro, meu dinheiro S/A"
        </h2>
        <p style={{ margin: 0, color: 'var(--muted)', fontSize: 'clamp(14px, 2vw, 26px)' }}>
          Empresas Soluções em TI
        </p>
        <p style={{ margin: 0, fontSize: 'clamp(13px, 1.8vw, 22px)' }}>
          Proposta de Arquitetura para Abertura de Contas 100% Digital
        </p>
        <div style={{ marginTop: '1.6vw' }}>
          <BrandRow height={44} />
        </div>
        <div style={{ marginTop: '1.6vw', display: 'flex', flexDirection: 'column', gap: '0.8vw' }}>
          <p style={{ margin: 0, fontSize: 'clamp(12px, 1.6vw, 18px)' }}>
            Disciplina: Fundamentos de Redes de Computadores e Cloud Computing
          </p>
          <p style={{ margin: 0, fontSize: 'clamp(12px, 1.6vw, 18px)' }}>
            Professor: Rodrigo Petcov
          </p>
          <p style={{ margin: 0, fontSize: 'clamp(12px, 1.6vw, 18px)' }}>
            Curso Livre [iTalents]
          </p>
        </div>
      </div>
    </SlideShell>
  );
};
