import { ButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

export default ({ theme, size = defaultSize }: ButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;

	const radius: Radius = 'none';

	return {
		'borderWidth': `${border}px`,
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
