import { useContext } from 'react';

import { StateLabelContext } from '../..';
import {} from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { StateLabelContext as StateLabelContextType } from '../../types';
import { color as defaultColor, colorMode as defaultColorMode } from '../default/props';

const useStateLabelContext = (): NoUndefinedField<StateLabelContextType> => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<StateLabelContextType>(StateLabelContext);

	return { color, colorMode };
};

export default useStateLabelContext;
