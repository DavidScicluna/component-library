import { ReactElement, createContext, forwardRef } from 'react';

import { useColorMode, Tabs as CUITabs } from '@chakra-ui/react';

import { method as defaultOnChange } from '../../../common/data/defaultPropValues';

import { TabsContext as TabsContextType, TabsRef, TabsProps } from './types';
import {
	activeTab as defaultActiveTab,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFitted as defaultIsFitted,
	size as defaultSize
} from './common/data/defaultPropValues';

export const TabsContext = createContext<TabsContextType>({
	activeTab: defaultActiveTab,
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isFitted: defaultIsFitted,
	onChange: defaultOnChange,
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
				isLazy={false}
				lazyBehavior='unmount'
				variant='unstyled'
			>
				{children}
			</CUITabs>
		</TabsContext.Provider>
	);
});

export default Tabs;
