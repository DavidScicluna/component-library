import { darken, transparentize } from 'color2k';

import { InputLightStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { getAmount } from '../../utils';

export default ({ theme }: InputLightStyleProps): Style => {
	const amount = getAmount();
	const selectionShade = getHue({
		colorMode: 'light',
		type: 'black'
	});
	const shade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	return {
		'color': theme.colors.yellow[shade],
		'borderColor': theme.colors.yellow[shade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors.yellow[shade], amount.hover),
			'borderColor': darken(theme.colors.yellow[shade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: darken(theme.colors.yellow[shade], amount.active),
				borderColor: darken(theme.colors.yellow[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: darken(theme.colors.yellow[shade], amount.active),
				borderColor: darken(theme.colors.yellow[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: darken(theme.colors.yellow[shade], amount.active),
			borderColor: darken(theme.colors.yellow[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: darken(theme.colors.yellow[shade], amount.active),
			borderColor: darken(theme.colors.yellow[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& input::selection': {
			color: theme.colors.gray[selectionShade],
			backgroundColor: transparentize(theme.colors.yellow[shade], amount.selection),
			background: transparentize(theme.colors.yellow[shade], amount.selection)
		},

		'& input::placeholder': {
			color: transparentize(theme.colors.yellow[shade], amount.placeholder)
		}
	};
};
