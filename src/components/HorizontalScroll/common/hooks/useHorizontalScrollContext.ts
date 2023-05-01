import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { NoUndefinedField } from '../../../../common/types';
import { HorizontalScrollContext } from '../..';
import { isDisabled as defaultIsDisabled } from '../default/props';
import { HorizontalScrollContext as HorizontalScrollContextType } from '../types';

const useHorizontalScrollContext = (): NoUndefinedField<HorizontalScrollContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled
	} = useContext<HorizontalScrollContextType>(HorizontalScrollContext);

	return { color, colorMode, isDisabled };
};

export default useHorizontalScrollContext;
