import { BadgeStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'isLight';

export type BadgeLightStylingProps = Pick<BadgeStyleProps, Picked>;
