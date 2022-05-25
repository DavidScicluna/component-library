import { InputStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type InputDarkStyleProps = Pick<InputStyleProps, Picked>;
