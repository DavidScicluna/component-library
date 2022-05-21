import { InputStyleProps as AllInputStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type InputStyleProps = Pick<AllInputStyleProps, Picked>;
