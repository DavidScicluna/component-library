import * as commonConstants from './common/constants';
import {
	useDummyBadgeClasses,
	useDummyBadgeContext,
	useDummyBadgeFontSize,
	useDummyBadgeSizeConfig
} from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	DummyBadgeContext,
	DummyBadgeProps,
	DummyBadgeRef,
	DummyBadgeRenderProps,
	DummyBadgeSize,
	DummyBadgeVariant
} from './common/types';
import type {
	DummyBadgeIconDefaultElement,
	DummyBadgeIconElement,
	DummyBadgeIconProps,
	DummyBadgeIconRef,
	DummyBadgeSkeletonProps,
	DummyBadgeSkeletonRef
} from './components';
import { DummyBadgeIcon, DummyBadgeSkeleton, keys as componentsKeys } from './components';
import DummyBadge from './DummyBadge';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export { useDummyBadgeClasses, useDummyBadgeContext, useDummyBadgeFontSize, useDummyBadgeSizeConfig };

// Components
export { DummyBadge, DummyBadgeIcon, DummyBadgeSkeleton };

// Component Types
export type {
	DummyBadgeContext,
	DummyBadgeIconDefaultElement,
	DummyBadgeIconElement,
	DummyBadgeIconProps,
	DummyBadgeIconRef,
	DummyBadgeProps,
	DummyBadgeRef,
	DummyBadgeRenderProps,
	DummyBadgeSize,
	DummyBadgeSkeletonProps,
	DummyBadgeSkeletonRef,
	DummyBadgeVariant
};
