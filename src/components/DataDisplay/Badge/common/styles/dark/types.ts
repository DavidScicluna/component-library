import { BadgeStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'isLight';

export type BadgeDarkStylingProps = Pick<BadgeStyleProps, Picked>;
