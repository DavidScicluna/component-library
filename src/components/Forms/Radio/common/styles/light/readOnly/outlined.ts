import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { isChecked as defaultIsChecked } from '../../../data/defaultPropValues';

import { RadioLightReadOnlyStyleProps } from './types';

export default ({ theme, isChecked = defaultIsChecked }: RadioLightReadOnlyStyleProps): Style => {
	const textShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'light'
	});

	return {
		'color': `${theme.colors.gray[textShade]} !important`,
		'borderColor': `${theme.colors.gray[borderShade]} !important`,
		'backgroundColor': `${theme.colors.gray[backgroundShade]} !important`,
		'background': `${theme.colors.gray[backgroundShade]} !important`,

		'& .chakra-radio': {
			color: `${theme.colors.gray[textShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`,
			background: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`
		},

		'& .chakra-radio__control': {
			color: `${theme.colors.gray[textShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`,
			background: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`
		}
	};
};
