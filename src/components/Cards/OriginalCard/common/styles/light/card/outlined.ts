import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../../../common/utils';
import { isClickable as defaultIsClickable, isFixed as defaultIsFixed } from '../../../data/defaultPropValues';

import { CardLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isClickable = defaultIsClickable,
	isFixed = defaultIsFixed,
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
		type: 'background'
	});

	const config = getSizeConfig();
	const border = config.border;
	const transform = config.transform;
	const offset = config.offset;

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			boxShadow: `0 ${isClickable && !isFixed ? transform : border}px 0 0 ${theme.colors[color][colorShade]}`,
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade]
		},

		'&:hover':
			isClickable && !isFixed
				? {
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
								boxShadow: `0 ${border}px 0 0 ${darken(
									theme.colors[color][colorShade],
									amount.active
								)}`,
								borderColor: darken(theme.colors[color][colorShade], amount.active),
								backgroundColor: theme.colors.gray[backgroundShade],
								background: theme.colors.gray[backgroundShade]
							}
						}
				  }
				: {},

		'&:active':
			isClickable && !isFixed
				? {
						'color': darken(theme.colors[color][colorShade], amount.active),

						'&::before': {
							boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][colorShade], amount.active)}`,
							borderColor: darken(theme.colors[color][colorShade], amount.active),
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade]
						}
				  }
				: {},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
