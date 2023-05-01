import { createContext, forwardRef, ReactElement } from 'react';

import { Tabs as CUIDummyTabs } from '@chakra-ui/react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { useProviderContext } from '../../../../common/hooks';
import {
	activeTab as defaultActiveTab,
	isFitted as defaultIsFitted,
	size as defaultSize
} from '../common/default/props';

import { DummyTabsContext as DummyTabsContextType, DummyTabsProps, DummyTabsRef } from './common/types';

export const DummyTabsContext = createContext<DummyTabsContextType>({
	activeTab: defaultActiveTab,
	color: defaultColor,
	colorMode: defaultColorMode,
	isFitted: defaultIsFitted,
	size: defaultSize
});

const DummyTabs = forwardRef<DummyTabsRef, DummyTabsProps>(function DummyTabs(props, ref): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		isFitted = defaultIsFitted,
		size = defaultSize,
		...rest
	} = props;

	return (
		<DummyTabsContext.Provider value={{ activeTab, color, colorMode, isFitted, size }}>
			<CUIDummyTabs
				{...rest}
				ref={ref}
				index={activeTab}
				isFitted={isFitted}
				isLazy={false}
				lazyBehavior='unmount'
				variant='unstyled'
			>
				{children}
			</CUIDummyTabs>
		</DummyTabsContext.Provider>
	);
});

export default DummyTabs;
