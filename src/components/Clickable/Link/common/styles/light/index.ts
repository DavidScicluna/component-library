import { darken } from 'color2k';

import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import { getAmount } from '../../utils';

import { LinkLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp }: LinkLightStylingProps): Style => {
	const amount = getAmount();

	const shade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],
		'textDecorationColor': theme.colors[color][shade],

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),

			'&:active': {
				color: darken(theme.colors[color][shade], amount.active)
			}
		},

		'&:active': {
			color: darken(theme.colors[color][shade], amount.active)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `2px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: 0
		}
	};
};
