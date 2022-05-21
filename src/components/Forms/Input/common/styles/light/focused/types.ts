import { InputStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type InputLightFocusedStyleProps = Pick<InputStyleProps, Picked>;
