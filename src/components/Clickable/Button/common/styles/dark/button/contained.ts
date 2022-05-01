import { darken, lighten } from 'color2k';

import { ButtonDarkStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { ColorHues } from '../../../../../../../theme/types';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = 'gray', size = 'md' }: ButtonDarkStylingProps): Style => {
	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	const amount = getAmount({ variant: 'contained' });
	const shade = getHue({ colorMode: 'dark', type: color === 'gray' ? 'text.secondary' : 'color' });

	const config = getSizeConfig({ size });
	const border = config.border;
	const transform = config.transform.contained;
	const offset = config.offset.contained;

	const textShade: ColorHues = colorProp === 'black' ? 50 : 900;

	return {
		'color': theme.colors.gray[textShade],

		'&::before': {
			boxShadow: `0 ${transform}px 0 0 ${darken(theme.colors[color][shade], amount.back)}`,
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
