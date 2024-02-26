import { useContext } from 'react';

import type { DeepRequired } from 'utility-types';

import { DEFAULT_APP_COLOR, DEFAULT_APP_COLORMODE } from '@common/constants';

import { ProviderContext } from '@components/Provider/Provider';

import type { ProviderContext as ProviderContextType } from '../types';

const useProviderContext = (): DeepRequired<ProviderContextType> => {
	const { color = DEFAULT_APP_COLOR, colorMode = DEFAULT_APP_COLORMODE } =
		useContext<ProviderContextType>(ProviderContext);

	return { color, colorMode };
};

export default useProviderContext;
