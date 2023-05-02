import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active, hover } from '../../../default/amount';
import {
	color as defaultColor,
	isFixed as defaultIsFixed,
	isPushable as defaultIsPushable
} from '../../../default/props';
import { border, offset, transform } from '../../../default/sizes';

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
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			content: '""',

			color: theme.colors[color][colorShade],
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade],
			boxShadow: isPushable ? `0 ${transform.default}px 0 0 ${theme.colors[color][colorShade]}` : 'none'
		},

		'&:hover':
			isPushable && !isFixed
				? {
						'color': darken(theme.colors[color][colorShade], hover),

						'&::before': {
							content: '""',

							color: darken(theme.colors[color][colorShade], hover),
							borderColor: darken(theme.colors[color][colorShade], hover),
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade],
							boxShadow: `0 ${transform.hover}px 0 0 ${darken(theme.colors[color][colorShade], hover)}`
						},

						'&:active': {
							'color': darken(theme.colors[color][colorShade], active),

							'&::before': {
								content: '""',

								color: darken(theme.colors[color][colorShade], active),
								borderColor: darken(theme.colors[color][colorShade], active),
								backgroundColor: theme.colors.gray[backgroundShade],
								background: theme.colors.gray[backgroundShade],
								boxShadow: `0 ${transform.active}px 0 0 ${darken(
									theme.colors[color][colorShade],
									active
								)}`
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
							borderColor: darken(theme.colors[color][colorShade], active),
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade],
							boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors[color][colorShade], active)}`
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
