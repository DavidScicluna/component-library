import { IconStyleProps as AllIconStyleProps } from '../types';

type Picked = 'theme';

export type IconStyleProps = Pick<AllIconStyleProps, Picked>;
