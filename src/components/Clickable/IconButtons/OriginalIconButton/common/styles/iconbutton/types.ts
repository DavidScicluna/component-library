import { IconButtonStyleProps as AllIconButtonStyleProps } from '../types';

type Picked = 'theme' | 'isRound' | 'size';

export type IconButtonStyleProps = Pick<AllIconButtonStyleProps, Picked>;
