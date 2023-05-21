import { createContext, FC, useState } from 'react';

import { ChakraProvider, ColorModeScript as CUIColorModeScript, useConst } from '@chakra-ui/react';

import { merge } from 'lodash-es';

import { color as defaultColor, colorMode as defaultColorMode } from '../../common/default/props';
import { AppColorMode } from '../../common/types';
import defaultTheme from '../../theme';
import { Theme } from '../../theme/types';
import TransitionsProvider from '../Transitions/TransitionsProvider';

import { ProviderContext as ProviderContextType, ProviderProps } from './common/types';
import ColorModeScript from './components/ColorModeScript';
import ColorScript from './components/ColorScript';

export const ProviderContext = createContext<ProviderContextType>({
	color: defaultColor,
	colorMode: defaultColorMode
});

const Provider: FC<ProviderProps> = (props) => {
	const { children, color = defaultColor, colorMode: initialColorMode = defaultColorMode, theme: themeProp } = props;

	const theme = useConst<Theme>(merge(defaultTheme, themeProp) as Theme);

	const [colorMode, setColorMode] = useState<AppColorMode>(defaultColorMode);

	// TODO: Remove console.log
	console.log(theme);

	return (
		<ChakraProvider theme={theme} resetCSS>
			<CUIColorModeScript type='cookie' initialColorMode={initialColorMode} />
			<TransitionsProvider>
				<ColorScript initialColor={color} />
				<ColorModeScript
					initialColorMode={initialColorMode}
					onSetColorMode={(colorMode) => setColorMode(colorMode)}
				/>
				<ProviderContext.Provider value={{ color, colorMode }}>{children}</ProviderContext.Provider>
			</TransitionsProvider>
		</ChakraProvider>
	);
};

export default Provider;
