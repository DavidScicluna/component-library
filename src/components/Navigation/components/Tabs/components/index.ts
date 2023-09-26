import type { TabDefaultElement, TabElement, TabMouseEvent, TabProps, TabRef, TabRenderProps } from './Tab';
import { constants as tabConstants, keys as tabKeys, Tab, useTabClasses, useTabSizeConfig } from './Tab';
import type { TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef } from './TabIcon';
import { keys as tabIconKeys, TabIcon } from './TabIcon';
import type { TabListContext, TabListProps, TabListRef, TabListRenderProps } from './TabList';
import { keys as tabListKeys, TabList } from './TabList';
import type { TabPanelProps, TabPanelsProps, TabPanelsRef } from './TabPanels';
import { keys as tabPanelsKeys, TabPanels } from './TabPanels';

// Constants
export const constants = { ...tabConstants };

// Keys
export const keys = { ...tabKeys, ...tabIconKeys, ...tabListKeys, ...tabPanelsKeys };

// Hooks
export { useTabClasses, useTabSizeConfig };

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
	TabRenderProps
};
