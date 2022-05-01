import { ButtonStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { getSizeConfig } from '../../utils';

export default ({ theme, size = 'md' }: ButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const transform = config.transform.contained;
	const border = config.border;

	const radius: Radius = size === 'xs' || size === 'sm' ? 'xs' : size === 'lg' || size === 'xl' ? 'lg' : 'base';

	return {
		'borderBottomWidth': `${transform}px`,
		'borderStyle': 'solid',
		'borderColor': 'transparent',
		'borderRadius': theme.radii[radius],

		'&::before': {
			content: '""',

			borderRadius: theme.radii[radius],
			borderTopWidth: `${border}px`,
			borderLeftWidth: `${border}px`,
			borderRightWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: 'transparent'
		},

		'&:active': {
			borderTopWidth: `${transform}px`,
			borderBottomWidth: 0,
			borderStyle: 'solid',
			borderColor: 'transparent'
		}
	};
};
