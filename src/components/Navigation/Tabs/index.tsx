import { ReactElement, createContext, forwardRef } from 'react';

import { useColorMode, Tabs as CUITabs } from '@chakra-ui/react';

import { TabsContext as TabsContextType, TabsRef, TabsProps } from './types';
import {
	activeTab as defaultActiveTab,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFitted as defaultIsFitted,
	isLazy as defaultIsLazy,
	lazyBehavior as defaultLazyBehavior,
	size as defaultSize
} from './common/data/defaultPropValues';

export const TabsContext = createContext<TabsContextType>({
	activeTab: defaultActiveTab,
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isFitted: defaultIsFitted,
	onChange: () => undefined,
	size: defaultSize
});

const Tabs = forwardRef<TabsRef, TabsProps>(function Tabs(props, ref): ReactElement {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = colorModeHook,
		isDisabled = defaultIsDisabled,
		isFitted = defaultIsFitted,
		isLazy = defaultIsLazy,
		lazyBehavior = defaultLazyBehavior,
		onChange,
		size = defaultSize,
		...rest
	} = props;

	return (
		<TabsContext.Provider value={{ activeTab, color, colorMode, isDisabled, isFitted, onChange, size }}>
			<CUITabs
				{...rest}
				ref={ref}
				index={activeTab}
				isFitted={isFitted}
				isLazy={isLazy}
				lazyBehavior={lazyBehavior}
				variant='unstyled'
			>
				{children}
			</CUITabs>
		</TabsContext.Provider>
	);
});

export default Tabs;
