import { InputStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type InputDarkFocusedStyleProps = Pick<InputStyleProps, Picked>;
