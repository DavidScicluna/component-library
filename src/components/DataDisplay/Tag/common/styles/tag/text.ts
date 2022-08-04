import { Style } from '../../../../../../common/types';

import { TagStyleProps } from './types';

export default ({ theme }: TagStyleProps): Style => ({
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
