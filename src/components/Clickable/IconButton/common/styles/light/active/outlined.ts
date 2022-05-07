import { darken } from 'color2k';

import { IconButtonLightActiveStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor, size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

export default ({
	theme,
	color: colorProp = defaultColor,
	size = defaultSize
}: IconButtonLightActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black' || colorProp === 'white'
				? colorProp
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});

	const config = getSizeConfig({ size });
	const border = config.border;

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]}`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.gray[50],
			background: theme.colors.gray[50]
		},

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),

			'&::before': {
				boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.hover)}`,
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
		}
	};
};
