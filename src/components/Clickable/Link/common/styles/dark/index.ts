import { lighten } from 'color2k';

import { LinkDarkStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import { getAmount } from '../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp }: LinkDarkStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'dark',
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
			'color': lighten(theme.colors[color][shade], amount.hover),

			'&:active': {
				color: lighten(theme.colors[color][shade], amount.active)
			}
		},

		'&:active': {
			color: lighten(theme.colors[color][shade], amount.active)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `2px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: 0
		}
	};
};
