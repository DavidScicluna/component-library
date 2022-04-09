import React, { ReactElement } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { ProviderProps } from './types';

import theme from '../../theme';

const Provider = ({ children }: ProviderProps): ReactElement => {
	return (
		<ChakraProvider theme={theme} resetCSS>
			{children}
		</ChakraProvider>
	);
};

export default Provider;
