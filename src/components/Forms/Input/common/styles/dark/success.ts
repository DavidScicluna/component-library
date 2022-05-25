import { lighten, transparentize } from 'color2k';

import { InputDarkStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { getAmount } from '../../utils';

export default ({ theme }: InputDarkStyleProps): Style => {
	const amount = getAmount();
	const selectionShade = getHue({
		colorMode: 'dark',
		type: 'black'
	});
	const shade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	return {
		'color': theme.colors.green[shade],
		'borderColor': theme.colors.green[shade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors.green[shade], amount.hover),
			'borderColor': lighten(theme.colors.green[shade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: lighten(theme.colors.green[shade], amount.active),
				borderColor: lighten(theme.colors.green[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: lighten(theme.colors.green[shade], amount.active),
				borderColor: lighten(theme.colors.green[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: lighten(theme.colors.green[shade], amount.active),
			borderColor: lighten(theme.colors.green[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: lighten(theme.colors.green[shade], amount.active),
			borderColor: lighten(theme.colors.green[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& input::selection': {
			color: theme.colors.gray[selectionShade],
			backgroundColor: transparentize(theme.colors.green[shade], amount.selection),
			background: transparentize(theme.colors.green[shade], amount.selection)
		},

		'& input::placeholder': {
			color: transparentize(theme.colors.green[shade], amount.placeholder)
		}
	};
};
