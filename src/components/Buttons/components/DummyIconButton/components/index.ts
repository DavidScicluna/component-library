import type {
	DummyIconButtonIconDefaultElement,
	DummyIconButtonIconElement,
	DummyIconButtonIconProps,
	DummyIconButtonIconRef
} from './DummyIconButtonIcon';
import { DummyIconButtonIcon, keys as dummyIconButtonIconKeys } from './DummyIconButtonIcon';
import type { DummyIconButtonSkeletonProps, DummyIconButtonSkeletonRef } from './DummyIconButtonSkeleton';
import { DummyIconButtonSkeleton, keys as dummyIconButtonSkeletonKeys } from './DummyIconButtonSkeleton';

// Keys
export const keys = { ...dummyIconButtonIconKeys, ...dummyIconButtonSkeletonKeys };

// Components
export { DummyIconButtonIcon, DummyIconButtonSkeleton };

// Component Types
export type {
	DummyIconButtonIconDefaultElement,
	DummyIconButtonIconElement,
	DummyIconButtonIconProps,
	DummyIconButtonIconRef,
	DummyIconButtonSkeletonProps,
	DummyIconButtonSkeletonRef
};
