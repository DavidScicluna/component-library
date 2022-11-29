import { useContext } from 'react';

import { DummyCardContext } from '../..';
import { DummyCardContext as DummyCardContextType } from '../../types';
import { NoUndefinedField } from '../../../../../common/types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLight as defaultIsLight,
	spacing as defaultSpacing
} from '../../../common/data/defaultPropValues';

const useDummyCardContext = (): NoUndefinedField<DummyCardContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isLight = defaultIsLight,
		spacing = defaultSpacing
	} = useContext<DummyCardContextType>(DummyCardContext);

	return { color, colorMode, isLight, spacing };
};

export default useDummyCardContext;
