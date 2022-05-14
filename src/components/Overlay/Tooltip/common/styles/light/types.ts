import { TooltipStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type TooltipLightStyleProps = Pick<TooltipStyleProps, Picked>;
