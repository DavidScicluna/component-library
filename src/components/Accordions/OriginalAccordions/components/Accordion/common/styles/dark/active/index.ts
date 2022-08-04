import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../../common/data/defaultPropValues';
import { isLight as defaultIsLight, isOpen as defaultIsOpen } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

import { AccordionDarkActiveStylingProps } from './types';

export default ({
	theme,
	color = defaultColor,
	isLight = defaultIsLight,
	isOpen = defaultIsOpen
}: AccordionDarkActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'dark',
		type: isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color'
	});

	const config = getSizeConfig();
	const border = config.border;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]}`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.gray[900],
			background: theme.colors.gray[900]
		},

		'&:hover': !isOpen
			? {
					'color': lighten(theme.colors[color][shade], amount.hover),

					'&::before': {
						boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.hover)}`,
						borderColor: lighten(theme.colors[color][shade], amount.hover),
						backgroundColor: theme.colors.gray[900],
						background: theme.colors.gray[900]
					},

					'&:active': {
						'color': lighten(theme.colors[color][shade], amount.active),

						'&::before': {
							boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.active)}`,
							borderColor: lighten(theme.colors[color][shade], amount.active),
							backgroundColor: theme.colors.gray[900],
							background: theme.colors.gray[900]
						}
					}
			  }
			: {}
	};
};
