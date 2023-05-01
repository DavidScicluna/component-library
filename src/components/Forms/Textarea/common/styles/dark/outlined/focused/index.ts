import { lighten, transparentize } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../../default/props';
import { getAmount } from '../../../../utils';

import { TextareaDarkOutlinedFocusedStyleProps } from './types';

export default ({
	theme,
	color: colorProp,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: TextareaDarkOutlinedFocusedStyleProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const selectionShade = getHue({
		colorMode: 'dark',
		type: 'darkest'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : colorProp;

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors[color][colorShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors[color][colorShade], amount.hover),
			'borderColor': lighten(theme.colors[color][colorShade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: lighten(theme.colors[color][colorShade], amount.active),
				borderColor: lighten(theme.colors[color][colorShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: lighten(theme.colors[color][colorShade], amount.active),
				borderColor: lighten(theme.colors[color][colorShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: lighten(theme.colors[color][colorShade], amount.active),
			borderColor: lighten(theme.colors[color][colorShade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: lighten(theme.colors[color][colorShade], amount.active),
			borderColor: lighten(theme.colors[color][colorShade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& textarea::selection': {
			color: theme.colors.gray[selectionShade],
			backgroundColor: transparentize(theme.colors[color][colorShade], amount.selection),
			background: transparentize(theme.colors[color][colorShade], amount.selection)
		},

		'& textarea::placeholder': {
			color: transparentize(theme.colors[color][colorShade], amount.placeholder)
		}
	};
};
