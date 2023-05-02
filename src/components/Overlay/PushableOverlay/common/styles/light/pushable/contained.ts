import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active, back, hover } from '../../../default/amount';
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
		type: colorProp === 'black' ? 'lightest' : colorProp === 'white' ? 'darkest' : 'background'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: colorProp === 'black' ? 'darker' : colorProp === 'white' ? 'lighter' : 'color'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors.gray[colorShade],

		'&::before': {
			content: '""',

			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][backgroundShade],
			backgroundColor: theme.colors[color][backgroundShade],
			background: theme.colors[color][backgroundShade],
			boxShadow: isPushable
				? `0 ${transform.default}px 0 0 ${darken(theme.colors[color][backgroundShade], back)}`
				: 'none'
		},

		'&:hover':
			isPushable && !isFixed
				? {
						'color': theme.colors.gray[colorShade],

						'&::before': {
							content: '""',

							color: theme.colors.gray[colorShade],
							borderColor: darken(theme.colors[color][backgroundShade], hover),
							backgroundColor: darken(theme.colors[color][backgroundShade], hover),
							background: darken(theme.colors[color][backgroundShade], hover),
							boxShadow: `0 ${transform.hover}px 0 0 ${darken(
								theme.colors[color][backgroundShade],
								back
							)}`
						},

						'&:active': {
							'color': theme.colors.gray[colorShade],

							'&::before': {
								content: '""',

								color: theme.colors.gray[colorShade],
								borderColor: darken(theme.colors[color][backgroundShade], active),
								backgroundColor: darken(theme.colors[color][backgroundShade], active),
								background: darken(theme.colors[color][backgroundShade], active),
								boxShadow: `0 ${transform.active}px 0 0 ${darken(
									theme.colors[color][backgroundShade],
									back
								)}`
							}
						}
				  }
				: {},

		'&:active':
			isPushable && !isFixed
				? {
						'color': theme.colors.gray[colorShade],

						'&::before': {
							content: '""',

							color: theme.colors.gray[colorShade],
							borderColor: darken(theme.colors[color][backgroundShade], active),
							backgroundColor: darken(theme.colors[color][backgroundShade], active),
							background: darken(theme.colors[color][backgroundShade], active),
							boxShadow: `0 ${transform.active}px 0 0 ${darken(
								theme.colors[color][backgroundShade],
								back
							)}`
						}
				  }
				: {},

		'&:focus-visible':
			isPushable && !isFixed
				? {
						outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][backgroundShade]}` : 'none',
						outlineOffset: !isTouchDevice ? `${offset}px` : 0
				  }
				: {}
	};
};
