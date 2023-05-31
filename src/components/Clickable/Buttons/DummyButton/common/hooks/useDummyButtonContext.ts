import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import { size as defaultSize } from '../../../common/default/props';
import { DummyButtonContext } from '../..';
import { DummyButtonContext as DummyButtonContextType } from '../types';

const useDummyButtonContext = (): NoUndefinedField<DummyButtonContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<DummyButtonContextType>(DummyButtonContext);

	return { color, colorMode, size };
};

export default useDummyButtonContext;
