import { darken, transparentize } from 'color2k';

import { TextareaDarkSuccessStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = defaultSize }: TextareaDarkSuccessStyleProps): Style => {
	const amount = getAmount();
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
			'color': darken(theme.colors.green[shade], amount.hover),
			'borderColor': darken(theme.colors.green[shade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:focus': {
				color: darken(theme.colors.green[shade], amount.active),
				borderColor: darken(theme.colors.green[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				color: darken(theme.colors.green[shade], amount.active),
				borderColor: darken(theme.colors.green[shade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus': {
			color: darken(theme.colors.green[shade], amount.active),
			borderColor: darken(theme.colors.green[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:active': {
			color: darken(theme.colors.green[shade], amount.active),
			borderColor: darken(theme.colors.green[shade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& > textarea::selection': {
			color: theme.colors.green[shade],
			backgroundColor: transparentize(theme.colors.green[shade], 0.75),
			background: transparentize(theme.colors.green[shade], 0.75)
		},

		'& > textarea::placeholder': {
			color: transparentize(theme.colors.green[shade], 0.5)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.green[shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
