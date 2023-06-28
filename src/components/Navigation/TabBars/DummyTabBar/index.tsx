import { createContext, forwardRef, ReactElement } from 'react';

import { Tabs } from '@chakra-ui/react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../common/default/props';
import { useProviderContext } from '../../../Provider/common/hooks';
import { activeTab as defaultActiveTab, size as defaultSize } from '../common/default/props';

import { DummyTabBarContext as DummyTabBarContextType, DummyTabBarProps, DummyTabBarRef } from './common/types';

export const DummyTabBarContext = createContext<DummyTabBarContextType>({
	activeTab: defaultActiveTab,
	color: defaultColor,
	colorMode: defaultColorMode,
	size: defaultSize
});

const DummyTabBar = forwardRef<DummyTabBarRef, DummyTabBarProps>(function DummyTabBar(props, ref): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		activeTab = defaultActiveTab,
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize,
		...rest
	} = props;

	return (
		<DummyTabBarContext.Provider
			value={{
				activeTab,
				color,
				colorMode,
				size
			}}
		>
			<Tabs
				{...rest}
				ref={ref}
				index={activeTab}
				isFitted
				isLazy={false}
				lazyBehavior='unmount'
				variant='unstyled'
			>
				{children}
			</Tabs>
		</DummyTabBarContext.Provider>
	);
});

export default DummyTabBar;
