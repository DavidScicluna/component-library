import { Style } from '../../../../../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../../../../../common/utils/color';

import { DropdownButtonItemLightDisabledStylingProps } from './types';

export default ({ theme }: DropdownButtonItemLightDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	return {
		color: `${theme.colors.gray[shade]} !important`,
		borderColor: `${theme.colors.transparent} !important`,
		backgroundColor: `${theme.colors.transparent} !important`,
		background: `${theme.colors.transparent} !important`
	};
};
