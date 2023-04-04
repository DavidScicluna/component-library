import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { getSizeConfig } from '../../../../common/utils';
import { isClickable as defaultIsClickable, isFixed as defaultIsFixed } from '../../data/defaultPropValues';

import { CardStyleProps } from './types';

export default ({ theme, isClickable = defaultIsClickable, isFixed = defaultIsFixed }: CardStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;
	const border = config.border;

	const radius: Radius = 'lg';

	return {
		'borderBottomWidth': `${isClickable || isFixed ? transform : border}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'&::before': {
			content: '""',

			borderTopWidth: `${border}px`,
			borderLeftWidth: `${border}px`,
			borderRightWidth: `${border}px`,
			borderBottomWidth: '0px',
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius]
		},

		'&:active':
			isClickable && !isFixed
				? {
						borderTopWidth: `${border}px`,
						borderBottomWidth: `${border}px`,
						borderStyle: 'solid',
						borderColor: theme.colors.transparent
				  }
				: {}
	};
};
