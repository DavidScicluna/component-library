import { useContext } from 'react';

import type { DeepRequired } from 'utility-types';

import { __DEFAULT_APP_COLOR__, __DEFAULT_APP_COLORMODE__ } from '@common/constants';

import { ProviderContext } from '@components/Provider/Provider';

import type { ProviderContext as ProviderContextType } from '../types';

const useProviderContext = (): DeepRequired<ProviderContextType> => {
	const { color = __DEFAULT_APP_COLOR__, colorMode = __DEFAULT_APP_COLORMODE__ } =
		useContext<ProviderContextType>(ProviderContext);

	return { color, colorMode };
};

export default useProviderContext;
