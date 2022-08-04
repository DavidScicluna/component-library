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

import { TextareaDarkFocusedStyleProps } from './types';

export default ({
	theme,
	color: colorProp,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: TextareaDarkFocusedStyleProps): Style => {
	const amount = getAmount();
	const selectionShade = getHue({
		colorMode: 'dark',
		type: 'darkest'
	});
	const shade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : colorProp;

	return {
		'color': theme.colors[color][shade],
		'borderColor': theme.colors[color][shade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors[color][shade], amount.hover),
			'borderColor': lighten(theme.colors[color][shade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: lighten(theme.colors[color][shade], amount.active),
				borderColor: lighten(theme.colors[color][shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: lighten(theme.colors[color][shade], amount.active),
				borderColor: lighten(theme.colors[color][shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: lighten(theme.colors[color][shade], amount.active),
			borderColor: lighten(theme.colors[color][shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: lighten(theme.colors[color][shade], amount.active),
			borderColor: lighten(theme.colors[color][shade], amount.active),
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
