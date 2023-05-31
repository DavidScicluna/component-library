import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import { size as defaultSize } from '../../../common/default/props';
import { ButtonContext } from '../..';
import { ButtonContext as ButtonContextType } from '../types';

const useButtonContext = (): NoUndefinedField<ButtonContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<ButtonContextType>(ButtonContext);

	return { color, colorMode, size };
};

export default useButtonContext;
