import * as common_keys from './common/keys';
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
import { DummyBadgeIcon, DummyBadgeSkeleton, keys as components_keys } from './components';
import DummyBadge from './DummyBadge';

// Constants
export * as constants from './common/constants';

// Keys
export const keys = { ...common_keys, ...components_keys };

// Hooks
export * as hooks from './common/hooks';

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
