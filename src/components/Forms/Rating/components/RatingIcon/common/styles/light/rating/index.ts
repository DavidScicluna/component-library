import { darken } from 'color2k';

import { color as defaultColor } from '../../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../../../../common/default/props';
import { isHovering as defaultIsHovering } from '../../../default/props';
import { getAmount } from '../../../utils';

import { RatingIconLightStyleProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isError = defaultIsError,
	isHovering = defaultIsHovering,
	isWarning = defaultIsWarning,
	isSuccess = defaultIsSuccess
}: RatingIconLightStyleProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type: isError || isHovering || isSuccess || isWarning ? 'color' : 'text.secondary'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : isHovering ? colorProp : 'gray';

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors[color][colorShade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: darken(theme.colors[color][colorShade], amount.active),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: darken(theme.colors[color][colorShade], amount.active),
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		}
	};
};
