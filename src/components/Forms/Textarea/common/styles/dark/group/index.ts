import { lighten, transparentize } from 'color2k';

import { InputGroupDarkStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = defaultSize }: InputGroupDarkStyleProps): Style => {
	const amount = getAmount();
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

	const config = getSizeConfig({ size });
	const border = config.border;
	const offset = config.offset;

	return {
		'color': theme.colors.gray[textPrimaryShade],
		'borderColor': theme.colors.gray[borderShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors.gray[textPrimaryShade], amount.hover),
			'borderColor': lighten(theme.colors.gray[borderShade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: lighten(theme.colors.gray[textPrimaryShade], amount.active),
				borderColor: lighten(theme.colors.gray[borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: lighten(theme.colors.gray[textPrimaryShade], amount.active),
				borderColor: lighten(theme.colors.gray[borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: lighten(theme.colors.gray[textPrimaryShade], amount.active),
			borderColor: lighten(theme.colors.gray[borderShade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: lighten(theme.colors.gray[textPrimaryShade], amount.active),
			borderColor: lighten(theme.colors.gray[borderShade], amount.active),
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
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[borderShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
