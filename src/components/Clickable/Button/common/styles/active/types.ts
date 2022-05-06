import { ButtonStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type ButtonActiveStyleProps = Pick<ButtonStyleProps, Picked>;
