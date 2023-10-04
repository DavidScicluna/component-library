import * as commonConstants from './common/constants';
import * as commonHooks from './common/hooks';
import * as commonKeys from './common/keys';
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
	constants as componentsConstants,
	DummyTab,
	DummyTabIcon,
	DummyTabList,
	DummyTabPanels,
	DummyTabSkeleton,
	hooks as componentsHooks,
	keys as componentsKeys
} from './components';
import DummyTabs from './DummyTabs';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Utils
export * as utils from './common/utils';

// Hooks
export const hooks = { ...commonHooks, ...componentsHooks };

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
