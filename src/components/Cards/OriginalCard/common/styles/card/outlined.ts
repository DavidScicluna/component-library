import { CardStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getSizeConfig } from '../../../../common/utils';
import { isClickable as defaultIsClickable } from '../../data/defaultPropValues';

export default ({ theme, isClickable = defaultIsClickable }: CardStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;
	const border = config.border;

	return {
		'borderBottomWidth': `${isClickable ? transform : border}px`,
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
			borderTopWidth: `${isClickable ? border : 0}px`,
			borderBottomWidth: `${isClickable ? border : 0}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		}
	};
};
