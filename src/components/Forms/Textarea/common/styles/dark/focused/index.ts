import { lighten, transparentize } from 'color2k';

import { color as defaultColor } from '../../../../../../../common/default/props';
import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../../../FormControl/common/default/props';
import { active, hover, placeholder, selection } from '../../../default/amount';

import { TextareaDarkFocusedStyleProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: TextareaDarkFocusedStyleProps): Style => {
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
			'color': lighten(theme.colors[color][colorShade], hover),
			'borderColor': lighten(theme.colors[color][colorShade], hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: lighten(theme.colors[color][colorShade], active),
				borderColor: lighten(theme.colors[color][colorShade], active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: lighten(theme.colors[color][colorShade], active),
				borderColor: lighten(theme.colors[color][colorShade], active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: lighten(theme.colors[color][colorShade], active),
			borderColor: lighten(theme.colors[color][colorShade], active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: lighten(theme.colors[color][colorShade], active),
			borderColor: lighten(theme.colors[color][colorShade], active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& textarea::selection': {
			color: theme.colors.gray[selectionShade],
			backgroundColor: transparentize(theme.colors[color][colorShade], selection),
			background: transparentize(theme.colors[color][colorShade], selection)
		},

		'& textarea::placeholder': {
			color: transparentize(theme.colors[color][colorShade], placeholder)
		}
	};
};
