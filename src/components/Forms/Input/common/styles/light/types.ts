import { InputStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type InputLightStyleProps = Pick<InputStyleProps, Picked>;
