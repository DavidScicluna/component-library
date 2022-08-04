import { lighten, transparentize } from 'color2k';


import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

import { CheckboxDarkCheckedStyleProps } from './types';

export default ({
	theme,
	color: colorProp,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: CheckboxDarkCheckedStyleProps): Style => {
	const amount = getAmount();
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'darkest'
	});
	const shade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'light'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : colorProp;

	return {
		'color': theme.colors[color][shade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'& .chakra-checkbox': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& .chakra-checkbox__control': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors[color][shade],
			background: theme.colors[color][shade]
		},

		'&:hover': {
			'color': lighten(theme.colors[color][shade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.5),
			'background': transparentize(theme.colors[color][backgroundShade], 0.5),

			'& .chakra-checkbox': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][shade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-checkbox__control': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][shade], amount.hover),
				backgroundColor: lighten(theme.colors[color][shade], amount.hover),
				background: lighten(theme.colors[color][shade], amount.hover)
			},

			'&:active': {
				'color': lighten(theme.colors[color][shade], amount.active),
				'borderColor': theme.colors.transparent,
				'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
				'background': transparentize(theme.colors[color][backgroundShade], 0.25),

				'& .chakra-checkbox': {
					color: theme.colors.gray[colorShade],
					borderColor: lighten(theme.colors[color][shade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				},

				'& .chakra-checkbox__control': {
					color: theme.colors.gray[colorShade],
					borderColor: lighten(theme.colors[color][shade], amount.active),
					backgroundColor: lighten(theme.colors[color][shade], amount.active),
					background: lighten(theme.colors[color][shade], amount.active)
				}
			}
		},

		'&:active': {
			'color': lighten(theme.colors[color][shade], amount.active),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
			'background': transparentize(theme.colors[color][backgroundShade], 0.25),

			'& .chakra-checkbox': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-checkbox__control': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][shade], amount.active),
				backgroundColor: lighten(theme.colors[color][shade], amount.active),
				background: lighten(theme.colors[color][shade], amount.active)
			}
		}
	};
};
