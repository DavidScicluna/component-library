import { color as defaultColor } from '../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';

import { ConfirmModalIconDarkStylingProps } from './types';

export default ({ theme, color = defaultColor }: ConfirmModalIconDarkStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	return {
		color: theme.colors[color][shade],
		borderColor: theme.colors[color][shade],
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};
