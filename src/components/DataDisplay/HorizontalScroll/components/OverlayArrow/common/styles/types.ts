import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { HorizontalScrollProps } from '../../../../common/types';
import { OverlayArrowProps } from '../types';

export type ArrowStyleProps = Pick<OverlayArrowProps, 'direction'> & {
	theme: Theme;
} & Pick<HorizontalScrollProps, 'colorMode'>;

export type ArrowStyleReturn = {
	arrow: Style;
	pseudo: Style;
};
