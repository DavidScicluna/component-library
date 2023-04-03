import { Style } from '../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../../../theme/types';
import { color as defaultColor } from '../../../../../../../common/data/defaultPropValues';
import { isSelected as defaultIsSelected } from '../../data/defaultPropValues';

import { DummyTabDarkStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isSelected = defaultIsSelected
}: DummyTabDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: isSelected ? 'color' : 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: isSelected ? 'color' : 'divider'
	});

	const color: Color = isSelected ? colorProp : 'gray';

	return {
		color: theme.colors[color][colorShade],
		borderColor: theme.colors[color][borderShade],
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};
