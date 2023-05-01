import { lighten } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../common/default/props';
import { status as defaultStatus } from '../../../components/Step/common/default/props';
import { getStatusColor } from '../../../components/Step/common/utils';
import { getAmount } from '../../utils';

import { StepDarkStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor, status = defaultStatus }: StepDarkStylingProps): Style => {
	const amount = getAmount();
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: status === 'idle' ? 'divider' : 'color'
	});

	const color = getStatusColor({ status, color: colorProp });

	return {
		'borderColor': theme.colors[color][borderShade],
		'backgroundColor': theme.colors.gray[backgroundShade],
		'background': theme.colors.gray[backgroundShade],

		'&:hover': {
			'borderColor': lighten(theme.colors[color][borderShade], amount.hover),
			'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'background': lighten(theme.colors.gray[backgroundShade], amount.hover),

			'&:active': {
				borderColor: lighten(theme.colors[color][borderShade], amount.active),
				backgroundColor: lighten(theme.colors.gray[backgroundShade], amount.active),
				background: lighten(theme.colors.gray[backgroundShade], amount.active)
			}
		},

		'&:active': {
			borderColor: lighten(theme.colors[color][borderShade], amount.active),
			backgroundColor: lighten(theme.colors.gray[backgroundShade], amount.active),
			background: lighten(theme.colors.gray[backgroundShade], amount.active)
		}
	};
};
