import { ReactElement, createContext, forwardRef } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isDrawer as defaultIsDrawer,
	mode as defaultMode
} from './common/data/defaultPropValues';
import { SideNavigationContext as SideNavigationContextType, SideNavigationRef, SideNavigationProps } from './types';

export const SideNavigationContext = createContext<SideNavigationContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	mode: defaultMode
});

const SideNavigation = forwardRef<SideNavigationRef, SideNavigationProps>(function SideNavigation(
	props,
	ref
): ReactElement {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		color = defaultColor,
		colorMode = colorModeHook,
		isDrawer = defaultIsDrawer,
		mode = defaultMode,
		...rest
	} = props;

	return (
		<SideNavigationContext.Provider value={{ color, colorMode, isDrawer, mode: isDrawer ? 'expanded' : mode }}>
			<VStack {...rest} ref={ref} width='100%' alignItems='stretch' justifyContent='stretch'>
				{children}
			</VStack>
		</SideNavigationContext.Provider>
	);
});

export default SideNavigation;
