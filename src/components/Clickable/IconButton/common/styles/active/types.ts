import { IconButtonStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type IconButtonActiveStyleProps = Pick<IconButtonStyleProps, Picked>;
