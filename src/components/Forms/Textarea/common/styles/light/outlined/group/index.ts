import { darken, transparentize } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { getAmount } from '../../../../utils';

import { TextareaLightOutlinedGroupStyleProps } from './types';

export default ({ theme }: TextareaLightOutlinedGroupStyleProps): Style => {
	const amount = getAmount();

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
			'color': darken(theme.colors.gray[textPrimaryShade], amount.hover),
			'borderColor': darken(theme.colors.gray[borderShade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: darken(theme.colors.gray[textPrimaryShade], amount.active),
				borderColor: darken(theme.colors.gray[borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: darken(theme.colors.gray[textPrimaryShade], amount.active),
				borderColor: darken(theme.colors.gray[borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: darken(theme.colors.gray[textPrimaryShade], amount.active),
			borderColor: darken(theme.colors.gray[borderShade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: darken(theme.colors.gray[textPrimaryShade], amount.active),
			borderColor: darken(theme.colors.gray[borderShade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& textarea::selection': {
			color: theme.colors.gray[textPrimaryShade],
			backgroundColor: transparentize(theme.colors.gray[backgroundShade], amount.selection),
			background: transparentize(theme.colors.gray[backgroundShade], amount.selection)
		},

		'& textarea::placeholder': {
			color: transparentize(theme.colors.gray[textSecondaryShade], amount.placeholder)
		}
	};
};
