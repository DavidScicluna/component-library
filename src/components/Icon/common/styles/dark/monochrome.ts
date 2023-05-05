import { Style } from '../../../../../common/types';
import { getHue } from '../../../../../common/utils/color';

import { IconDarkStylingProps } from './types';

export default ({ theme }: IconDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	return {
		color: theme.colors.gray[colorShade],
		borderColor: theme.colors.gray[borderShade],
		backgroundColor: theme.colors.gray[backgroundShade],
		background: theme.colors.gray[backgroundShade]
	};
};
