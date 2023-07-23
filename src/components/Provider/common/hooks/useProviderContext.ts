import { useContext } from 'react';

import { __DEFAULT_APP_COLOR__, __DEFAULT_APP_COLORMODE__ } from '@common/constants';
import { NoUndefinedField } from '@common/types';

import { ProviderContext } from '@components/Provider/Provider';

import { ProviderContext as ProviderContextType } from '../types';

const useProviderContext = (): NoUndefinedField<ProviderContextType> => {
	const { color = __DEFAULT_APP_COLOR__, colorMode = __DEFAULT_APP_COLORMODE__ } =
		useContext<ProviderContextType>(ProviderContext);

	return { color, colorMode };
};

export default useProviderContext;
