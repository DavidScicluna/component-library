
import { Style } from '../../../../../../../common/types';
import { Radius } from '../../../../../../../theme/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

import { ButtonStyleProps } from './types';

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
