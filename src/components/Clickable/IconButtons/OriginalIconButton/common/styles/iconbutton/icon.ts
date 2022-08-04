
import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';
import { isRound as defaultIsRound, size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

import { IconButtonStyleProps } from './types';

export default ({ theme, isRound = defaultIsRound, size = defaultSize }: IconButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	const radius: Radius = isRound ? 'full' : 'none';

	return {
		'borderWidth': `${border}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

		'&::before': {
			content: '""',

			borderWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius]
		},

		'&:active': {
			borderWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		}
	};
};
