import { DummyCardDarkStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { color as defaultColor, isLight as defaultIsLight } from '../../../../common/data/defaultPropValues';
import { CardColor } from '../../../../common/types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLight = defaultIsLight
}: DummyCardDarkStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
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
		color: `${theme.colors.gray[900]} !important`,
		borderColor: `${theme.colors[color][shade]} !important`,
		backgroundColor: `${theme.colors[color][shade]} !important`,
		background: `${theme.colors[color][shade]} !important`
	};
};
