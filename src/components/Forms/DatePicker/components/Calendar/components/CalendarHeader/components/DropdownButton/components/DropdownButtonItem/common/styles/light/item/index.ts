import { darken } from 'color2k';

import { Style } from '../../../../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../../../../common/utils/color';
import { getAmount, getSizeConfig } from '../../../utils';

import { DropdownButtonItemLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme }: DropdownButtonItemLightStylingProps): Style => {
	const amount = getAmount();

	const primaryShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const secondaryShade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const config = getSizeConfig();
	const { border } = config;

	return {
		'color': theme.colors.gray[secondaryShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': theme.colors.gray[primaryShade],
			'borderColor': darken(theme.colors.gray[backgroundShade], amount.hover),
			'backgroundColor': darken(theme.colors.gray[backgroundShade], amount.hover),
			'background': darken(theme.colors.gray[backgroundShade], amount.hover),

			'&:active': {
				color: darken(theme.colors.gray[primaryShade], amount.active),
				borderColor: darken(theme.colors.gray[backgroundShade], amount.active),
				backgroundColor: darken(theme.colors.gray[backgroundShade], amount.active),
				background: darken(theme.colors.gray[backgroundShade], amount.active)
			}
		},

		'&:active': {
			color: darken(theme.colors.gray[primaryShade], amount.active),
			borderColor: darken(theme.colors.gray[backgroundShade], amount.active),
			backgroundColor: darken(theme.colors.gray[backgroundShade], amount.active),
			background: darken(theme.colors.gray[backgroundShade], amount.active)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[primaryShade]}` : 'none',
			outlineOffset: 0
		}
	};
};
