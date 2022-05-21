import { darken, transparentize } from 'color2k';

import { TextareaLightInvalidStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = defaultSize }: TextareaLightInvalidStyleProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const offset = config.offset;

	return {
		'color': theme.colors.red[shade],
		'borderColor': theme.colors.red[shade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors.red[shade], amount.hover),
			'borderColor': darken(theme.colors.red[shade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: darken(theme.colors.red[shade], amount.active),
				borderColor: darken(theme.colors.red[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: darken(theme.colors.red[shade], amount.active),
				borderColor: darken(theme.colors.red[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: darken(theme.colors.red[shade], amount.active),
			borderColor: darken(theme.colors.red[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: darken(theme.colors.red[shade], amount.active),
			borderColor: darken(theme.colors.red[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& > textarea::selection': {
			color: theme.colors.red[shade],
			backgroundColor: transparentize(theme.colors.red[shade], 0.75),
			background: transparentize(theme.colors.red[shade], 0.75)
		},

		'& > textarea::placeholder': {
			color: transparentize(theme.colors.red[shade], 0.5)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.red[shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
