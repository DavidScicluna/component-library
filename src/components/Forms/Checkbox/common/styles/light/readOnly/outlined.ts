import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { isChecked as defaultIsChecked } from '../../../default/props';

import { CheckboxLightReadOnlyStyleProps } from './types';

export default ({ theme, isChecked = defaultIsChecked }: CheckboxLightReadOnlyStyleProps): Style => {
	const colorShade = getHue({
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
		'color': `${theme.colors.gray[colorShade]} !important`,
		'borderColor': `${theme.colors.gray[borderShade]} !important`,
		'backgroundColor': `${theme.colors.gray[backgroundShade]} !important`,
		'background': `${theme.colors.gray[backgroundShade]} !important`,

		'& .chakra-checkbox': {
			color: `${theme.colors.gray[colorShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`,
			background: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`
		},

		'& .chakra-checkbox__control': {
			color: `${theme.colors.gray[colorShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`,
			background: `${isChecked ? theme.colors.gray[borderShade] : theme.colors.transparent} !important`
		}
	};
};
