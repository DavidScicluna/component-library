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
	constants as dummy_tabs_constants,
	DummyTab,
	DummyTabIcon,
	DummyTabList,
	DummyTabPanels,
	DummyTabs,
	hooks as dummy_tabs_hooks,
	keys as dummy_tabs_keys,
	utils as dummy_tabs_utils
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
	constants as tabs_constants,
	hooks as tabs_hooks,
	keys as tabs_keys,
	Tab,
	TabIcon,
	TabList,
	TabPanels,
	Tabs,
	utils as tabs_utils
} from './components/Tabs';

// Constants
export const constants = { ...dummy_tabs_constants, ...tabs_constants };

// Keys
export const keys = { ...dummy_tabs_keys, ...tabs_keys };

// Utils
export const utils = { ...dummy_tabs_utils, ...tabs_utils };

// Hooks
export const hooks = { ...dummy_tabs_hooks, ...tabs_hooks };

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
