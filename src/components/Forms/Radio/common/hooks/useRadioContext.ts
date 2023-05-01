import { useContext } from 'react';

import { NoUndefinedField } from '../../../../../common/types';
import { RadioContext } from '../..';
import { color as defaultColor, colorMode as defaultColorMode, size as defaultSize } from '../default/props';
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
