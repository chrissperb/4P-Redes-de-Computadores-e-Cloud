import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DeckController } from '../controllers/DeckController';
import { slidesData } from '../data/slidesData';

export const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        {slidesData.map((s) => (
          <Route key={s.id} path={`/${s.id}`} element={<DeckController />} />
        ))}
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
    </HashRouter>
  );
};
