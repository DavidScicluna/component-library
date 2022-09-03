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

import { RadioDarkGroupStyleProps } from './types';

export default ({
	theme,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: RadioDarkGroupStyleProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: isError || isSuccess || isWarning ? 'color' : 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'light'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : 'gray';

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'& .chakra-radio__control': {
			color: theme.colors.transparent,
			borderColor: theme.colors[color][borderShade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'color': lighten(theme.colors[color][colorShade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.5),
			'background': transparentize(theme.colors[color][backgroundShade], 0.5),

			'& .chakra-radio__control': {
				color: theme.colors.transparent,
				borderColor: lighten(theme.colors[color][borderShade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'color': lighten(theme.colors[color][colorShade], amount.active),
				'borderColor': theme.colors.transparent,
				'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
				'background': transparentize(theme.colors[color][backgroundShade], 0.25),

				'& .chakra-radio__control': {
					color: theme.colors.transparent,
					borderColor: lighten(theme.colors[color][borderShade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		},

		'&:active': {
			'color': lighten(theme.colors[color][colorShade], amount.active),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
			'background': transparentize(theme.colors[color][backgroundShade], 0.25),

			'& .chakra-radio__control': {
				color: theme.colors.transparent,
				borderColor: lighten(theme.colors[color][borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		}
	};
};
