import { route } from '../model/route/route';
import { routes, notFoundRoute } from './routes';

export const getParentRouteById = (id: string): route => {
  return routes.filter((route) => route.id === id)[0];
};

export const getSubRouteById = (parent: route, subPathId: string): route => {
  if (!parent.subPaths) return notFoundRoute;
  return parent.subPaths.filter((subroute) => subroute.id === subPathId)[0];
};

export const getPathById = (id: string) => getParentRouteById(id).path;

export const composePath = (parentId: string, subPathId: string): string => {
  const parentRoute = getParentRouteById(parentId);
  const subPath = getSubRouteById(parentRoute, subPathId);
  return parentRoute.path.concat(subPath.path);
};
