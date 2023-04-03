import { darken, lighten } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../theme/types';
import { color as defaultColor, size as defaultSize } from '../../../../../common/data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../../../common/utils';

import { IconButtonDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = defaultColor, size = defaultSize }: IconButtonDarkStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
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
		colorMode: 'dark',
		type: colorProp === 'black' ? 'lightest' : 'background'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const transform = config.transform.contained;
	const offset = config.offset.contained;

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors.gray[backgroundShade],

		'&::before': {
			boxShadow: `0 ${transform}px 0 0 ${darken(theme.colors[color][colorShade], amount.back)}`,
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors[color][colorShade],
			background: theme.colors[color][colorShade]
		},

		'&:hover': {
			'color': theme.colors.gray[backgroundShade],

			'&::before': {
				boxShadow: `0 ${transform}px 0 0 ${darken(theme.colors[color][colorShade], amount.back)}`,
				borderColor: lighten(theme.colors[color][colorShade], amount.hover),
				backgroundColor: lighten(theme.colors[color][colorShade], amount.hover),
				background: lighten(theme.colors[color][colorShade], amount.hover)
			},

			'&:active': {
				'color': theme.colors.gray[backgroundShade],

				'&::before': {
					boxShadow: 'none',
					borderColor: lighten(theme.colors[color][colorShade], amount.active),
					backgroundColor: lighten(theme.colors[color][colorShade], amount.active),
					background: lighten(theme.colors[color][colorShade], amount.active)
				}
			}
		},

		'&:active': {
			'color': theme.colors.gray[backgroundShade],

			'&::before': {
				boxShadow: 'none',
				borderColor: lighten(theme.colors[color][colorShade], amount.active),
				backgroundColor: lighten(theme.colors[color][colorShade], amount.active),
				background: lighten(theme.colors[color][colorShade], amount.active)
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
