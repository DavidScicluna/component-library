import { darken } from 'color2k';

import { ButtonLightStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = 'gray', size = 'md' }: ButtonLightStylingProps): Style => {
	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	const amount = getAmount({ variant: 'text' });
	const shade = getHue({ colorMode: 'light', type: color === 'gray' ? 'text.secondary' : 'color' });

	const config = getSizeConfig({ size });
	const border = config.border;
	const offset = config.offset.contained;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),

			'&::before': {
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'color': darken(theme.colors[color][shade], amount.active),

				'&::before': {
					borderColor: theme.colors.transparent,
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][shade], amount.active),

			'&::before': {
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
