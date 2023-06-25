import { lighten } from 'color2k';

import { active, hover } from '../../../../../../../../../../../common/default/amount';
import { color as defaultColor } from '../../../../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../../../../theme/types';
import { offset } from '../../../../../../../../common/default/sizes';
import { isSelected as defaultIsSelected } from '../../default/props';

import { DummyTabDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isSelected = defaultIsSelected
}: DummyTabDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: isSelected ? 'color' : 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	const color: Color = isSelected ? colorProp : 'gray';

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors[color][colorShade], hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: lighten(theme.colors[color][colorShade], active),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: lighten(theme.colors[color][colorShade], active),
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${offset}px auto ${theme.colors[color][borderShade]}` : 'none',
			outlineOffset: 0
		}
	};
};
