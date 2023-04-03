import { useContext } from 'react';

import { RadioContext } from '../..';
import { NoUndefinedField } from '../../../../../common/types';
import { RadioContext as RadioContextType } from '../../types';
import { color as defaultColor, colorMode as defaultColorMode, size as defaultSize } from '../data/defaultPropValues';

const useRadioContext = (): NoUndefinedField<RadioContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<RadioContextType>(RadioContext);

	return { color, colorMode, size };
};

export default useRadioContext;
