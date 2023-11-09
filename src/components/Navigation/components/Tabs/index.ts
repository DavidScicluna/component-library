import * as common_constants from './common/constants';
import * as common_hooks from './common/hooks';
import * as common_keys from './common/keys';
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
	constants as components_constants,
	hooks as components_hooks,
	keys as components_keys,
	Tab,
	TabIcon,
	TabList,
	TabPanels
} from './components';
import Tabs from './Tabs';

// Constants
export const constants = { ...common_constants, ...components_constants };

// Keys
export const keys = { ...common_keys, ...components_keys };

// Utils
export * as utils from './common/utils';

// Hooks
export const hooks = { ...common_hooks, ...components_hooks };

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
