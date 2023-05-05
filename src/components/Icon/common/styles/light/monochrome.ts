import { Style } from '../../../../../common/types';
import { getHue } from '../../../../../common/utils/color';

import { IconLightStylingProps } from './types';

export default ({ theme }: IconLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	return {
		color: theme.colors.gray[colorShade],
		borderColor: theme.colors.gray[borderShade],
		backgroundColor: theme.colors.gray[backgroundShade],
		background: theme.colors.gray[backgroundShade]
	};
};
