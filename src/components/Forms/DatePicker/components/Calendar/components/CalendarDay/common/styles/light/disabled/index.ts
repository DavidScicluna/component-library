import { Style } from '../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../common/utils/color';

import { CalendarDayLightDisabledStylingProps } from './types';

export default ({ theme }: CalendarDayLightDisabledStylingProps): Style => {
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
