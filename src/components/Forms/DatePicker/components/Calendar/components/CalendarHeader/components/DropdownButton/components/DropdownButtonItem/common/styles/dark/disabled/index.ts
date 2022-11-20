import { Style } from '../../../../../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../../../../../common/utils/color';

import { DropdownButtonItemDarkDisabledStylingProps } from './types';

export default ({ theme }: DropdownButtonItemDarkDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});

	return {
		color: `${theme.colors.gray[shade]} !important`,
		borderColor: `${theme.colors.transparent} !important`,
		backgroundColor: `${theme.colors.transparent} !important`,
		background: `${theme.colors.transparent} !important`
	};
};
