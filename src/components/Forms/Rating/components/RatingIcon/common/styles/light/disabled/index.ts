import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';

import { RatingIconLightDisabledStyleProps } from './types';

export default ({ theme }: RatingIconLightDisabledStyleProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	return {
		color: `${theme.colors.gray[colorShade]} !important`,
		borderColor: `${theme.colors.transparent} !important`,
		backgroundColor: `${theme.colors.transparent} !important`,
		background: `${theme.colors.transparent} !important`
	};
};
