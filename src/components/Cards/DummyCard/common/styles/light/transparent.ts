import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { color as defaultColor, isLight as defaultIsLight } from '../../../../common/data/defaultPropValues';
import { CardColor } from '../../../../common/types';

import { DummyCardLightStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLight = defaultIsLight
}: DummyCardLightStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? isLight
					? 'divider'
					: 'text.secondary'
				: isLight
				? 'divider'
				: 'color'
	});

	const color: CardColor = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

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
