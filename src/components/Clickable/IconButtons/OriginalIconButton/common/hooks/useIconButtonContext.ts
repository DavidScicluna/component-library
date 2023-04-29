import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import { size as defaultSize } from '../../../common/default/props';
import { IconButtonContext } from '../..';
import { IconButtonContext as IconButtonContextType } from '../types';

const useIconButtonContext = (): NoUndefinedField<IconButtonContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize
	} = useContext<IconButtonContextType>(IconButtonContext);

	return { color, colorMode, size };
};

export default useIconButtonContext;
