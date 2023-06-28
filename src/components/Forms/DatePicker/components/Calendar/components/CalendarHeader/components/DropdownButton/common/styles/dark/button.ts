import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../common/utils/color';
import { getAmount, getSizeConfig } from '../../utils';

import { DropdownButtonDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme }: DropdownButtonDarkStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	const config = getSizeConfig();
	const { border } = config;
	const { offset } = config;

	return {
		'color': theme.colors.gray[colorShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': theme.colors.gray[colorShade],
			'borderColor': lighten(theme.colors.gray[borderShade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors.gray[borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: theme.colors.gray[colorShade],
			borderColor: lighten(theme.colors.gray[borderShade], amount.active),
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
