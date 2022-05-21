import { darken, transparentize } from 'color2k';

import { InputDarkWarningStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = defaultSize }: InputDarkWarningStyleProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'dark',
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

		'& > input::selection': {
			color: theme.colors.yellow[shade],
			backgroundColor: transparentize(theme.colors.yellow[shade], 0.75),
			background: transparentize(theme.colors.yellow[shade], 0.75)
		},

		'& > input::placeholder': {
			color: transparentize(theme.colors.yellow[shade], 0.5)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.yellow[shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
