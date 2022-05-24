import { lighten, transparentize } from 'color2k';

import { InputDarkSuccessStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = defaultSize }: InputDarkSuccessStyleProps): Style => {
	const amount = getAmount();
	const selectionShade = getHue({
		colorMode: 'dark',
		type: 'black'
	});
	const shade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	const config = getSizeConfig({ size });
	const border = config.border;
	const offset = config.offset;

	return {
		'color': theme.colors.green[shade],
		'borderColor': theme.colors.green[shade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors.green[shade], amount.hover),
			'borderColor': lighten(theme.colors.green[shade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: lighten(theme.colors.green[shade], amount.active),
				borderColor: lighten(theme.colors.green[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: lighten(theme.colors.green[shade], amount.active),
				borderColor: lighten(theme.colors.green[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: lighten(theme.colors.green[shade], amount.active),
			borderColor: lighten(theme.colors.green[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: lighten(theme.colors.green[shade], amount.active),
			borderColor: lighten(theme.colors.green[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& textarea::selection': {
			color: theme.colors.gray[selectionShade],
			backgroundColor: transparentize(theme.colors.green[shade], amount.selection),
			background: transparentize(theme.colors.green[shade], amount.selection)
		},

		'& textarea::placeholder': {
			color: transparentize(theme.colors.green[shade], amount.placeholder)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.green[shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
