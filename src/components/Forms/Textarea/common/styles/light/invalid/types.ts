import { InputStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type InputLightInvalidStyleProps = Pick<InputStyleProps, Picked>;
