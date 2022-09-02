import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import {
	color as defaultColor,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen
} from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

import { CollapsibleCardDarkActiveStylingProps } from './types';

export default ({
	theme,
	color = defaultColor,
	isLight = defaultIsLight,
	isOpen = defaultIsOpen
}: CollapsibleCardDarkActiveStylingProps): Style => {
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

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][colorShade]}`,
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade]
		},

		'&:hover': !isOpen
			? {
					'color': lighten(theme.colors[color][colorShade], amount.hover),

					'&::before': {
						boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][colorShade], amount.hover)}`,
						borderColor: lighten(theme.colors[color][colorShade], amount.hover),
						backgroundColor: theme.colors.gray[backgroundShade],
						background: theme.colors.gray[backgroundShade]
					},

					'&:active': {
						'color': lighten(theme.colors[color][colorShade], amount.active),

						'&::before': {
							boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][colorShade], amount.active)}`,
							borderColor: lighten(theme.colors[color][colorShade], amount.active),
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade]
						}
					}
			  }
			: {}
	};
};
