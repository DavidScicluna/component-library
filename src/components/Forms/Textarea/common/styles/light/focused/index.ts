import { darken, transparentize } from 'color2k';

import { TextareaLightFocusedStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color, size = defaultSize }: TextareaLightFocusedStyleProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const offset = config.offset;

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

		'& > textarea::selection': {
			color: theme.colors[color][shade],
			backgroundColor: transparentize(theme.colors[color][shade], 0.75),
			background: transparentize(theme.colors[color][shade], 0.75)
		},

		'& > textarea::placeholder': {
			color: transparentize(theme.colors[color][shade], 0.5)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
