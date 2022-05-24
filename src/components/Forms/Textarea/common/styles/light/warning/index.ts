import { darken, transparentize } from 'color2k';

import { InputLightWarningStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = defaultSize }: InputLightWarningStyleProps): Style => {
	const amount = getAmount();
	const selectionShade = getHue({
		colorMode: 'light',
		type: 'white'
	});
	const shade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const offset = config.offset;

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

		'& textarea::selection': {
			color: theme.colors.gray[selectionShade],
			backgroundColor: transparentize(theme.colors.yellow[shade], amount.selection),
			background: transparentize(theme.colors.yellow[shade], amount.selection)
		},

		'& textarea::placeholder': {
			color: transparentize(theme.colors.yellow[shade], amount.placeholder)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.yellow[shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
