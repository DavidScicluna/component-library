import { color as defaultColor } from '../../../../../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../../../../../theme/types';
import { isSelected as defaultIsSelected } from '../../../default/props';

import { TabDarkActiveStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isSelected = defaultIsSelected
}: TabDarkActiveStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
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
