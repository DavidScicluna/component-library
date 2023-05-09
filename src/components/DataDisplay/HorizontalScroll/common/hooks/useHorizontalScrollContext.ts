import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { HorizontalScrollContext } from '../..';
import {
	arrowsWidth as defaultArrowsWidth,
	isDisabled as defaultIsDisabled,
	spacing as defaultSpacing
} from '../default/props';
import { HorizontalScrollContext as HorizontalScrollContextType } from '../types';

const useHorizontalScrollContext = (): NoUndefinedField<HorizontalScrollContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		arrowsWidth = defaultArrowsWidth,
		isDisabled = defaultIsDisabled,
		spacing = defaultSpacing
	} = useContext<HorizontalScrollContextType>(HorizontalScrollContext);

	return { color, colorMode, arrowsWidth, isDisabled, spacing };
};

export default useHorizontalScrollContext;
