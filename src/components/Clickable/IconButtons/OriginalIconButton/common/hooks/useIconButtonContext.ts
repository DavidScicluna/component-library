import { useContext } from 'react';

import { NoUndefinedField } from '../../../../../../common/types';
import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/data/defaultPropValues';
import { IconButtonContext } from '../..';
import { IconButtonContext as IconButtonContextType } from '../../types';

const useIconButtonContext = (): NoUndefinedField<IconButtonContextType> => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<IconButtonContextType>(IconButtonContext);

	return { color, colorMode };
};

export default useIconButtonContext;
