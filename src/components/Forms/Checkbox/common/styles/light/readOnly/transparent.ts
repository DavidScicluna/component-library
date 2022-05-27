import { CheckboxLightReadOnlyStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { isChecked as defaultIsChecked } from '../../../data/defaultPropValues';

export default ({ theme, isChecked = defaultIsChecked }: CheckboxLightReadOnlyStyleProps): Style => {
	const textShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});

	return {
		'color': `${theme.colors.gray[textShade]} !important`,
		'borderColor': `${theme.colors.transparent} !important`,
		'backgroundColor': `${theme.colors.transparent} !important`,
		'background': `${theme.colors.transparent} !important`,

		'& .chakra-checkbox': {
			color: `${theme.colors.gray[textShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`,
			background: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`
		},

		'& .chakra-checkbox__control': {
			color: `${theme.colors.gray[textShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`,
			background: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`
		}
	};
};
