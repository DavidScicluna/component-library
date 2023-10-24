import type {
	DummyBadgeIconDefaultElement,
	DummyBadgeIconElement,
	DummyBadgeIconProps,
	DummyBadgeIconRef
} from './DummyBadgeIcon';
import { DummyBadgeIcon, keys as dummy_badge_icon_keys } from './DummyBadgeIcon';
import type { DummyBadgeSkeletonProps, DummyBadgeSkeletonRef } from './DummyBadgeSkeleton';
import { DummyBadgeSkeleton, keys as dummy_badge_skeleton_keys } from './DummyBadgeSkeleton';

// Keys
export const keys = { ...dummy_badge_icon_keys, ...dummy_badge_skeleton_keys };

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
