import { IconButtonStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'size';

export type IconButtonDarkStylingProps = Pick<IconButtonStyleProps, Picked>;
