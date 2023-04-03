import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

import { DummyButtonLightStylingProps } from './types';

export default ({ theme }: DummyButtonLightStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'lightest'
	});

	return {
		background: `${theme.colors.gray[shade]} !important`,
		backgroundColor: `${theme.colors.gray[shade]} !important`
	};
};
