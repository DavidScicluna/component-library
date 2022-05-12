import { TooltipStyleProps as AllTooltipStyleProps } from '../types';

type Picked = 'theme';

export type TooltipStyleProps = Pick<AllTooltipStyleProps, Picked>;
