import * as common_constants from './common/constants';
import * as common_hooks from './common/hooks';
import * as common_keys from './common/keys';
import type {
	DummyTabsAlign,
	DummyTabsContext,
	DummyTabsOrientation,
	DummyTabsProps,
	DummyTabsRef,
	DummyTabsSize
} from './common/types';
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
	DummyTabSkeletonProps,
	DummyTabSkeletonRef
} from './components';
import {
	constants as components_constants,
	DummyTab,
	DummyTabIcon,
	DummyTabList,
	DummyTabPanels,
	DummyTabSkeleton,
	hooks as components_hooks,
	keys as components_keys
} from './components';
import DummyTabs from './DummyTabs';

// Constants
export const constants = { ...common_constants, ...components_constants };

// Keys
export const keys = { ...common_keys, ...components_keys };

// Utils
export * as utils from './common/utils';

// Hooks
export const hooks = { ...common_hooks, ...components_hooks };

// Components
export { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabs, DummyTabSkeleton };

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
	DummyTabSkeletonProps,
	DummyTabSkeletonRef,
	DummyTabsOrientation,
	DummyTabsProps,
	DummyTabsRef,
	DummyTabsSize
};
