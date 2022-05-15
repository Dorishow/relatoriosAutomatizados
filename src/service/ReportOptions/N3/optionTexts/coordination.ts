import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const coordinationOptions: subjectOptions = {
  [performance.LOW]: [
    'Quanto à sua coordenação motora apresenta algumas dificuldades, mas tem avançado consideravelmente.',
    'Com relação à sua coordenação motora ainda apresenta dificuldades, mas tem alcançado avanços consideráveis.',
    'Em relação à sua coordenação motora, apesar de apresentar dificuldade com algumas consoantes, tem avançado com suas habilidades.',
  ],
  [performance.MEDIUM]: [
    'Quanto à sua coordenação motora **student** tem conseguido avançar e performar sem dificuldades.',
    'Com relação à sua coordenação motora seu desempenho tem sido muito proveitoso, performando com pouca ou nenhuma dificuldade.',
    'Em relação à sua coordenação motora, em aspectos gerais, têm realizado as atividades e desempenhado sem dificuldades.',
  ],
  [performance.HIGH]: [
    'Quanto à sua coordenação motora seu desempenho é exemplar.',
    'Com relação à sua coordenação motora tem desempenhado com facilidade, e não apresenta resistência ou dificuldade.',
    'Em relação à sua coordenação motora seu desempenho é excelente, realizando as atividades em sala de aula de modo exemplar.',
  ],
};
