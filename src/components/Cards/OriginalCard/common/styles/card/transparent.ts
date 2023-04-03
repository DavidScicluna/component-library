import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { isClickable as defaultIsClickable, isFixed as defaultIsFixed } from '../../data/defaultPropValues';

import { CardStyleProps } from './types';

export default ({ theme, isClickable = defaultIsClickable, isFixed = defaultIsFixed }: CardStyleProps): Style => {
	const radius: Radius = 'none';

	return {
		'borderWidth': 0,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'p': '0 !important',

		'&::before': {
			content: '""',

			borderWidth: 0,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius]
		},

		'&:active':
			isClickable && !isFixed
				? {
						borderWidth: 0,
						borderStyle: 'solid',
						borderColor: theme.colors.transparent
				  }
				: {}
	};
};
