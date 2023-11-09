import type { DummyTabProps, DummyTabRef, DummyTabRenderProps } from './DummyTab';
import {
	constants as dummy_tab_constants,
	DummyTab,
	hooks as dummy_tab_hooks,
	keys as dummy_tab_keys
} from './DummyTab';
import type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef
} from './DummyTabIcon';
import { DummyTabIcon, keys as dummy_tab_icon_keys } from './DummyTabIcon';
import type { DummyTabListProps, DummyTabListRef, DummyTabListRenderProps } from './DummyTabList';
import { DummyTabList, keys as dummy_tab_list_keys } from './DummyTabList';
import type { DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef } from './DummyTabPanels';
import { DummyTabPanels, keys as dummy_tab_panels_keys } from './DummyTabPanels';
import type { DummyTabSkeletonProps, DummyTabSkeletonRef } from './DummyTabSkeleton';
import { DummyTabSkeleton, keys as dummy_tab_skeleton_keys } from './DummyTabSkeleton';

// Constants
export const constants = { ...dummy_tab_constants };

// Keys
export const keys = {
	...dummy_tab_keys,
	...dummy_tab_icon_keys,
	...dummy_tab_list_keys,
	...dummy_tab_panels_keys,
	...dummy_tab_skeleton_keys
};

// _hooks
export const hooks = { ...dummy_tab_hooks };

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
