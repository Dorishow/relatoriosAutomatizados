import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const scienceOptions: subjectOptions = {
  [performance.LOW]: ['science low 1', 'science low 2', 'science low 3'],
  [performance.MEDIUM]: [
    'science medium 1',
    'science medium 2',
    'science medium 3',
  ],
  [performance.HIGH]: ['science high 1', 'science high 2', 'science high 3'],
};
