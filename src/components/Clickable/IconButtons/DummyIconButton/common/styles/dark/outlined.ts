import { DummyIconButtonDarkStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

export default ({ theme }: DummyIconButtonDarkStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'darkest'
	});

	return {
		background: `${theme.colors.gray[shade]} !important`,
		backgroundColor: `${theme.colors.gray[shade]} !important`
	};
};
