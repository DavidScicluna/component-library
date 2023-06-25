import { darken, transparentize } from 'color2k';

import { active, hover, placeholder, selection } from '../../../../../../../common/default/amount';
import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

import { InputLightGroupStyleProps } from './types';

export default ({ theme }: InputLightGroupStyleProps): Style => {
	const textPrimaryShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const textSecondaryShade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'color'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});

	return {
		'color': theme.colors.gray[textPrimaryShade],
		'borderColor': theme.colors.gray[borderShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors.gray[textPrimaryShade], hover),
			'borderColor': darken(theme.colors.gray[borderShade], hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: darken(theme.colors.gray[textPrimaryShade], active),
				borderColor: darken(theme.colors.gray[borderShade], active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: darken(theme.colors.gray[textPrimaryShade], active),
				borderColor: darken(theme.colors.gray[borderShade], active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: darken(theme.colors.gray[textPrimaryShade], active),
			borderColor: darken(theme.colors.gray[borderShade], active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: darken(theme.colors.gray[textPrimaryShade], active),
			borderColor: darken(theme.colors.gray[borderShade], active),
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
