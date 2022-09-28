import { getHue } from '../../../../../../../../../../common/utils/color';
import { Style } from '../../../../../../../../../../common/types';

import { DummyTabDarkStylingProps } from './types';

export default ({ theme }: DummyTabDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	return {
		color: theme.colors.gray[colorShade],
		borderColor: theme.colors.gray[borderShade],
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};
