import { BlockType, ClockRotate } from './types';
import {
  IDLE,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  TOP_LEFT,
  TOP_RIGHT,
  RIGHT_RIGHT,
  RIGHT_LEFT,
  BOTTOM_LEFT,
} from './directions';

export const separator: BlockType = [
  // first
  IDLE,
  IDLE,
  // second
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  // third
  TOP_LEFT,
  TOP_RIGHT,
  // fourth
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  // fifth
  TOP_LEFT,
  TOP_RIGHT,
  // sixth
  IDLE,
  IDLE,
];
export const numberZero: BlockType = [
  BOTTOM_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
];
export const numberOne: BlockType = [
  IDLE,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  IDLE,
  TOP_BOTTOM,
  BOTTOM_LEFT,
  TOP_RIGHT,
  IDLE,
  TOP_BOTTOM,
  TOP_BOTTOM,
  IDLE,
  IDLE,
  TOP_BOTTOM,
  TOP_BOTTOM,
  IDLE,
  BOTTOM_LEFT,
  TOP_RIGHT,
  TOP_LEFT,
  RIGHT_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
];
export const numberTwo: BlockType = [
  BOTTOM_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
];
export const numberThree: BlockType = [
  BOTTOM_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
];
export const numberFour: BlockType = [
  // first
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  // second
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  TOP_BOTTOM,
  // third
  TOP_BOTTOM,
  TOP_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  // fourth
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  // fifth
  TOP_BOTTOM,
  TOP_BOTTOM,
  IDLE,
  IDLE,
  // sixth
  TOP_LEFT,
  TOP_RIGHT,
  IDLE,
  IDLE,
];
export const numberFive: BlockType = [
  // first
  BOTTOM_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  // second
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  // third
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  // fourth
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  // fifth
  TOP_BOTTOM,
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  // sixth
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
];
export const numberSix: BlockType = [
  // first
  IDLE,
  IDLE,
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  // second
  IDLE,
  IDLE,
  TOP_BOTTOM,
  TOP_BOTTOM,
  // third
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  // fourth
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  // fifth
  TOP_BOTTOM,
  TOP_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  // sixth
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
];
export const numberSeven: BlockType = [
  // first
  BOTTOM_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  // second
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  // third
  TOP_BOTTOM,
  TOP_BOTTOM,
  IDLE,
  IDLE,
  // fourth
  TOP_BOTTOM,
  TOP_BOTTOM,
  IDLE,
  IDLE,
  // fifth
  TOP_BOTTOM,
  TOP_BOTTOM,
  IDLE,
  IDLE,
  // sixth
  TOP_LEFT,
  TOP_RIGHT,
  IDLE,
  IDLE,
];
export const numberEight: BlockType = [
  // first
  BOTTOM_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  // second
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  // third
  TOP_BOTTOM,
  TOP_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  // fourth
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  // fifth
  TOP_BOTTOM,
  TOP_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  // sixth
  TOP_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
];
export const numberNine: BlockType = [
  // first
  BOTTOM_LEFT,
  RIGHT_LEFT,
  RIGHT_LEFT,
  RIGHT_BOTTOM,
  // second
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_BOTTOM,
  TOP_BOTTOM,
  // third
  TOP_BOTTOM,
  TOP_LEFT,
  TOP_RIGHT,
  TOP_BOTTOM,
  // fourth
  TOP_BOTTOM,
  BOTTOM_LEFT,
  RIGHT_LEFT,
  TOP_RIGHT,
  // fifth
  TOP_BOTTOM,
  TOP_BOTTOM,
  IDLE,
  IDLE,
  // sixth
  TOP_LEFT,
  TOP_RIGHT,
  IDLE,
  IDLE,
];

const SwitchNumber = (number: string) => {
  switch (number) {
    case '0':
      return numberZero;
    case '1':
      return numberOne;
    case '2':
      return numberTwo;
    case '3':
      return numberThree;
    case '4':
      return numberFour;
    case '5':
      return numberFive;
    case '6':
      return numberSix;
    case '7':
      return numberSeven;
    case '8':
      return numberEight;
    case '9':
      return numberNine;
    default:
      return separator;
  }
};

export default SwitchNumber;
