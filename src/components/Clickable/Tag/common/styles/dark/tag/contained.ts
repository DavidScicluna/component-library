import { darken, lighten } from 'color2k';

import { TagDarkStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color, ColorHues } from '../../../../../../../theme/types';
import {
	color as defaultColor,
	isClickable as defaultIsClickable,
	size as defaultSize
} from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isClickable = defaultIsClickable,
	size = defaultSize
}: TagDarkStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'dark',
		type:
			colorProp === 'black' || colorProp === 'white'
				? colorProp
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const transform = config.transform;
	const offset = config.offset;

	const textShade: ColorHues = colorProp === 'black' ? 50 : 900;
	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors.gray[textShade],

		'&::before': {
			boxShadow: isClickable ? `0 ${transform}px 0 0 ${darken(theme.colors[color][shade], amount.back)}` : 'none',
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors[color][shade],
			background: theme.colors[color][shade]
		},

		'&:hover': {
			'color': theme.colors.gray[textShade],

			'&::before': {
				boxShadow: `0 ${transform}px 0 0 ${darken(theme.colors[color][shade], amount.back)}`,
				borderColor: lighten(theme.colors[color][shade], amount.hover),
				backgroundColor: lighten(theme.colors[color][shade], amount.hover),
				background: lighten(theme.colors[color][shade], amount.hover)
			},

			'&:active': {
				'color': theme.colors.gray[textShade],

				'&::before': {
					boxShadow: 'none',
					borderColor: lighten(theme.colors[color][shade], amount.active),
					backgroundColor: lighten(theme.colors[color][shade], amount.active),
					background: lighten(theme.colors[color][shade], amount.active)
				}
			}
		},

		'&:active': {
			'color': theme.colors.gray[textShade],

			'&::before': {
				boxShadow: 'none',
				borderColor: lighten(theme.colors[color][shade], amount.active),
				backgroundColor: lighten(theme.colors[color][shade], amount.active),
				background: lighten(theme.colors[color][shade], amount.active)
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
