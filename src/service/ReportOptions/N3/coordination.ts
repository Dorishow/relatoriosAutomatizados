import { performance } from '../../../enumerator/performance';
import { subjectOptions } from '../../../model/rating/ratingOption';

export const coordinationOptions: subjectOptions = {
  [performance.LOW]: ['coord low 1', 'coord low 2', 'coord low 3'],
  [performance.MEDIUM]: ['coord medium 1', 'coord medium 2', 'coord medium 3'],
  [performance.HIGH]: ['coord high 1', 'coord high 2', 'coord high 3'],
};
