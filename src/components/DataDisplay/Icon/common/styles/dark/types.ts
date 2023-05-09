import { IconStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type IconDarkStylingProps = Pick<IconStyleProps, Picked>;
