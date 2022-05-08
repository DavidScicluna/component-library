import { CardStyleProps } from './types';

import { Style } from '../../../../../common/types';
import { isClickable as defaultIsClickable } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

export default ({ theme, isClickable = defaultIsClickable }: CardStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;
	const border = config.border;

	return {
		'borderBottomWidth': `${isClickable ? transform : 0}px`,
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
			borderTopWidth: `${isClickable ? transform : 0}px`,
			borderBottomWidth: 0,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		}
	};
};
