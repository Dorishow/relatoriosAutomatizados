import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GenerateReport } from '../../app/pages/GenerateReport/GenerateReport';
import { composePath, getPathById } from '../../routes/utils';

export const PanelNavigation = () => {
  return (
    <Routes>
      <Route path={getPathById('HOME')} element={<p>Funciona</p>} />
      <Route
        path={composePath('REPORT', 'GENERATE')}
        element={<GenerateReport />}
      />

      <Route path={'*'} element={<p>Página não encontrada</p>} />
    </Routes>
  );
};
