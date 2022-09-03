import { darken } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../theme/types';
import { color as defaultColor, size as defaultSize } from '../../../../../common/data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../../../common/utils';

import { ButtonLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = defaultColor, size = defaultSize }: ButtonLightStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const transform = config.transform.outlined;
	const offset = config.offset.outlined;

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			boxShadow: `0 ${transform}px 0 0 ${theme.colors[color][colorShade]}`,
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade]
		},

		'&:hover': {
			'color': darken(theme.colors[color][colorShade], amount.hover),

			'&::before': {
				boxShadow: `0 ${transform}px 0 0 ${darken(theme.colors[color][colorShade], amount.hover)}`,
				borderColor: darken(theme.colors[color][colorShade], amount.hover),
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade]
			},

			'&:active': {
				'color': darken(theme.colors[color][colorShade], amount.active),

				'&::before': {
					boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][colorShade], amount.active)}`,
					borderColor: darken(theme.colors[color][colorShade], amount.active),
					backgroundColor: theme.colors.gray[backgroundShade],
					background: theme.colors.gray[backgroundShade]
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][colorShade], amount.active),

			'&::before': {
				boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][colorShade], amount.active)}`,
				borderColor: darken(theme.colors[color][colorShade], amount.active),
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade]
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
