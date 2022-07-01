import { IconButtonStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { isRound as defaultIsRound } from '../../data/defaultPropValues';

export default ({ theme, isRound = defaultIsRound }: IconButtonStyleProps): Style => {
	const radius: Radius = isRound ? 'full' : 'none';

	return {
		'borderWidth': 0,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'&::before': {
			content: '""',

			borderWidth: 0,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius]
		},

		'&:active': {
			borderWidth: 0,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		}
	};
};
