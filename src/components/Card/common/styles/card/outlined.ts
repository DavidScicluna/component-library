import { CardStyleProps } from './types';

import { Style } from '../../../../../common/types';
import { getSizeConfig } from '../../utils';

export default ({ theme }: CardStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;
	const border = config.border;

	return {
		'borderBottomWidth': `${transform}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,

		'&::before': {
			content: '""',

			borderTopWidth: `${border}px`,
			borderLeftWidth: `${border}px`,
			borderRightWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		},

		'&:active': {
			borderTopWidth: `${border}px`,
			borderBottomWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		}
	};
};
