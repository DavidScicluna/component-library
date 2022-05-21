import { InputStyleProps } from '../../types';

type Picked = 'theme' | 'size';

export type InputDarkInvalidStyleProps = Pick<InputStyleProps, Picked>;
