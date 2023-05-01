import { color as defaultColor } from '../../../../../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../../../../../theme/types';
import { isSelected as defaultIsSelected } from '../../../default/props';

import { TabLightActiveStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isSelected = defaultIsSelected
}: TabLightActiveStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: isSelected ? 'color' : 'text.secondary'
	});

	const color: Color = isSelected ? colorProp : 'gray';

	return {
		color: theme.colors[color][colorShade],
		borderColor: theme.colors.transparent,
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};
