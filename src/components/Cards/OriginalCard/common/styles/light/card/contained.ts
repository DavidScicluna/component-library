import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../../../common/utils';
import { isClickable as defaultIsClickable } from '../../../data/defaultPropValues';

import { CardLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isClickable = defaultIsClickable,
	isLight = defaultIsLight
}: CardLightStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? isLight
					? 'divider'
					: 'text.secondary'
				: isLight
				? 'divider'
				: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: colorProp === 'white' ? 'darkest' : 'background'
	});

	const config = getSizeConfig();
	const border = config.border;
	const transform = config.transform;
	const offset = config.offset;

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors.gray[backgroundShade],

		'&::before': {
			boxShadow: isClickable
				? `0 ${transform}px 0 0 ${darken(theme.colors[color][colorShade], amount.back)}`
				: 'none',
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors[color][colorShade],
			background: theme.colors[color][colorShade]
		},

		'&:hover': isClickable
			? {
					'color': theme.colors.gray[backgroundShade],

					'&::before': {
						boxShadow: `0 ${transform}px 0 0 ${darken(theme.colors[color][colorShade], amount.back)}`,
						borderColor: darken(theme.colors[color][colorShade], amount.hover),
						backgroundColor: darken(theme.colors[color][colorShade], amount.hover),
						background: darken(theme.colors[color][colorShade], amount.hover)
					},

					'&:active': {
						'color': theme.colors.gray[backgroundShade],

						'&::before': {
							boxShadow: 'none',
							borderColor: darken(theme.colors[color][colorShade], amount.active),
							backgroundColor: darken(theme.colors[color][colorShade], amount.active),
							background: darken(theme.colors[color][colorShade], amount.active)
						}
					}
			  }
			: {},

		'&:active': isClickable
			? {
					'color': theme.colors.gray[backgroundShade],

					'&::before': {
						boxShadow: 'none',
						borderColor: darken(theme.colors[color][colorShade], amount.active),
						backgroundColor: darken(theme.colors[color][colorShade], amount.active),
						background: darken(theme.colors[color][colorShade], amount.active)
					}
			  }
			: {},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
