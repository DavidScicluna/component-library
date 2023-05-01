import { lighten, transparentize } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../default/props';
import { getAmount } from '../../../utils';

import { RadioDarkCheckedStyleProps } from './types';

export default ({
	theme,
	color: colorProp,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: RadioDarkCheckedStyleProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: 'darkest'
	});
	const radioShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'light'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : colorProp;

	return {
		'color': theme.colors[color][radioShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'& .chakra-radio': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][radioShade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& .chakra-radio__control': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][radioShade],
			backgroundColor: theme.colors[color][radioShade],
			background: theme.colors[color][radioShade]
		},

		'&:hover': {
			'color': lighten(theme.colors[color][radioShade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.5),
			'background': transparentize(theme.colors[color][backgroundShade], 0.5),

			'& .chakra-radio': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][radioShade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-radio__control': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][radioShade], amount.hover),
				backgroundColor: lighten(theme.colors[color][radioShade], amount.hover),
				background: lighten(theme.colors[color][radioShade], amount.hover)
			},

			'&:active': {
				'color': lighten(theme.colors[color][radioShade], amount.active),
				'borderColor': theme.colors.transparent,
				'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
				'background': transparentize(theme.colors[color][backgroundShade], 0.25),

				'& .chakra-radio': {
					color: theme.colors.gray[colorShade],
					borderColor: lighten(theme.colors[color][radioShade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				},

				'& .chakra-radio__control': {
					color: theme.colors.gray[colorShade],
					borderColor: lighten(theme.colors[color][radioShade], amount.active),
					backgroundColor: lighten(theme.colors[color][radioShade], amount.active),
					background: lighten(theme.colors[color][radioShade], amount.active)
				}
			}
		},

		'&:active': {
			'color': lighten(theme.colors[color][radioShade], amount.active),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
			'background': transparentize(theme.colors[color][backgroundShade], 0.25),

			'& .chakra-radio': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][radioShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-radio__control': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][radioShade], amount.active),
				backgroundColor: lighten(theme.colors[color][radioShade], amount.active),
				background: lighten(theme.colors[color][radioShade], amount.active)
			}
		}
	};
};
