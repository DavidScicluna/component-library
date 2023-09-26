import * as commonConstants from './common/constants';
import { useDummyTabsContext, useDummyTabsDummyTabFontSize } from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	DummyTabsAlign,
	DummyTabsContext,
	DummyTabsOrientation,
	DummyTabsProps,
	DummyTabsRef,
	DummyTabsSize
} from './common/types';
import * as commonUtils from './common/utils';
import type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef,
	DummyTabListContext,
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
	keys as componentsKeys,
	useDummyTabClasses,
	useDummyTabSizeConfig
} from './components';
import DummyTabs from './DummyTabs';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Utils
export const utils = { ...commonUtils };

// Hooks
export { useDummyTabClasses, useDummyTabsContext, useDummyTabsDummyTabFontSize, useDummyTabSizeConfig };

// Components
export { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabs, DummyTabSkeleton };

// Component Types
export type {
	DummyTabIconDefaultElement,
	DummyTabIconElement,
	DummyTabIconProps,
	DummyTabIconRef,
	DummyTabListContext,
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
