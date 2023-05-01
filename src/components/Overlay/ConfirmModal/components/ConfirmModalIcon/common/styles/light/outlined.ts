import { color as defaultColor } from '../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';

import { ConfirmModalIconLightStylingProps } from './types';

export default ({ theme, color = defaultColor }: ConfirmModalIconLightStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	return {
		color: theme.colors[color][shade],
		borderColor: theme.colors[color][shade],
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};
