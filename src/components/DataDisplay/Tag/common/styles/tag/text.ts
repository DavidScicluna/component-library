import { Style } from '../../../../../../common/types';
import { isClickable as defaultIsClickable } from '../../data/defaultPropValues';

import { TagStyleProps } from './types';

export default ({ theme, isClickable = defaultIsClickable }: TagStyleProps): Style => ({
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

	'&:active': isClickable
		? {
				borderWidth: 0,
				borderStyle: 'solid',
				borderColor: theme.colors.transparent
		  }
		: {}
});
