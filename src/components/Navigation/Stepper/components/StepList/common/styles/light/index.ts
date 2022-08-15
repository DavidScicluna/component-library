import { darken } from 'color2k';

import { getAmount } from '../../utils';
import { status as defaultStatus } from '../../../components/Step/common/data/defaultPropValues';
import { getStatusColor } from '../../../components/Step/common/utils';
import { color as defaultColor } from '../../../../../common/data/defaultPropValues';
import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';

import { StepLightStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor, status = defaultStatus }: StepLightStylingProps): Style => {
	const amount = getAmount();
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: status === 'idle' ? 'divider' : 'color'
	});

	const color = getStatusColor({ status, color: colorProp });

	return {
		'borderColor': theme.colors[color][borderShade],
		'backgroundColor': theme.colors[color][backgroundShade],
		'background': theme.colors[color][backgroundShade],

		'&:hover': {
			'borderColor': darken(theme.colors[color][borderShade], amount.hover),
			'backgroundColor': darken(theme.colors[color][backgroundShade], amount.hover),
			'background': darken(theme.colors[color][backgroundShade], amount.hover),

			'&:active': {
				borderColor: darken(theme.colors[color][borderShade], amount.active),
				backgroundColor: darken(theme.colors[color][backgroundShade], amount.active),
				background: darken(theme.colors[color][backgroundShade], amount.active)
			}
		},

		'&:active': {
			borderColor: darken(theme.colors[color][borderShade], amount.active),
			backgroundColor: darken(theme.colors[color][backgroundShade], amount.active),
			background: darken(theme.colors[color][backgroundShade], amount.active)
		}
	};
};
