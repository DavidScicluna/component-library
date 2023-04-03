import { FC } from 'react';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { merge } from 'lodash';

import defaultTheme from '../../theme';
import TransitionsProvider from '../Transitions/TransitionsProvider';

import { ProviderProps } from './types';

const Provider: FC<ProviderProps> = ({ children, theme: themeProp }) => {
	const theme = merge(defaultTheme, themeProp);

	// TODO: Remove console.log
	console.log(theme);

	return (
		<ChakraProvider theme={theme} resetCSS>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<TransitionsProvider>{children}</TransitionsProvider>
		</ChakraProvider>
	);
};

export default Provider;
