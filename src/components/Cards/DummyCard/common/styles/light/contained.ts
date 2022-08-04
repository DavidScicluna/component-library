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
		color: `${theme.colors.gray[50]} !important`,
		borderColor: `${theme.colors[color][shade]} !important`,
		backgroundColor: `${theme.colors[color][shade]} !important`,
		background: `${theme.colors[color][shade]} !important`
	};
};
