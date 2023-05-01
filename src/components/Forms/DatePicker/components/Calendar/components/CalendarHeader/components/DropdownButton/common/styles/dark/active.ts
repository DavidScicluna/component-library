import { color as defaultColor } from '../../../../../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../common/utils/color';
import { getSizeConfig } from '../../utils';

import { DropdownButtonDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor }: DropdownButtonDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	const config = getSizeConfig();
	const border = config.border;
	const offset = config.offset;

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors[color][borderShade],
		'backgroundColor': theme.colors.gray[backgroundShade],
		'background': theme.colors.gray[backgroundShade],

		'&:hover': {
			'color': theme.colors[color][colorShade],
			'borderColor': theme.colors[color][borderShade],
			'backgroundColor': theme.colors.gray[backgroundShade],
			'background': theme.colors.gray[backgroundShade],

			'&:active': {
				color: theme.colors[color][colorShade],
				borderColor: theme.colors[color][borderShade],
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade]
			}
		},

		'&:active': {
			color: theme.colors[color][colorShade],
			borderColor: theme.colors[color][borderShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade]
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
