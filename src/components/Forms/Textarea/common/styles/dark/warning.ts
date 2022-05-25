import { lighten, transparentize } from 'color2k';

import { TextareaDarkStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { getAmount } from '../../utils';

export default ({ theme }: TextareaDarkStyleProps): Style => {
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
		'color': theme.colors.yellow[shade],
		'borderColor': theme.colors.yellow[shade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors.yellow[shade], amount.hover),
			'borderColor': lighten(theme.colors.yellow[shade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: lighten(theme.colors.yellow[shade], amount.active),
				borderColor: lighten(theme.colors.yellow[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: lighten(theme.colors.yellow[shade], amount.active),
				borderColor: lighten(theme.colors.yellow[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: lighten(theme.colors.yellow[shade], amount.active),
			borderColor: lighten(theme.colors.yellow[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: lighten(theme.colors.yellow[shade], amount.active),
			borderColor: lighten(theme.colors.yellow[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& textarea::selection': {
			color: theme.colors.gray[selectionShade],
			backgroundColor: transparentize(theme.colors.yellow[shade], amount.selection),
			background: transparentize(theme.colors.yellow[shade], amount.selection)
		},

		'& textarea::placeholder': {
			color: transparentize(theme.colors.yellow[shade], amount.placeholder)
		}
	};
};
