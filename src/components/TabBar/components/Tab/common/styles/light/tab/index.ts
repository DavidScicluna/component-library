import { darken } from 'color2k';

import { TabLightStylingProps } from './types';

import { Style } from '../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor }: TabLightStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({ type: 'color', colorMode: 'light' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': theme.colors[color][shade],

		'& svg, .ds-cl-icon': {
			color: theme.colors[color][shade]
		},

		'&:hover': {
			'background': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'borderColor': theme.colors.transparent,
			'color': darken(theme.colors[color][shade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors[color][shade], amount.hover)
			},

			'&:active': {
				'background': theme.colors.transparent,
				'backgroundColor': theme.colors.transparent,
				'borderColor': theme.colors.transparent,
				'color': darken(theme.colors[color][shade], amount.active),

				'& svg, .ds-cl-icon': {
					color: darken(theme.colors[color][shade], amount.active)
				}
			}
		},

		'&:active': {
			'background': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'borderColor': theme.colors.transparent,
			'color': darken(theme.colors[color][shade], amount.active),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors[color][shade], amount.active)
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `2px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? '4px' : 0
		}
	};
};
