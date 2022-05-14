import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const langOptions: subjectOptions = {
  [performance.LOW]: [
    'Quanto ao aprimoramento do código de linguagens, apesar de apresentar certas dificuldades, têm alcançado avanços consideráveis em sua leitura e reconhecimento das vogais e consoantes.',
    'Com relação ao aprimoramento do código de linguagens, ainda apresenta certas dificuldades, mas seus avanços são significativos.',
    'Em relação ao aprimoramento do código de linguagens, ainda apresenta dificuldade com algumas consoantes, mas de todo modo têm alcançado com suas habilidades em identificar vogais e consoantes.',
  ],
  [performance.MEDIUM]: [
    'Quanto ao aprimoramento do código de linguagens, tem conseguido avançar e performar sem grandes dificuldades, concatenando vogais e consoantes para formar famílias silábicas.',
    'Com relação ao aprimoramento do código de linguagens, seu desempenho tem sido proveitoso e a construção dos conhecimentos apresentados em sala tem sido efetiva.',
    'Em relação ao aprimoramento do código de linguagens, tem se desenvolvido sem dificuldades, realizando encontros vocálicos e construído sílabas de acordo com o ensinado.',
  ],
  [performance.HIGH]: [
    'Quanto ao aprimoramento do código de linguagens, seu desempenho é exemplar, construíndo encontros vocálicos, famílias silábicas e a escrita do nome em letra cursiva, além de tirar a lição do quadro sem dificuldade.',
    'Com relação ao aprimoramento do código de linguagens tem desempenhado com facilidade, construíndo encontros vocálicos, escrevendo o próprio nome em letra cursiva, associando consoantes e vogais e tirando a lição do quadro sem dificuldade.',
    'Em relação ao aprimoramento do código de linguagens tem desempenhado de modo excelente, realizando as atividades em sala de aula, associando consoantes e vogais e realizando a escrita do nome com letra cursiva sem dificuldades.',
  ],
};
