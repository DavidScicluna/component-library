import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { Radius } from '../../../../../../theme/types';
import { isFullWidth as defaultIsFullWidth, size as defaultSize, variant as defaultVariant } from '../../default/props';
import { getSizeConfig } from '../../utils';

import { RatingGroupStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	isFullWidth = defaultIsFullWidth,
	size = defaultSize,
	variant = defaultVariant
}: RatingGroupStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;
	const padding = config.padding;

	const radius: Radius = size === 'xs' || size === 'sm' ? 'xs' : size === 'lg' || size === 'xl' ? 'lg' : 'base';

	return {
		width: isFullWidth ? '100%' : 'auto',
		height: 'auto',

		minWidth: 'auto',
		minHeight: 'auto',
		maxWidth: 'none',
		maxHeight: 'none',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		opacity: 1,

		outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important',
		borderStyle: 'solid',
		borderWidth: variant !== 'transparent' ? `${border}px` : 0,
		borderRadius: theme.radii[radius],

		WebkitTapHighlightColor: theme.colors.transparent,

		px: `${theme.space[padding.x]} !important`,
		py: `${theme.space[padding.y]} !important`
	};
};
