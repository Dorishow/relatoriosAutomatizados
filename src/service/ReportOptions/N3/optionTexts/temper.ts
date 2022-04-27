import { performance } from '../../../../enumerator/performance';
import { subjectOptions } from '../../../../model/rating/ratingOption';

export const temperOptions: subjectOptions = {
  [performance.LOW]: [
    '**student** é uma criança hiper comunicativa, se comunica com todos em sala de aula com facilidade, se mostra confortável em interagir com os outros.',
    '**student** é uma criança comunicativa, com facilidade para interagir com os outros, de modo que se apresenta confortável em interagir com todos, mas possui facilidade para se dispersar e pode se distrair a qualquer momento.',
    '**student** é uma criança que possui muita facilidade em se entrosar, se comunicar e brincar com os colegas, de modo que se apresenta bastante ativa em sala de aula.',
  ],
  [performance.MEDIUM]: [
    '**student** é uma criança adorável, de aspecto tranquilo, que se dá muito bem com os colegas em sala.',
    '**student** é uma criança tranquila, se dá bem com os colegas e demostra muito respeito em sala de aula.',
    '**student** é uma criança tranquila e que se dá bem com os colegas, se comunica de modo coerente e interage de maneira pontual, sempre respeitando os coleguinhas.',
  ],
  [performance.HIGH]: [
    '**student** é uma criança muito afetuosa, gosta de brincar com os coleguinhas, os respeita e demonstra muito carinho para com os outros.',
    '**student** é uma criança tranquila e afetuosa, interage com os coleguinhas em sala e os respeita assim como respeita a professora.',
    '**student** é uma criança adorável, apresenta aspecto tranquilo e afetuoso e interage de modo respeito com os coleguinhas e com a professora.',
  ],
};
