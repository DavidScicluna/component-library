import { darken, transparentize } from 'color2k';

import { TextareaGroupDarkStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = defaultSize }: TextareaGroupDarkStyleProps): Style => {
	const amount = getAmount();
	const textShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const offset = config.offset;

	return {
		'color': theme.colors.gray[textShade],
		'borderColor': theme.colors.gray[borderShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			// 'color': darken(theme.colors[color][shade], amount.hover),
			'color': theme.colors.gray[textShade],
			'borderColor': darken(theme.colors.gray[borderShade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				// color: darken(theme.colors[color][shade], amount.active),
				color: theme.colors.gray[textShade],
				borderColor: darken(theme.colors.gray[borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				// color: darken(theme.colors[color][shade], amount.active),
				color: theme.colors.gray[textShade],
				borderColor: darken(theme.colors.gray[borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			// color: darken(theme.colors[color][shade], amount.active),
			color: theme.colors.gray[textShade],
			borderColor: darken(theme.colors.gray[borderShade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			// color: darken(theme.colors[color][shade], amount.active),
			color: theme.colors.gray[textShade],
			borderColor: darken(theme.colors.gray[borderShade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& > textarea::selection': {
			color: theme.colors.gray[borderShade],
			backgroundColor: transparentize(theme.colors.gray[borderShade], 0.75),
			background: transparentize(theme.colors.gray[borderShade], 0.75)
		},

		'& > textarea::placeholder': {
			color: transparentize(theme.colors.gray[borderShade], 0.5)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[borderShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
