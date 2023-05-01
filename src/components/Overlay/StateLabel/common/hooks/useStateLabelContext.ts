import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { StateLabelContext } from '../..';
import { StateLabelContext as StateLabelContextType } from '../types';

const useStateLabelContext = (): NoUndefinedField<StateLabelContextType> => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<StateLabelContextType>(StateLabelContext);

	return { color, colorMode };
};

export default useStateLabelContext;
