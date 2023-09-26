import type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef,
	DummyTabListContext,
	DummyTabListProps,
	DummyTabListRef,
	DummyTabListRenderProps,
	DummyTabPanelProps,
	DummyTabPanelsProps,
	DummyTabPanelsRef,
	DummyTabProps,
	DummyTabRef,
	DummyTabRenderProps,
	DummyTabsAlign,
	DummyTabsContext,
	DummyTabsOrientation,
	DummyTabsProps,
	DummyTabsRef,
	DummyTabsSize
} from './components/DummyTabs';
import {
	constants as dummyTabsConstants,
	DummyTab,
	DummyTabIcon,
	DummyTabList,
	DummyTabPanels,
	DummyTabs,
	keys as dummyTabsKeys,
	useDummyTabClasses,
	useDummyTabsContext,
	useDummyTabsDummyTabFontSize,
	useDummyTabSizeConfig,
	utils as dummyTabsUtils
} from './components/DummyTabs';
import type {
	TabDefaultElement,
	TabElement,
	TabIconDefaultElement,
	TabIconElement,
	TabIconProps,
	TabIconRef,
	TabListContext,
	TabListProps,
	TabListRef,
	TabListRenderProps,
	TabMouseEvent,
	TabPanelProps,
	TabPanelsProps,
	TabPanelsRef,
	TabProps,
	TabRef,
	TabRenderProps,
	TabsAlign,
	TabsContext,
	TabsOrientation,
	TabsProps,
	TabsRef,
	TabsSize
} from './components/Tabs';
import {
	constants as tabsConstants,
	keys as tabsKeys,
	Tab,
	TabIcon,
	TabList,
	TabPanels,
	Tabs,
	useTabClasses,
	useTabsContext,
	useTabSizeConfig,
	useTabsTabFontSize,
	utils as tabsUtils
} from './components/Tabs';

// Constants
export const constants = { ...dummyTabsConstants, ...tabsConstants };

// Keys
export const keys = { ...dummyTabsKeys, ...tabsKeys };

// Utils
export const utils = { ...dummyTabsUtils, ...tabsUtils };

// Hooks
export {
	useDummyTabClasses,
	useDummyTabsContext,
	useDummyTabsDummyTabFontSize,
	useDummyTabSizeConfig,
	useTabClasses,
	useTabsContext,
	useTabSizeConfig,
	useTabsTabFontSize
};

// Components
export { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabs, Tab, TabIcon, TabList, TabPanels, Tabs };

// Component Types
export type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef,
	DummyTabListContext,
	DummyTabListProps,
	DummyTabListRef,
	DummyTabListRenderProps,
	DummyTabPanelProps,
	DummyTabPanelsProps,
	DummyTabPanelsRef,
	DummyTabProps,
	DummyTabRef,
	DummyTabRenderProps,
	DummyTabsAlign,
	DummyTabsContext,
	DummyTabsOrientation,
	DummyTabsProps,
	DummyTabsRef,
	DummyTabsSize,
	TabDefaultElement,
	TabElement,
	TabIconDefaultElement,
	TabIconElement,
	TabIconProps,
	TabIconRef,
	TabListContext,
	TabListProps,
	TabListRef,
	TabListRenderProps,
	TabMouseEvent,
	TabPanelProps,
	TabPanelsProps,
	TabPanelsRef,
	TabProps,
	TabRef,
	TabRenderProps,
	TabsAlign,
	TabsContext,
	TabsOrientation,
	TabsProps,
	TabsRef,
	TabsSize
};
