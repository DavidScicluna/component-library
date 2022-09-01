import { darken } from 'color2k';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import {
	color as defaultColor,
	isLight as defaultIsLight,
	isOpen as defaultIsOpen
} from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

import { CollapsibleCardLightActiveStylingProps } from './types';

export default ({
	theme,
	color = defaultColor,
	isLight = defaultIsLight,
	isOpen = defaultIsOpen
}: CollapsibleCardLightActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type: isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
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
					'color': darken(theme.colors[color][colorShade], amount.hover),

					'&::before': {
						boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][colorShade], amount.hover)}`,
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
			  }
			: {}
	};
};
