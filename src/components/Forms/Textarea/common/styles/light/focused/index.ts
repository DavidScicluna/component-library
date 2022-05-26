import { darken, transparentize } from 'color2k';

import { TextareaLightFocusedStyleProps } from './types';

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
}: TextareaLightFocusedStyleProps): Style => {
	const amount = getAmount();
	const selectionShade = getHue({
		colorMode: 'light',
		type: 'black'
	});
	const shade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : colorProp;

	return {
		'color': theme.colors[color][shade],
		'borderColor': theme.colors[color][shade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),
			'borderColor': darken(theme.colors[color][shade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: darken(theme.colors[color][shade], amount.active),
				borderColor: darken(theme.colors[color][shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: darken(theme.colors[color][shade], amount.active),
				borderColor: darken(theme.colors[color][shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: darken(theme.colors[color][shade], amount.active),
			borderColor: darken(theme.colors[color][shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: darken(theme.colors[color][shade], amount.active),
			borderColor: darken(theme.colors[color][shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& textarea::selection': {
			color: theme.colors.gray[selectionShade],
			backgroundColor: transparentize(theme.colors[color][shade], amount.selection),
			background: transparentize(theme.colors[color][shade], amount.selection)
		},

		'& textarea::placeholder': {
			color: transparentize(theme.colors[color][shade], amount.placeholder)
		}
	};
};
