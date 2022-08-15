import { Style, utils } from '@davidscicluna/component-library';

import { lighten } from 'color2k';

import { getAmount } from '../../utils';
import { status as defaultStatus } from '../../../components/Step/common/data/defaultPropValues';
import { getStatusColor } from '../../../components/Step/common/utils';
import { color as defaultColor } from '../../../../../../../common/data/defaultPropValues';

import { StepDarkStylingProps } from './types';

const { getHue } = utils;

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
