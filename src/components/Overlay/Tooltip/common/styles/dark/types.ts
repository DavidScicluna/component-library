import { TooltipStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type TooltipDarkStyleProps = Pick<TooltipStyleProps, Picked>;
