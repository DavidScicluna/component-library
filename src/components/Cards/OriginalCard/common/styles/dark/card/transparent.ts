import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../../../common/utils';
import { isClickable as defaultIsisClickable } from '../../../data/defaultPropValues';

import { CardDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isClickable = defaultIsisClickable,
	isLight = defaultIsLight
}: CardDarkStylingProps): Style => {
	const amount = getAmount();

	const shade = getHue({
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

	const config = getSizeConfig();
	const border = config.border;

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: 'none',
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': isClickable
			? {
					'color': lighten(theme.colors[color][shade], amount.hover),

					'&::before': {
						boxShadow: 'none',
						borderColor: theme.colors.transparent,
						backgroundColor: theme.colors.transparent,
						background: theme.colors.transparent
					},

					'&:active': {
						'color': lighten(theme.colors[color][shade], amount.active),

						'&::before': {
							boxShadow: 'none',
							borderColor: theme.colors.transparent,
							backgroundColor: theme.colors.transparent,
							background: theme.colors.transparent
						}
					}
			  }
			: {},

		'&:active': isClickable
			? {
					'color': lighten(theme.colors[color][shade], amount.active),

					'&::before': {
						boxShadow: 'none',
						borderColor: theme.colors.transparent,
						backgroundColor: theme.colors.transparent,
						background: theme.colors.transparent
					}
			  }
			: {},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: 0
		}
	};
};
