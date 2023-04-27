import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { active, hover } from '../../../default/amount';
import { border, offset, transform } from '../../../default/sizes';

import { PushableOverlayDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme }: PushableOverlayDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
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
			boxShadow: `0 ${transform.default}px 0 0 ${theme.colors.gray[borderShade]}`
		},

		'&:hover': {
			'color': theme.colors.gray[colorShade],

			'&::before': {
				content: '""',

				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors.gray[borderShade], hover),
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade],
				boxShadow: `0 ${transform.hover}px 0 0 ${lighten(theme.colors.gray[borderShade], hover)}`
			},

			'&:active': {
				'color': theme.colors.gray[colorShade],

				'&::before': {
					content: '""',

					color: theme.colors.gray[colorShade],
					borderColor: lighten(theme.colors.gray[borderShade], active),
					backgroundColor: theme.colors.gray[backgroundShade],
					background: theme.colors.gray[backgroundShade],
					boxShadow: `0 ${transform.active}px 0 0 ${lighten(theme.colors.gray[borderShade], active)}`
				}
			}
		},

		'&:active': {
			'color': theme.colors.gray[colorShade],

			'&::before': {
				content: '""',

				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors.gray[borderShade], active),
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade],
				boxShadow: `0 ${transform.active}px 0 0 ${lighten(theme.colors.gray[borderShade], active)}`
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[borderShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
