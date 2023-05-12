import { lighten, transparentize } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { active, hover, placeholder, selection } from '../../../default/amount';

import { InputDarkGroupStyleProps } from './types';

export default ({ theme }: InputDarkGroupStyleProps): Style => {
	const textPrimaryShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const textSecondaryShade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	return {
		'color': theme.colors.gray[textPrimaryShade],
		'borderColor': theme.colors.gray[borderShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors.gray[textPrimaryShade], hover),
			'borderColor': lighten(theme.colors.gray[borderShade], hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: lighten(theme.colors.gray[textPrimaryShade], active),
				borderColor: lighten(theme.colors.gray[borderShade], active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: lighten(theme.colors.gray[textPrimaryShade], active),
				borderColor: lighten(theme.colors.gray[borderShade], active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: lighten(theme.colors.gray[textPrimaryShade], active),
			borderColor: lighten(theme.colors.gray[borderShade], active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: lighten(theme.colors.gray[textPrimaryShade], active),
			borderColor: lighten(theme.colors.gray[borderShade], active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& input::selection': {
			color: theme.colors.gray[textPrimaryShade],
			backgroundColor: transparentize(theme.colors.gray[backgroundShade], selection),
			background: transparentize(theme.colors.gray[backgroundShade], selection)
		},

		'& input::placeholder': {
			color: transparentize(theme.colors.gray[textSecondaryShade], placeholder)
		}
	};
};
