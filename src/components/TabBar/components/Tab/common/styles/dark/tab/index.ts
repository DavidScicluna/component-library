import { lighten } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { handleHue, handleIsTouchDevice } from '../../../../../../../../common/utils';
import { Color, Theme } from '../../../../../../../../theme/types';
import { handleAmount } from '../../../utils';

const isTouchDevice: boolean = handleIsTouchDevice();

export default (theme: Theme, colorProp: Color): Style => {
	const amount = handleAmount();
	const shade = handleHue('dark', colorProp);

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'& svg, .ds-cl-icon, ': {
			'color': theme.colors[color][shade],

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
				outlineOffset: !isTouchDevice ? '4px' : 0
			}
		}
	};
};
