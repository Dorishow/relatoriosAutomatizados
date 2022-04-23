import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const langOptions: subjectOptions = {
  [performance.LOW]: ['lang low 1', 'lang low 2', 'lang low 3'],
  [performance.MEDIUM]: ['lang medium 1', 'lang medium 2', 'lang medium 3'],
  [performance.HIGH]: ['lang high 1', 'lang high 2', 'lang high 3'],
};
