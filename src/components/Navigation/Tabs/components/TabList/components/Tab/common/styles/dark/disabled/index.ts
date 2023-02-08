import { Style } from '../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../common/utils/color';

import { TabDarkDisabledStylingProps } from './types';

export default ({ theme }: TabDarkDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	return {
		color: `${theme.colors.gray[colorShade]} !important`,
		borderColor: `${theme.colors.gray[borderShade]} !important`,
		backgroundColor: `${theme.colors.transparent} !important`,
		background: `${theme.colors.transparent} !important`
	};
};
