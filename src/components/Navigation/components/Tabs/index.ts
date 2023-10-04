import * as commonConstants from './common/constants';
import * as commonHooks from './common/hooks';
import * as commonKeys from './common/keys';
import type { TabsAlign, TabsContext, TabsOrientation, TabsProps, TabsRef, TabsSize } from './common/types';
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
	TabRenderProps
} from './components';
import {
	constants as componentsConstants,
	hooks as componentsHooks,
	keys as componentsKeys,
	Tab,
	TabIcon,
	TabList,
	TabPanels
} from './components';
import Tabs from './Tabs';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Utils
export * as utils from './common/utils';

// Hooks
export const hooks = { ...commonHooks, ...componentsHooks };

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
