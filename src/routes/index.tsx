import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PanelNavigation } from '../components/PanelNavigation/PanelNavigation';

export const AppRouter = () => {
  return (
    <Router>
      <PanelNavigation />
    </Router>
  );
};
