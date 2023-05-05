import { createContext, FC } from 'react';

import { ChakraProvider, ColorModeScript, useColorMode, useConst } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { color as defaultColor, colorMode as defaultColorMode } from '../../common/default/props';
import defaultTheme from '../../theme';
import { Theme } from '../../theme/types';
import TransitionsProvider from '../Transitions/TransitionsProvider';

import { ProviderContext as ProviderContextType, ProviderProps } from './common/types';

export const ProviderContext = createContext<ProviderContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const Provider: FC<ProviderProps> = (props) => {
	// TODO: Maybe place day/light colormode cycle directly here and pass down to ProviderContext
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const { children, color = defaultColor, colorMode = colorModeHook, theme: themeProp } = props;

	const theme = useConst<Theme>(merge(defaultTheme, themeProp) as Theme);

	// TODO: Remove console.log
	console.log(theme);

	return (
		<ChakraProvider theme={theme} resetCSS>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<TransitionsProvider>
				<ProviderContext.Provider value={{ color, colorMode }}>{children}</ProviderContext.Provider>
			</TransitionsProvider>
		</ChakraProvider>
	);
};

export default Provider;
