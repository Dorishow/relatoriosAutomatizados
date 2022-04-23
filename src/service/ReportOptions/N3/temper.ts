import { performance } from '../../../enumerator/performance';
import { subjectOptions } from '../../../model/rating/ratingOption';

export const temperOptions: subjectOptions = {
  [performance.LOW]: ['temper low 1', 'temper low 2', 'temper low 3'],
  [performance.MEDIUM]: [
    'temper medium 1',
    'temper medium 2',
    'temper medium 3',
  ],
  [performance.HIGH]: ['temper high 1', 'temper high 2', 'temper high 3'],
};
