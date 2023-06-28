import { darken } from 'color2k';

import { Style } from '../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../common/utils/color';
import { getAmount, getSizeConfig } from '../../utils';

import { DropdownButtonLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme }: DropdownButtonLightStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
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
			'borderColor': darken(theme.colors.gray[borderShade], amount.hover),
			'backgroundColor': darken(theme.colors.gray[backgroundShade], amount.hover),
			'background': darken(theme.colors.gray[backgroundShade], amount.hover),

			'&:active': {
				color: theme.colors.gray[colorShade],
				borderColor: darken(theme.colors.gray[borderShade], amount.active),
				backgroundColor: darken(theme.colors.gray[backgroundShade], amount.active),
				background: darken(theme.colors.gray[backgroundShade], amount.active)
			}
		},

		'&:active': {
			color: theme.colors.gray[colorShade],
			borderColor: darken(theme.colors.gray[borderShade], amount.active),
			backgroundColor: darken(theme.colors.gray[backgroundShade], amount.active),
			background: darken(theme.colors.gray[backgroundShade], amount.active)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
