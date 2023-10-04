import type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef,
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
	hooks as dummyTabsHooks,
	keys as dummyTabsKeys,
	utils as dummyTabsUtils
} from './components/DummyTabs';
import type {
	TabDefaultElement,
	TabElement,
	TabIconDefaultElement,
	TabIconElement,
	TabIconProps,
	TabIconRef,
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
	hooks as tabsHooks,
	keys as tabsKeys,
	Tab,
	TabIcon,
	TabList,
	TabPanels,
	Tabs,
	utils as tabsUtils
} from './components/Tabs';

// Constants
export const constants = { ...dummyTabsConstants, ...tabsConstants };

// Keys
export const keys = { ...dummyTabsKeys, ...tabsKeys };

// Utils
export const utils = { ...dummyTabsUtils, ...tabsUtils };

// Hooks
export const hooks = { ...dummyTabsHooks, ...tabsHooks };

// Components
export { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabs, Tab, TabIcon, TabList, TabPanels, Tabs };

// Component Types
export type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef,
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
