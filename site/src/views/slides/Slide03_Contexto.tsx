import React from 'react';
import { SlideShell } from '../common/SlideShell';
import { slidesData, totalSlides } from '../../data/slidesData';

export const Slide03_Contexto: React.FC = () => {
  return (
    <SlideShell id={3} total={totalSlides} title={slidesData[2].title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,20px)' }}>
        <div className="card">
          <h2>Negócio</h2>
          <p>A empresa de serviços financeiros "Seu dinheiro, meu dinheiro S/A" (SDMD S/A) é um pequeno banco em processo de transformação digital.</p>
        </div>
        <div className="card">
          <h2>Objetivo</h2>
          <p>Tornar-se um banco 100% digital, iniciando pela facilitação do processo de <strong>abertura de contas</strong> para seus clientes.</p>
        </div>
        <div className="card">
          <h2>Problema</h2>
          <p>Necessidade de modernizar o processo de abertura de contas, mantendo a <strong>segurança</strong>, a <strong>interoperabilidade</strong> com sistemas existentes e respeitando restrições operacionais definidas pelo cliente.</p>
        </div>
      </div>
    </SlideShell>
  );
};
