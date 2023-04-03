import { Style } from '../../../../../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../../../../../../../common/data/defaultPropValues';

import { DropdownButtonItemDarkActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: DropdownButtonItemDarkActiveStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
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
