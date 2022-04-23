import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const temperOptions: subjectOptions = {
  [performance.LOW]: [
    'temper  **student** low 1',
    'temper  **student** low 2',
    'temper  **student** low 3',
  ],
  [performance.MEDIUM]: [
    'temper  **student** medium 1',
    'temper  **student** medium 2',
    'temper  **student** medium 3',
  ],
  [performance.HIGH]: [
    'temper  **student** high 1',
    'temper  **student** high 2',
    'temper  **student** high 3',
  ],
};
