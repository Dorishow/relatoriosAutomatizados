import { ActionButton } from '../../model/ActionButton/ActionButton';
import { performance } from '../../enumerator/performance';
import { ratingOption } from '../rating/ratingOption';

export const getActionButtons = (rating: ratingOption): ActionButton[] => {
  return [
    {
      performance: performance.LOW,
      text: rating.lowButtonText,
      color: 'error',
    },
    {
      performance: performance.MEDIUM,
      text: rating.mediumButtonText,
      color: 'warning',
    },
    {
      performance: performance.HIGH,
      text: rating.highButtonText,
      color: 'success',
    },
  ];
};
