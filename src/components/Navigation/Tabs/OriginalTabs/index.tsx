import { createContext, forwardRef, ReactElement } from 'react';

import { Tabs as CUITabs } from '@chakra-ui/react';

import { method as defaultOnChange } from '../../../../common/default/props';
import { useProviderContext } from '../../../../common/hooks';
import {
	activeTab as defaultActiveTab,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../common/default/props';

import { TabsContext as TabsContextType, TabsProps, TabsRef } from './common/types';

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
	const { colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
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
