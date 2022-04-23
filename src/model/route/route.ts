export interface route {
  id: string;
  path: string;
  name: string;
  subPaths?: route[];
}
