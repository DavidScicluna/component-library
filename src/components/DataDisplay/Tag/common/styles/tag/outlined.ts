import { Style } from '../../../../../../common/types';
import { isClickable as defaultIsClickable, size as defaultSize } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { TagStyleProps } from './types';

export default ({ theme, isClickable = defaultIsClickable, size = defaultSize }: TagStyleProps): Style => {
	const config = getSizeConfig({ size });
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
			borderBottomWidth: '0px',
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		},

		'&:active': isClickable
			? {
					borderTopWidth: `${border}px`,
					borderBottomWidth: `${border}px`,
					borderStyle: 'solid',
					borderColor: theme.colors.transparent
			  }
			: {}
	};
};
