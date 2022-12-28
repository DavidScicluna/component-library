import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../../theme/types';
import { getAmount } from '../../../utils';
import {
	color as defaultColor,
	isError as defaultIsError,
	isWarning as defaultIsWarning,
	isSuccess as defaultIsSuccess
} from '../../../../../../common/data/defaultPropValues';
import { isHovering as defaultIsHovering } from '../../../data/defaultPropValues';

import { RatingIconDarkStyleProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isError = defaultIsError,
	isHovering = defaultIsHovering,
	isWarning = defaultIsWarning,
	isSuccess = defaultIsSuccess
}: RatingIconDarkStyleProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: isError || isHovering || isSuccess || isWarning ? 'color' : 'text.secondary'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : isHovering ? colorProp : 'gray';

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors[color][colorShade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: lighten(theme.colors[color][colorShade], amount.active),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: lighten(theme.colors[color][colorShade], amount.active),
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		}
	};
};
