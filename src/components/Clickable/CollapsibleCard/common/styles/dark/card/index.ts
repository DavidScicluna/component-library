import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import {
	color as defaultColor,
	isFixed as defaultIsFixed,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen
} from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

import { CollapsibleCardDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color = defaultColor,
	isFixed = defaultIsFixed,
	isLight = defaultIsLight,
	isOpen = defaultIsOpen
}: CollapsibleCardDarkStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	const config = getSizeConfig();
	const border = config.border;
	const transform = config.transform;
	const offset = config.offset;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			boxShadow: `0 ${transform}px 0 0 ${theme.colors[color][colorShade]}`,
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade]
		},

		'&:hover':
			!isOpen && !isFixed
				? {
						'color': lighten(theme.colors[color][colorShade], amount.hover),

						'&::before': {
							boxShadow: `0 ${transform}px 0 0 ${lighten(theme.colors[color][colorShade], amount.hover)}`,
							borderColor: lighten(theme.colors[color][colorShade], amount.hover),
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade]
						},

						'&:active': {
							'color': lighten(theme.colors[color][colorShade], amount.active),

							'&::before': {
								boxShadow: `0 ${border}px 0 0 ${lighten(
									theme.colors[color][colorShade],
									amount.active
								)}`,
								borderColor: lighten(theme.colors[color][colorShade], amount.active),
								backgroundColor: theme.colors.gray[backgroundShade],
								background: theme.colors.gray[backgroundShade]
							}
						}
				  }
				: {},

		'&:active':
			!isOpen && !isFixed
				? {
						'color': lighten(theme.colors[color][colorShade], amount.active),

						'&::before': {
							boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][colorShade], amount.active)}`,
							borderColor: lighten(theme.colors[color][colorShade], amount.active),
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
