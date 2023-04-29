import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import { size as defaultSize } from '../../../common/default/props';
import { DummyIconButtonContext } from '../..';
import { DummyIconButtonContext as DummyIconButtonContextType } from '../types';

const useDummyIconButtonContext = (): NoUndefinedField<DummyIconButtonContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<DummyIconButtonContextType>(DummyIconButtonContext);

	return { color, colorMode, size };
};

export default useDummyIconButtonContext;
