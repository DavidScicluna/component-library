import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { TooltipProps } from '../../types';

export type TooltipStyleProps = {
	theme: Theme;
} & Pick<TooltipProps, 'color' | 'colorMode'>;

export type TooltipStyleReturn = {
	tooltip: Style;
};
