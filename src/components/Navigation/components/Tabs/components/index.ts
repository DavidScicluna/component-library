import type { TabDefaultElement, TabElement, TabMouseEvent, TabProps, TabRef, TabRenderProps } from './Tab';
import { constants as tab_constants, hooks as tab_hooks, keys as tab_keys, Tab } from './Tab';
import type { TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef } from './TabIcon';
import { keys as tab_icon_keys, TabIcon } from './TabIcon';
import type { TabListProps, TabListRef, TabListRenderProps } from './TabList';
import { keys as tab_list_keys, TabList } from './TabList';
import type { TabPanelProps, TabPanelsProps, TabPanelsRef } from './TabPanels';
import { keys as tab_panels_keys, TabPanels } from './TabPanels';

// Constants
export const constants = { ...tab_constants };

// Keys
export const keys = { ...tab_keys, ...tab_icon_keys, ...tab_list_keys, ...tab_panels_keys };

// Hooks
export const hooks = { ...tab_hooks };

// Components
export { Tab, TabIcon, TabList, TabPanels };

// Component Types
export type {
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
	TabRenderProps
};
