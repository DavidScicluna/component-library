import { TextareaLightDisabledStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

export default ({ theme }: TextareaLightDisabledStyleProps): Style => {
	const textShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});

	return {
		color: `${theme.colors.gray[textShade]} !important`,
		borderColor: `${theme.colors.gray[borderShade]} !important`,
		backgroundColor: `${theme.colors.transparent} !important`,
		background: `${theme.colors.transparent} !important`
	};
};
