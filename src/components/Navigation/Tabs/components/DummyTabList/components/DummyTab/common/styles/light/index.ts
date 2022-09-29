import { getHue } from '../../../../../../../../../../common/utils/color';
import { Style } from '../../../../../../../../../../common/types';
import { color as defaultColor } from '../../../../../../../common/data/defaultPropValues';
import { isSelected as defaultIsSelected } from '../../data/defaultPropValues';
import { Color } from '../../../../../../../../../../theme/types';

import { DummyTabLightStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isSelected = defaultIsSelected
}: DummyTabLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: isSelected ? 'color' : 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'light',
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
