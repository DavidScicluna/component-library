import { darken } from 'color2k';

import { IconButtonLightStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = 'gray', size = 'md' }: IconButtonLightStylingProps): Style => {
	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	const amount = getAmount({ variant: 'outlined' });
	const shade = getHue({ colorMode: 'light', type: color === 'gray' ? 'text.secondary' : 'color' });

	const config = getSizeConfig({ size });
	const border = config.border;
	const transform = config.transform.contained;
	const offset = config.offset.contained;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: `0 ${transform}px 0 0 ${theme.colors[color][shade]}`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),

			'&::before': {
				boxShadow: `0 ${transform}px 0 0 ${darken(theme.colors[color][shade], amount.hover)}`,
				borderColor: darken(theme.colors[color][shade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'color': darken(theme.colors[color][shade], amount.active),

				'&::before': {
					boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.active)}`,
					borderColor: darken(theme.colors[color][shade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][shade], amount.active),

			'&::before': {
				boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.active)}`,
				borderColor: darken(theme.colors[color][shade], amount.active),
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
