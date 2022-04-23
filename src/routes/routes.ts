import { route } from '../model/route/route';

export const notFoundRoute = {
  id: '404',
  path: '/not-found',
  name: 'Página não encontrada',
};

export const routes: route[] = [
  { id: 'HOME', path: '/', name: 'Página inicial' },
  {
    id: 'REPORT',
    path: '/report',
    name: 'Relatórios',
    subPaths: [
      {
        id: 'GENERATE',
        name: 'Gerar relatórios',
        path: '/generate',
      },
    ],
  },
  notFoundRoute,
];
