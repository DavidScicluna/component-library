import { useContext } from 'react';

import { ProviderContext } from '../../components/Provider';
import { ProviderContext as ProviderContextType } from '../../components/Provider/types';
import { color as defaultColor, colorMode as defaultColorMode } from '../default/props';
import { NoUndefinedField } from '../types';

const useProviderContext = (): NoUndefinedField<ProviderContextType> => {
	const { color = defaultColor, colorMode = defaultColorMode } = useContext<ProviderContextType>(ProviderContext);

	return { color, colorMode };
};

export default useProviderContext;
