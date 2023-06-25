import { lighten } from 'color2k';

import { active, hover } from '../../../../../../../common/default/amount';
import { color as defaultColor } from '../../../../../../../common/default/props';
import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { isFixed as defaultIsFixed, isPushable as defaultIsPushable } from '../../../default/props';
import { border, offset } from '../../../default/sizes';

import { PushableOverlayDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isFixed = defaultIsFixed,
	isPushable = defaultIsPushable
}: PushableOverlayDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: colorProp === 'black' ? 'darker' : colorProp === 'white' ? 'lighter' : 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			content: '""',

			color: theme.colors[color][colorShade],
			borderColor: theme.colors.gray[backgroundShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade]
		},

		'&:hover':
			isPushable && !isFixed
				? {
						'color': lighten(theme.colors[color][colorShade], hover),

						'&::before': {
							content: '""',

							color: lighten(theme.colors[color][colorShade], hover),
							borderColor: theme.colors.gray[backgroundShade],
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade]
						},

						'&:active': {
							'color': lighten(theme.colors[color][colorShade], active),

							'&::before': {
								content: '""',

								color: lighten(theme.colors[color][colorShade], active),
								borderColor: theme.colors.gray[backgroundShade],
								backgroundColor: theme.colors.gray[backgroundShade],
								background: theme.colors.gray[backgroundShade]
							}
						}
				  }
				: {},

		'&:active':
			isPushable && !isFixed
				? {
						'color': lighten(theme.colors[color][colorShade], active),

						'&::before': {
							content: '""',

							color: lighten(theme.colors[color][colorShade], active),
							borderColor: theme.colors.gray[backgroundShade],
							backgroundColor: theme.colors.gray[backgroundShade],
							background: theme.colors.gray[backgroundShade]
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
