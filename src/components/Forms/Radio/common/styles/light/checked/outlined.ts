import { darken, transparentize } from 'color2k';

import { RadioLightCheckedStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

export default ({
	theme,
	color: colorProp,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: RadioLightCheckedStyleProps): Style => {
	const amount = getAmount();
	const colorShade = getHue({
		colorMode: 'light',
		type: 'lightest'
	});
	const shade = getHue({
		colorMode: 'light',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'light'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : colorProp;

	return {
		'color': theme.colors[color][shade],
		'borderColor': theme.colors[color][shade],
		'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.5),
		'background': transparentize(theme.colors[color][backgroundShade], 0.5),

		'& .chakra-radio': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& .chakra-radio__control': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors[color][shade],
			background: theme.colors[color][shade]
		},

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),
			'borderColor': darken(theme.colors[color][shade], amount.hover),
			'backgroundColor': darken(transparentize(theme.colors[color][backgroundShade], 0.5), amount.hover),
			'background': darken(transparentize(theme.colors[color][backgroundShade], 0.5), amount.hover),

			'& .chakra-radio': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors[color][shade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-radio__control': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors[color][shade], amount.hover),
				backgroundColor: darken(theme.colors[color][shade], amount.hover),
				background: darken(theme.colors[color][shade], amount.hover)
			},

			'&:active': {
				'color': darken(theme.colors[color][shade], amount.active),
				'borderColor': darken(theme.colors[color][shade], amount.active),
				'backgroundColor': darken(transparentize(theme.colors[color][backgroundShade], 0.5), amount.active),
				'background': darken(transparentize(theme.colors[color][backgroundShade], 0.5), amount.active),

				'& .chakra-radio': {
					color: theme.colors.gray[colorShade],
					borderColor: darken(theme.colors[color][shade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				},

				'& .chakra-radio__control': {
					color: theme.colors.gray[colorShade],
					borderColor: darken(theme.colors[color][shade], amount.active),
					backgroundColor: darken(theme.colors[color][shade], amount.active),
					background: darken(theme.colors[color][shade], amount.active)
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][shade], amount.active),
			'borderColor': darken(theme.colors[color][shade], amount.active),
			'backgroundColor': darken(transparentize(theme.colors[color][backgroundShade], 0.5), amount.active),
			'background': darken(transparentize(theme.colors[color][backgroundShade], 0.5), amount.active),

			'& .chakra-radio': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors[color][shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-radio__control': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors[color][shade], amount.active),
				backgroundColor: darken(theme.colors[color][shade], amount.active),
				background: darken(theme.colors[color][shade], amount.active)
			}
		}
	};
};
