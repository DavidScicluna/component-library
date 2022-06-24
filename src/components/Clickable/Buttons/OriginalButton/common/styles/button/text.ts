import { ButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';

export default ({ theme }: ButtonStyleProps): Style => ({
	'borderWidth': 0,
	'borderStyle': 'solid',
	'borderColor': theme.colors.transparent,

	'&::before': {
		content: '""',

		borderRadius: theme.radii.none,
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	},

	'&:active': {
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.transparent
	}
});
