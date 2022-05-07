import { IconButtonStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

export default ({ theme, size = defaultSize }: IconButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const transform = config.transform.outlined;
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
