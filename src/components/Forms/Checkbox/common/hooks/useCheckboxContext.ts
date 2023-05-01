import { useContext } from 'react';

import { NoUndefinedField } from '../../../../../common/types';
import { CheckboxContext } from '../..';
import { color as defaultColor, colorMode as defaultColorMode, size as defaultSize } from '../default/props';
import { CheckboxContext as CheckboxContextType } from '../types';

const useCheckboxContext = (): NoUndefinedField<CheckboxContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<CheckboxContextType>(CheckboxContext);

	return { color, colorMode, size };
};

export default useCheckboxContext;
