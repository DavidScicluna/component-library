
import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { getSizeConfig } from '../../../../common/utils';
import { isClickable as defaultIsClickable } from '../../data/defaultPropValues';

import { CardStyleProps } from './types';

export default ({ theme, isClickable = defaultIsClickable }: CardStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;
	const border = config.border;

	const radius: Radius = 'lg';

	return {
		'borderBottomWidth': `${isClickable ? transform : 0}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'&::before': {
			content: '""',

			borderTopWidth: `${border}px`,
			borderLeftWidth: `${border}px`,
			borderRightWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius]
		},

		'&:active': {
			borderTopWidth: `${isClickable ? transform : 0}px`,
			borderBottomWidth: 0,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		}
	};
};
