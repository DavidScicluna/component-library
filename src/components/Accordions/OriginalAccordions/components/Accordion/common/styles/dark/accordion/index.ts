import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../../common/data/defaultPropValues';
import { isLight as defaultIsLight, isOpen as defaultIsOpen } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

import { AccordionDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color = defaultColor,
	isLight = defaultIsLight,
	isOpen = defaultIsOpen
}: AccordionDarkStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'dark',
		type: isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color'
	});

	const config = getSizeConfig();
	const border = config.border;
	const transform = config.transform;
	const offset = config.offset;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: `0 ${transform}px 0 0 ${theme.colors[color][shade]}`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.gray[900],
			background: theme.colors.gray[900]
		},

		'&:hover': !isOpen
			? {
					'color': lighten(theme.colors[color][shade], amount.hover),

					'&::before': {
						boxShadow: `0 ${transform}px 0 0 ${lighten(theme.colors[color][shade], amount.hover)}`,
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
			: {},

		'&:active': !isOpen
			? {
					'color': lighten(theme.colors[color][shade], amount.active),

					'&::before': {
						boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.active)}`,
						borderColor: lighten(theme.colors[color][shade], amount.active),
						backgroundColor: theme.colors.gray[900],
						background: theme.colors.gray[900]
					}
			  }
			: {},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
