import { subject } from '../../../enumerator/subject';
import { ratingOption } from '../../../model/rating/ratingOption';
import { coordinationOptions } from './coordination';
import { langOptions } from './lang';
import { mathOptions } from './math';
import { scienceOptions } from './science';

export const ratingTextsN3: ratingOption[] = [
  {
    subject: subject.MATEMATICA,
    lowButtonText: 'Com dificuldade',
    mediumButtonText: 'Sem dificuldade',
    highButtonText: 'Com facilidade',
    subjectOptions: mathOptions,
  },

  {
    subject: subject.LINGUAGEM,
    lowButtonText: 'Com dificuldade',
    mediumButtonText: 'Sem dificuldade',
    highButtonText: 'Com facilidade',
    subjectOptions: langOptions,
  },

  {
    subject: subject.COORDENACAO,
    lowButtonText: 'Com dificuldade',
    mediumButtonText: 'Sem dificuldade',
    highButtonText: 'Com facilidade',
    subjectOptions: coordinationOptions,
  },

  {
    subject: subject.NATUREZA,
    lowButtonText: 'Com dificuldade',
    mediumButtonText: 'Sem dificuldade',
    highButtonText: 'Com facilidade',
    subjectOptions: scienceOptions,
  },
];
