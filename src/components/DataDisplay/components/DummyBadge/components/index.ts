import type {
	DummyBadgeIconDefaultElement,
	DummyBadgeIconElement,
	DummyBadgeIconProps,
	DummyBadgeIconRef
} from './DummyBadgeIcon';
import { DummyBadgeIcon, keys as dummyBadgeIconKeys } from './DummyBadgeIcon';
import type { DummyBadgeSkeletonProps, DummyBadgeSkeletonRef } from './DummyBadgeSkeleton';
import { DummyBadgeSkeleton, keys as dummyBadgeSkeletonKeys } from './DummyBadgeSkeleton';

// Keys
export const keys = { ...dummyBadgeIconKeys, ...dummyBadgeSkeletonKeys };

// Components
export { DummyBadgeIcon, DummyBadgeSkeleton };

// Component Types
export type {
	DummyBadgeIconDefaultElement,
	DummyBadgeIconElement,
	DummyBadgeIconProps,
	DummyBadgeIconRef,
	DummyBadgeSkeletonProps,
	DummyBadgeSkeletonRef
};
