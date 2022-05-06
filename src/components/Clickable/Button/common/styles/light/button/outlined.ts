import { darken } from 'color2k';

import { ButtonLightStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { color as defaultColor, size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor, size = defaultSize }: ButtonLightStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'light',
		type: color === 'black' || color === 'white' ? color : color === 'gray' ? 'text.secondary' : 'color'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const transform = config.transform.outlined;
	const offset = config.offset.outlined;

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
