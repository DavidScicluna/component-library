import { useContext } from 'react';

import { HorizontalScrollContext } from '../..';
import { NoUndefinedField } from '../../../../common/types';
import { HorizontalScrollContext as HorizontalScrollContextType } from '../../types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled
} from '../data/defaultPropValues';

const useHorizontalScrollContext = (): NoUndefinedField<HorizontalScrollContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled
	} = useContext<HorizontalScrollContextType>(HorizontalScrollContext);

	return { color, colorMode, isDisabled };
};

export default useHorizontalScrollContext;
