import { CardStyleProps } from './types';

import { Style } from '../../../../../../common/types';

export default ({ theme }: CardStyleProps): Style => ({
	'borderWidth': 0,
	'borderStyle': 'solid',
	'borderColor': theme.colors.transparent,

	'p': '0 !important',

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
