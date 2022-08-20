import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../data/defaultPropValues';

import { ConfirmModalIconDarkStylingProps } from './types';

export default ({ theme, color = defaultColor }: ConfirmModalIconDarkStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	return {
		color: theme.colors[color][shade],
		borderColor: theme.colors.transparent,
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};
