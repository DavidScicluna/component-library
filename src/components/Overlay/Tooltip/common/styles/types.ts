import { Style } from '../../../../common/types';
import { Theme } from '../../../../theme/types';
import { TooltipProps } from '../../types';

type Picked = 'color' | 'colorMode';

export type TooltipStyleProps = {
	theme: Theme;
} & Pick<TooltipProps, Picked>;

export type TooltipStyleReturn = {
	tooltip: Style;
};
