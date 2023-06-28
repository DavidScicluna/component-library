import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../../../../common/utils/color';
import { getAmount, getSizeConfig } from '../../../utils';

import { DropdownButtonItemDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme }: DropdownButtonItemDarkStylingProps): Style => {
	const amount = getAmount();

	const primaryShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const secondaryShade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
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
			'borderColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'background': lighten(theme.colors.gray[backgroundShade], amount.hover),

			'&:active': {
				color: lighten(theme.colors.gray[primaryShade], amount.active),
				borderColor: lighten(theme.colors.gray[backgroundShade], amount.active),
				backgroundColor: lighten(theme.colors.gray[backgroundShade], amount.active),
				background: lighten(theme.colors.gray[backgroundShade], amount.active)
			}
		},

		'&:active': {
			color: lighten(theme.colors.gray[primaryShade], amount.active),
			borderColor: lighten(theme.colors.gray[backgroundShade], amount.active),
			backgroundColor: lighten(theme.colors.gray[backgroundShade], amount.active),
			background: lighten(theme.colors.gray[backgroundShade], amount.active)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[primaryShade]}` : 'none',
			outlineOffset: 0
		}
	};
};
