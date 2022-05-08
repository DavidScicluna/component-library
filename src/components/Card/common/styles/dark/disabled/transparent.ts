import { CardDarkDisabledStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import { color as defaultColor } from '../../../data/defaultPropValues';

export default ({ theme, color: colorProp = defaultColor }: CardDarkDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type:
			colorProp === 'black' || colorProp === 'white'
				? colorProp
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': `${theme.colors[color][shade]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors.transparent} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
