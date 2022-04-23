import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { AppRouter } from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './style/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
