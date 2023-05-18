import { createContext, forwardRef, ReactElement } from 'react';

import { Tabs as CUITabs } from '@chakra-ui/react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnChange
} from '../../../../common/default/props';
import { useProviderContext } from '../../../Provider/common/hooks';
import {
	activeTab as defaultActiveTab,
	isDisabled as defaultIsDisabled,
	size as defaultSize
} from '../common/default/props';

import { TabBarContext as TabBarContextType, TabBarProps, TabBarRef } from './common/types';

export const TabBarContext = createContext<TabBarContextType>({
	activeTab: defaultActiveTab,
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	onChange: defaultOnChange,
	size: defaultSize
});

const TabBar = forwardRef<TabBarRef, TabBarProps>(function TabBar(props, ref): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		onChange,
		size = defaultSize,
		...rest
	} = props;

	return (
		<TabBarContext.Provider value={{ activeTab, color, colorMode, isDisabled, onChange, size }}>
			<CUITabs
				{...rest}
				ref={ref}
				index={activeTab}
				isFitted
				isLazy={false}
				lazyBehavior='unmount'
				variant='unstyled'
			>
				{children}
			</CUITabs>
		</TabBarContext.Provider>
	);
});

export default TabBar;
