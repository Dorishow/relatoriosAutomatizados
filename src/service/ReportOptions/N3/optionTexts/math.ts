import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const mathOptions: subjectOptions = {
  [performance.LOW]: [
    'Seu desempenho em relação à disciplina de matemática tem se apresentado de modo satisfatório, apesar da resistência em construir alguns conceitos.',
    'Seu aprendizado quanto à matemática tem se desenvolvido de modo cadenciado, apresentando algumas dificuldades no percurso, mas seu desenvolvimento tem se mostrado positivo.',
    'Seu desenvolvimento do raciocínio lógico matemático tem se desenvolvido, mesmo apresentando algumas dificuldades.',
  ],
  [performance.MEDIUM]: [
    'Seu desempenho com relação à disciplina de matemática tem se apresentado de modo muito satisfatório, empenhando de forma positiva e aplicando conceitos como números vizinhos, sequência numérica, contagem de pequenos grupos de objetos e aplicações práticas de raciocínio lógico matemático.',
    'Seu aprendizado quanto à matemática se desenvolve de modo proveitoso, aplicando conceitos como números vizinhos, sequência numérica e contagem de pequenos grupos de objetos.',
    'Seu desenvolvimento do raciocínio matemático tem ocorrido de modo proveitoso, aplicando os conceitos apresentados em sala sem muita dificuldade.',
  ],
  [performance.HIGH]: [
    'Seu desempenho em relação à disciplina de matemática tem se apresentado de modo extremamente satisfatório, aplicando os conceitos apresentados em sala com bastante facilidade, como sequência numérica, números vizinhos, contagem de pequenos grupos, entre outros.',
    'Seu aprendizado quanto à matemática se desenvolve de modo abrangente e proveitoso, aplicando com facilidade os conceitos apresentados em sala como sequência numérica, números vizinhos, contagem de pequenos grupos, entre outros.',
    'Seu desenvolvimento do raciocínio lógico matemático tem se dado de modo exemplar, não apresentando resistência ou dificuldade, aproveitando os conceitos apresentados em aula como sequência numérica, números vizinhos, contagem de pequenos grupos, entre outros.',
  ],
};
