import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const temperOptions: subjectOptions = {
  [performance.LOW]: [
    '**student** é uma criança hiper comunicativa, se mostra confortável em interagir com os outros em sala de aula.',
    '**student** é uma criança comunicativa, com facilidade para interagir com os coleguinhas, mas possui facilidade para se dispersar e pode se distrair com facilidade.',
    '**student** possui muita facilidade em se expressar, se comunicar e brincar com os colegas, de modo que se apresenta como uma criança bastante ativa em sala de aula.',
  ],
  [performance.MEDIUM]: [
    '**student** é uma criança adorável, de aspecto tranquilo, que se dá muito bem com os colegas em sala.',
    '**student** é uma criança tranquila, se dá bem com os colegas e demonstra muito respeito em sala de aula.',
    '**student** é uma criança tranquila, se dá bem com os colegas e demonstra muito respeito em sala de aula, mas possui facilidade para se dispersar e pode se distrair com facilidade.',
    '**student** é uma criança tranquila e que se dá bem com os colegas, se comunica de modo coerente sempre respeitando a todos.',
  ],
  [performance.HIGH]: [
    '**student** é uma criança muito afetuosa, gosta de brincar com os coleguinhas, os respeita e demonstra muito carinho para com os outros.',
    '**student** é uma criança tranquila e afetuosa, interage com os coleguinhas em sala e os respeita assim como respeita a professora.',
    '**student** é uma criança adorável, apresenta aspecto tranquilo e afetuoso e interage de modo respeitoso com os coleguinhas e com a professora.',
  ],
};
