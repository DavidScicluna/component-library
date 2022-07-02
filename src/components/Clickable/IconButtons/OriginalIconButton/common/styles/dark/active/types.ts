import { IconButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type IconButtonDarkActiveStylingProps = Pick<IconButtonStyleProps, Picked>;
