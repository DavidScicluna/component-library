import { FC } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { ProviderProps } from './types';

import theme from '../../theme';

const Provider: FC<ProviderProps> = ({ children }) => {
	console.log(theme);

	return (
		<ChakraProvider theme={theme} resetCSS>
			{children}
		</ChakraProvider>
	);
};

export default Provider;
