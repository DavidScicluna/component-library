import type { DummyTabProps, DummyTabRef, DummyTabRenderProps } from './DummyTab';
import { constants as dummyTabConstants, DummyTab, hooks as dummyTabHooks, keys as dummyTabKeys } from './DummyTab';
import type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef
} from './DummyTabIcon';
import { DummyTabIcon, keys as dummyTabIconKeys } from './DummyTabIcon';
import type { DummyTabListProps, DummyTabListRef, DummyTabListRenderProps } from './DummyTabList';
import { DummyTabList, keys as dummyTabListKeys } from './DummyTabList';
import type { DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef } from './DummyTabPanels';
import { DummyTabPanels, keys as dummyTabPanelsKeys } from './DummyTabPanels';
import type { DummyTabSkeletonProps, DummyTabSkeletonRef } from './DummyTabSkeleton';
import { DummyTabSkeleton, keys as dummyTabSkeletonKeys } from './DummyTabSkeleton';

// Constants
export const constants = { ...dummyTabConstants };

// Keys
export const keys = {
	...dummyTabKeys,
	...dummyTabIconKeys,
	...dummyTabListKeys,
	...dummyTabPanelsKeys,
	...dummyTabSkeletonKeys
};

// Hooks
export const hooks = { ...dummyTabHooks };

// Components
export { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabSkeleton };

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
	DummyTabSkeletonProps,
	DummyTabSkeletonRef
};
