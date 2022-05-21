import { InputStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'size';

export type InputGroupStyleProps = Pick<InputStyleProps, Picked>;
