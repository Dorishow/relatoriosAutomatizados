import { performance } from '../../../enumerator/performance';
import { subjectOptions } from '../../../model/rating/ratingOption';

const getRandomArrayElement = (rateArray: string[]) => {
  return rateArray[Math.floor(Math.random() * rateArray.length)];
};

export const getRandomByRate = (subject: subjectOptions, rate: performance) => {
  const randomElement = getRandomArrayElement(subject[rate]);
  return randomElement;
};
