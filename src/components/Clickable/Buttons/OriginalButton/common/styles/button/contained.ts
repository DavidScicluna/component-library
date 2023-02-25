import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';
import { isRound as defaultIsRound, size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

import { ButtonStyleProps } from './types';

export default ({ theme, isRound = defaultIsRound, size = defaultSize }: ButtonStyleProps): Style => {
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
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'&::before': {
			content: '""',

			borderTopWidth: `${border}px`,
			borderLeftWidth: `${border}px`,
			borderRightWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius]
		},

		'&:active': {
			borderTopWidth: `${transform}px`,
			borderBottomWidth: 0,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		}
	};
};
