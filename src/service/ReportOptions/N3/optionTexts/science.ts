import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const scienceOptions: subjectOptions = {
  [performance.LOW]: [
    '**student** apresenta algumas dificuldades para desenvolver os conceitos apresentados nas aulas de natureza e sociedade, mas tem avançado consideravelmente.',
    '**student** tem apresentado algumas dificuldades para desenvolver os conceitos de natureza e sociedade, mas apesar das dificuldades têm alcançado avanços significativos.',
    'Em relação à compreensão e o desenvolvimento dos conceitos de natureza e sociedade apresentados em aula, apesar de apresentar algumas dificuldades, **student** tem alcançado avanços significativos.',
  ],
  [performance.MEDIUM]: [
    'Quanto ao desenvolvimento dos conceitos de natureza e sociedade, de modo geral, **student** tem alcaçado bons resultados sem maiores dificuldades, conceitos como identidade, direitos e deveres das crianças, descobrimento do Brasil, entre outros.',
    'Com relação ao desenvolvimento dos conceitos de natureza e sociedade seu desempenho tem trabalhado conceitos como identidade, direitos e deveres das crianças, direitos da mulher, entre outros sem dificuldades.',
    'Em relação ao desenvolvimento dos conceitos de natureza e sociedade, em aspectos gerais, trabalhado os conceitos sem dificuldades.',
  ],
  [performance.HIGH]: [
    'Quanto ao desenvolvimento dos conceitos de natureza e sociedade **student** tem ótimo desenvolvimento, compreendendo conceitos como identidade, direitos e deveres das crianças, família e escola.',
    'Com relação ao desenvolvimento dos conceitos de natureza e sociedade tem desempenhado com facilidade, compreendendo conceitos como direitos e deveres das crianças, identidade, escola e família.',
    'Em relação ao desenvolvimento dos conceitos de natureza e sociedade seu desempenho é excelente, compreendendo conceitos como identidade, direitos e deveres das crianças, família e escola de modo exemplar.',
  ],
};
