import { getHue } from '../../../../../../../../../../../common/utils/color';
import { Style } from '../../../../../../../../../../../common/types';

import { TabLightDisabledStylingProps } from './types';

export default ({ theme }: TabLightDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});

	return {
		color: `${theme.colors.gray[colorShade]} !important`,
		borderColor: `${theme.colors.gray[borderShade]} !important`,
		backgroundColor: `${theme.colors.transparent} !important`,
		background: `${theme.colors.transparent} !important`
	};
};
