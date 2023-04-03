import { Style } from '../../../../../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../../../../../../../common/data/defaultPropValues';

import { DropdownButtonItemLightActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: DropdownButtonItemLightActiveStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	return {
		'color': theme.colors.gray[backgroundShade],
		'borderColor': theme.colors[color][colorShade],
		'backgroundColor': theme.colors[color][colorShade],
		'background': theme.colors[color][colorShade],

		'&:hover': {
			'color': theme.colors.gray[backgroundShade],
			'borderColor': theme.colors[color][colorShade],
			'backgroundColor': theme.colors[color][colorShade],
			'background': theme.colors[color][colorShade],

			'&:active': {
				color: theme.colors.gray[backgroundShade],
				borderColor: theme.colors[color][colorShade],
				backgroundColor: theme.colors[color][colorShade],
				background: theme.colors[color][colorShade]
			}
		},

		'&:active': {
			color: theme.colors.gray[backgroundShade],
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors[color][colorShade],
			background: theme.colors[color][colorShade]
		}
	};
};
