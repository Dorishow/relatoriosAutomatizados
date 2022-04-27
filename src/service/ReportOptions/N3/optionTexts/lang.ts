import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const langOptions: subjectOptions = {
  [performance.LOW]: [
    'Quanto ao seu nível de linguagem, apesar de apresentar certas dificuldades, têm alcançado avanços consideráveis e aprendido bastante.',
    'Com relação ao desenvolvimento de sua oralidade e linguagem escrita, ainda apresenta certas dificuldades, mas seus avanços são significativos.',
    'Em relação à sua oralidade e linguagem escrita, ainda apresenta dificuldade com algumas consoantes, mas de todo modo têm alcançado bons avanços.',
  ],
  [performance.MEDIUM]: [
    'Quanto ao seu nível de linguagem, tem conseguido avançar e performar sem grandes dificuldades, concatenando vogais e consoantes para formar famílias silábicas.',
    'Com relação ao desenvolvimento de sua oralidade e linguagem escrita, seu desempenho tem sido proveitoso e os assuntos apresentados em sala tem sido bem aproveitados.',
    'Em relação à sua oralidade e linguagem escrita, tem se desenvolvido sem dificuldades, realizando encontros vocálicos e construído sílabas de acordo com o ensinado.',
  ],
  [performance.HIGH]: [
    'Quanto ao desenvolvimento de sua linguagem escrita e oralidade, seu desempenho é exemplar, construíndo encontros vocálicos, famílias silábicas e a escrita do nome em letra cursiva, além de tirar a lição do quadro sem dificuldade.',
    'Com relação ao desenvolvimento de sua oralidade e linguagem escrita tem desempenhado com facilidade, construíndo encontros vocálicos, escrevendo o próprio nome em letra cursiva, associando consoantes e vogais e tirando a lição do quadro sem dificuldade.',
    'Em relação à sua oralidade e linguagem escrita tem desempenhado de modo excelente, realizando as atividades em sala de aula, associando consoantes e vogais e realizando a escrita do nome com letra cursiva sem dificuldades.',
  ],
};
