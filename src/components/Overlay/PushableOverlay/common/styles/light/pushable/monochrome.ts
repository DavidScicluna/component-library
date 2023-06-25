import { darken } from 'color2k';

import { active, hover } from '../../../../../../../common/default/amount';
import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { isFixed as defaultIsFixed, isPushable as defaultIsPushable } from '../../../default/props';
import { border, offset, transform } from '../../../default/sizes';

import { PushableOverlayLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	isFixed = defaultIsFixed,
	isPushable = defaultIsPushable
}: PushableOverlayLightStylingProps): Style => {
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

	return {
		'color': theme.colors.gray[colorShade],

		'&::before': {
			content: '""',

			color: theme.colors.gray[colorShade],
			borderColor: theme.colors.gray[borderShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade],
			boxShadow: isPushable ? `0 ${transform.default}px 0 0 ${theme.colors.gray[borderShade]}` : 'none'
		},

		'&:hover':
			isPushable && !isFixed
				? {
						'color': darken(theme.colors.gray[colorShade], hover),

						'&::before': {
							content: '""',

							color: darken(theme.colors.gray[colorShade], hover),
							borderColor: darken(theme.colors.gray[borderShade], hover),
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade],
							boxShadow: `0 ${transform.hover}px 0 0 ${darken(theme.colors.gray[borderShade], hover)}`
						},

						'&:active': {
							'color': darken(theme.colors.gray[colorShade], active),

							'&::before': {
								content: '""',

								color: darken(theme.colors.gray[colorShade], active),
								borderColor: darken(theme.colors.gray[borderShade], active),
								backgroundColor: theme.colors.gray[backgroundShade],
								background: theme.colors.gray[backgroundShade],
								boxShadow: `0 ${transform.active}px 0 0 ${darken(
									theme.colors.gray[borderShade],
									active
								)}`
							}
						}
				  }
				: {},

		'&:active':
			isPushable && !isFixed
				? {
						'color': darken(theme.colors.gray[colorShade], active),

						'&::before': {
							content: '""',

							color: darken(theme.colors.gray[colorShade], active),
							borderColor: darken(theme.colors.gray[borderShade], active),
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade],
							boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors.gray[borderShade], active)}`
						}
				  }
				: {},

		'&:focus-visible':
			isPushable && !isFixed
				? {
						outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[borderShade]}` : 'none',
						outlineOffset: !isTouchDevice ? `${offset}px` : 0
				  }
				: {}
	};
};
