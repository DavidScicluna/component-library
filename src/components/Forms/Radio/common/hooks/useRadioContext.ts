import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { size as defaultSize } from '../../../FormControl/common/default/props';
import { RadioContext } from '../..';
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
