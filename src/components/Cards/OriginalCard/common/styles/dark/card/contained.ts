import { darken, lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../../../common/utils';
import { isClickable as defaultIsClickable, isFixed as defaultIsFixed } from '../../../data/defaultPropValues';

import { CardDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isClickable = defaultIsClickable,
	isFixed = defaultIsFixed,
	isLight = defaultIsLight
}: CardDarkStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
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
		colorMode: 'dark',
		type: colorProp === 'black' ? 'lightest' : 'background'
	});

	const config = getSizeConfig();
	const border = config.border;
	const transform = config.transform;
	const offset = config.offset;

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors.gray[backgroundShade],

		'&::before': {
			boxShadow:
				isClickable || isFixed
					? `0 ${transform}px 0 0 ${darken(theme.colors[color][colorShade], amount.back)}`
					: 'none',
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors[color][colorShade],
			background: theme.colors[color][colorShade]
		},

		'&:hover':
			isClickable && !isFixed
				? {
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
				  }
				: {},

		'&:active':
			isClickable && !isFixed
				? {
						'color': theme.colors.gray[backgroundShade],

						'&::before': {
							boxShadow: 'none',
							borderColor: lighten(theme.colors[color][colorShade], amount.active),
							backgroundColor: lighten(theme.colors[color][colorShade], amount.active),
							background: lighten(theme.colors[color][colorShade], amount.active)
						}
				  }
				: {},

		'&:focus-visible':
			isClickable && !isFixed
				? {
						outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
						outlineOffset: !isTouchDevice ? `${offset}px` : 0
				  }
				: {}
	};
};
