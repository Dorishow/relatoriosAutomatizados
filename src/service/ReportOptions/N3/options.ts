import { subject } from '../../../enumerator/subject';
import { ratingOption } from '../../../model/rating/ratingOption';
import { coordinationOptions } from './coordination';
import { langOptions } from './lang';
import { mathOptions } from './math';
import { scienceOptions } from './science';

export const ratingTextsN3: ratingOption[] = [
  {
    subject: subject.MATEMATICA,
    subjectOptions: mathOptions,
  },

  {
    subject: subject.LINGUAGEM,
    subjectOptions: langOptions,
  },

  {
    subject: subject.COORDENACAO,
    subjectOptions: coordinationOptions,
  },

  {
    subject: subject.NATUREZA,
    subjectOptions: scienceOptions,
  },
];
