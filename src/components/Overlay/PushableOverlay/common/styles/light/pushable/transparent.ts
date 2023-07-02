import { darken } from 'color2k';

import { active, hover } from '../../../../../../../common/default/amount';
import { color as defaultColor } from '../../../../../../../common/default/props';
import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { isFixed as defaultIsFixed, isPushable as defaultIsPushable } from '../../../default/props';
import { border, offset } from '../../../default/sizes';

import { PushableOverlayLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isFixed = defaultIsFixed,
	isPushable = defaultIsPushable
}: PushableOverlayLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: colorProp === 'black' ? 'darker' : colorProp === 'white' ? 'lighter' : 'color'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			content: '""',

			color: theme.colors[color][colorShade],
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover':
			isPushable && !isFixed
				? {
						'color': darken(theme.colors[color][colorShade], hover),

						'&::before': {
							content: '""',

							color: darken(theme.colors[color][colorShade], hover),
							borderColor: theme.colors.transparent,
							backgroundColor: theme.colors.transparent,
							background: theme.colors.transparent
						},

						'&:active': {
							'color': darken(theme.colors[color][colorShade], active),

							'&::before': {
								content: '""',

								color: darken(theme.colors[color][colorShade], active),
								borderColor: theme.colors.transparent,
								backgroundColor: theme.colors.transparent,
								background: theme.colors.transparent
							}
						}
				  }
				: {},

		'&:active':
			isPushable && !isFixed
				? {
						'color': darken(theme.colors[color][colorShade], active),

						'&::before': {
							content: '""',

							color: darken(theme.colors[color][colorShade], active),
							borderColor: theme.colors.transparent,
							backgroundColor: theme.colors.transparent,
							background: theme.colors.transparent
						}
				  }
				: {},

		'&:focus-visible':
			isPushable && !isFixed
				? {
						outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
						outlineOffset: !isTouchDevice ? `${offset}px` : 0
				  }
				: {}
	};
};
