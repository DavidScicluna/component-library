import { ButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';

export default ({ theme }: ButtonStyleProps): Style => {
	const radius: Radius = 'none';

	return {
		'borderWidth': 0,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'&::before': {
			content: '""',

			borderWidth: 0,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius]
		},

		'&:active': {
			borderWidth: 0,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		}
	};
};
