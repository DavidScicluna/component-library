import { IconButtonStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { getSizeConfig } from '../../utils';

export default ({ theme, isRound = false, size = 'md' }: IconButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const transform = config.transform.contained;
	const border = config.border;

	const radius: Radius = isRound
		? 'full'
		: size === 'xs' || size === 'sm'
		? 'xs'
		: size === 'lg' || size === 'xl'
		? 'lg'
		: 'base';

	return {
		'borderBottomWidth': `${transform}px`,
		'borderStyle': 'solid',
		'borderColor': 'transparent',

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
			borderTopWidth: `${border}px`,
			borderBottomWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: 'transparent'
		}
	};
};
