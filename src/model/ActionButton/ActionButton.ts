import { performance } from '../../enumerator/performance';

export type ActionButton = {
  performance: performance;
  text: string;
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
};
