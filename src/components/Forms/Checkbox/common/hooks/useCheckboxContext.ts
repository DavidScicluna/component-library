import { useContext } from 'react';

import { CheckboxContext } from '../..';
import { NoUndefinedField } from '../../../../../common/types';
import { CheckboxContext as CheckboxContextType } from '../../types';
import { color as defaultColor, colorMode as defaultColorMode, size as defaultSize } from '../data/defaultPropValues';

const useCheckboxContext = (): NoUndefinedField<CheckboxContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<CheckboxContextType>(CheckboxContext);

	return { color, colorMode, size };
};

export default useCheckboxContext;
