import { getHue } from '../../../../../../../../../../common/utils/color';
import { Style } from '../../../../../../../../../../common/types';

import { DummyTabLightStylingProps } from './types';

export default ({ theme }: DummyTabLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});

	return {
		color: theme.colors.gray[colorShade],
		borderColor: theme.colors.gray[borderShade],
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};
