import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/default/props';

import { RatingIconDarkActiveStyleProps } from './types';

export default ({ theme, color = defaultColor }: RatingIconDarkActiveStyleProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	return {
		color: `${theme.colors[color][colorShade]} !important`,
		borderColor: `${theme.colors.transparent} !important`,
		backgroundColor: `${theme.colors.transparent} !important`,
		background: `${theme.colors.transparent} !important`
	};
};
