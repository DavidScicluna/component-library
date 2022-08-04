
import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { color as defaultColor, isLight as defaultIsLight } from '../../../../common/data/defaultPropValues';
import { CardColor } from '../../../../common/types';

import { DummyCardDarkStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLight = defaultIsLight
}: DummyCardDarkStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: isLight ? 'divider' : 'text.secondary'
	});

	const color: CardColor = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		color: `${theme.colors[color][shade]} !important`,
		borderColor: `${theme.colors[color][shade]} !important`,
		backgroundColor: `${theme.colors.gray[900]} !important`,
		background: `${theme.colors.gray[900]} !important`
	};
};
