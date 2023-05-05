import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { NoUndefinedField } from '../../../../common/types';
import { ProviderContext } from '../..';
import { ProviderContext as ProviderContextType } from '../types';

const useProviderContext = (): NoUndefinedField<ProviderContextType> => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<ProviderContextType>(ProviderContext);

	return { color, colorMode };
};

export default useProviderContext;
