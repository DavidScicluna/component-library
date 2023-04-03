import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { BadgeStyleProps } from './types';

export default ({ theme, size = defaultSize }: BadgeStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;
	const padding = config.padding;

	const radius: Radius =
		size === 'xs' || size === 'sm'
			? 'xs'
			: size === 'md' || size === 'lg'
			? 'base'
			: size === '3xl' || size === '4xl'
			? 'xl'
			: 'lg';

	return {
		cursor: 'default',

		pointerEvents: 'none',

		width: 'auto',
		height: 'auto',

		minWidth: 'auto',
		minHeight: 'auto',
		maxWidth: 'none',
		maxHeight: 'none',

		display: 'inline-flex',

		userSelect: 'none',

		borderWidth: `${border}px`,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent,
		borderRadius: theme.radii[radius],

		px: `${theme.space[padding.x]} !important`,
		py: `${theme.space[padding.y]} !important`
	};
};
