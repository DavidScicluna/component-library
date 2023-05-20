import { useContext } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnChange
} from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { ColorSwitcherContext } from '../..';
import { colors as defaultColors } from '../default/props';
import { ColorSwitcherContext as ColorSwitcherContextType } from '../types';

const useColorSwitcherContext = (): NoUndefinedField<ColorSwitcherContextType> => {
	const {
		color = defaultColor,
		colors = defaultColors,
		colorMode = defaultColorMode,
		onChange = defaultOnChange
	} = useContext<ColorSwitcherContextType>(ColorSwitcherContext);

	return { color, colors, colorMode, onChange };
};

export default useColorSwitcherContext;
