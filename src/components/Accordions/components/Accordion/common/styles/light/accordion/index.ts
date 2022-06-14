import { darken } from 'color2k';

import { AccordionLightStylingProps } from './types';

import { Style } from '../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../theme/types';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';
import { isOpen as defaultIsOpen } from '../../..//data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isOpen = defaultIsOpen
}: AccordionLightStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'light',
		type: !isOpen ? 'text.secondary' : 'color'
	});

	const config = getSizeConfig();
	const border = config.border;
	const transform = config.transform;
	const offset = config.offset;

	const color: Color = !isOpen ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: `0 ${transform}px 0 0 ${theme.colors[color][shade]}`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.gray[50],
			background: theme.colors.gray[50]
		},

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),

			'&::before': {
				boxShadow: `0 ${transform}px 0 0 ${darken(theme.colors[color][shade], amount.hover)}`,
				borderColor: darken(theme.colors[color][shade], amount.hover),
				backgroundColor: theme.colors.gray[50],
				background: theme.colors.gray[50]
			},

			'&:active': {
				'color': darken(theme.colors[color][shade], amount.active),

				'&::before': {
					boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.active)}`,
					borderColor: darken(theme.colors[color][shade], amount.active),
					backgroundColor: theme.colors.gray[50],
					background: theme.colors.gray[50]
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][shade], amount.active),

			'&::before': {
				boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.active)}`,
				borderColor: darken(theme.colors[color][shade], amount.active),
				backgroundColor: theme.colors.gray[50],
				background: theme.colors.gray[50]
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
