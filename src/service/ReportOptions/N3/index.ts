import { subject } from '../../../enumerator/subject';
import { ratingOption } from '../../../model/rating/ratingOption';
import { coordinationOptions } from './optionTexts/coordination';
import { langOptions } from './optionTexts/lang';
import { mathOptions } from './optionTexts/math';
import { scienceOptions } from './optionTexts/science';
import { temperOptions } from './optionTexts/temper';

export const ratingTextsN3: ratingOption[] = [
  {
    subject: subject.TEMPERAMENTO,
    lowButtonText: 'Hiperativo',
    mediumButtonText: 'Tranquilo',
    highButtonText: 'Afetuoso',
    subjectOptions: temperOptions,
  },

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
