import { Style } from '../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { DropdownButtonLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor }: DropdownButtonLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'color'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const config = getSizeConfig();
	const border = config.border;
	const offset = config.offset;

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors[color][borderShade],
		'backgroundColor': theme.colors[color][backgroundShade],
		'background': theme.colors[color][backgroundShade],

		'&:hover': {
			'color': theme.colors[color][colorShade],
			'borderColor': theme.colors[color][borderShade],
			'backgroundColor': theme.colors[color][backgroundShade],
			'background': theme.colors[color][backgroundShade],

			'&:active': {
				color: theme.colors[color][colorShade],
				borderColor: theme.colors[color][borderShade],
				backgroundColor: theme.colors[color][backgroundShade],
				background: theme.colors[color][backgroundShade]
			}
		},

		'&:active': {
			color: theme.colors[color][colorShade],
			borderColor: theme.colors[color][borderShade],
			backgroundColor: theme.colors[color][backgroundShade],
			background: theme.colors[color][backgroundShade]
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
