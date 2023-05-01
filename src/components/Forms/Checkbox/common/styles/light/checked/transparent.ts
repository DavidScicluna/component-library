import { darken, transparentize } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../default/props';
import { getAmount } from '../../../utils';

import { CheckboxLightCheckedStyleProps } from './types';

export default ({
	theme,
	color: colorProp,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: CheckboxLightCheckedStyleProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type: 'lightest'
	});
	const checkboxShade = getHue({
		colorMode: 'light',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'light'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : colorProp;

	return {
		'color': theme.colors[color][checkboxShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'& .chakra-checkbox': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][checkboxShade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& .chakra-checkbox__control': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][checkboxShade],
			backgroundColor: theme.colors[color][checkboxShade],
			background: theme.colors[color][checkboxShade]
		},

		'&:hover': {
			'color': darken(theme.colors[color][checkboxShade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.5),
			'background': transparentize(theme.colors[color][backgroundShade], 0.5),

			'& .chakra-checkbox': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors[color][checkboxShade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-checkbox__control': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors[color][checkboxShade], amount.hover),
				backgroundColor: darken(theme.colors[color][checkboxShade], amount.hover),
				background: darken(theme.colors[color][checkboxShade], amount.hover)
			},

			'&:active': {
				'color': darken(theme.colors[color][checkboxShade], amount.active),
				'borderColor': theme.colors.transparent,
				'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
				'background': transparentize(theme.colors[color][backgroundShade], 0.25),

				'& .chakra-checkbox': {
					color: theme.colors.gray[colorShade],
					borderColor: darken(theme.colors[color][checkboxShade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				},

				'& .chakra-checkbox__control': {
					color: theme.colors.gray[colorShade],
					borderColor: darken(theme.colors[color][checkboxShade], amount.active),
					backgroundColor: darken(theme.colors[color][checkboxShade], amount.active),
					background: darken(theme.colors[color][checkboxShade], amount.active)
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][checkboxShade], amount.active),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
			'background': transparentize(theme.colors[color][backgroundShade], 0.25),

			'& .chakra-checkbox': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors[color][checkboxShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-checkbox__control': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors[color][checkboxShade], amount.active),
				backgroundColor: darken(theme.colors[color][checkboxShade], amount.active),
				background: darken(theme.colors[color][checkboxShade], amount.active)
			}
		}
	};
};
