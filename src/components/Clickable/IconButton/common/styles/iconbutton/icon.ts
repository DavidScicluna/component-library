import { IconButtonStyleProps } from './types';

import { Style } from '../../../../../../common/types';

export default ({ theme }: IconButtonStyleProps): Style => ({
	'borderWidth': 0,
	'borderStyle': 'solid',
	'borderColor': 'transparent',
	'borderRadius': theme.radii.none,

	'&::before': {
		content: '""',

		borderRadius: theme.radii.none,
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: 'transparent'
	},

	'&:active': {
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: 'transparent'
	}
});
