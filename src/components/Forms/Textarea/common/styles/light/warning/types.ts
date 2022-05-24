import { InputStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type InputLightWarningStyleProps = Pick<InputStyleProps, Picked>;
