import { useContext } from 'react';

import { NoUndefinedField } from '../../../../common/types';
import { HorizontalScrollContext } from '../..';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled
} from '../default/props';
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
