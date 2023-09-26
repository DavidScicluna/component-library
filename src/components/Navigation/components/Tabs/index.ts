import * as commonConstants from './common/constants';
import { useTabsContext, useTabsTabFontSize } from './common/hooks';
import * as commonKeys from './common/keys';
import type { TabsAlign, TabsContext, TabsOrientation, TabsProps, TabsRef, TabsSize } from './common/types';
import * as commonUtils from './common/utils';
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
	TabRenderProps
} from './components';
import {
	constants as componentsConstants,
	keys as componentsKeys,
	Tab,
	TabIcon,
	TabList,
	TabPanels,
	useTabClasses,
	useTabSizeConfig
} from './components';
import Tabs from './Tabs';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Utils
export const utils = { ...commonUtils };

// Hooks
export { useTabClasses, useTabsContext, useTabSizeConfig, useTabsTabFontSize };

// Components
export { Tab, TabIcon, TabList, TabPanels, Tabs };

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
	TabRenderProps,
	TabsAlign,
	TabsContext,
	TabsOrientation,
	TabsProps,
	TabsRef,
	TabsSize
};
