import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { RadioContext } from '../..';
import { size as defaultSize } from '../default/props';
import { RadioContext as RadioContextType } from '../types';

const useRadioContext = (): NoUndefinedField<RadioContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<RadioContextType>(RadioContext);

	return { color, colorMode, size };
};

export default useRadioContext;
