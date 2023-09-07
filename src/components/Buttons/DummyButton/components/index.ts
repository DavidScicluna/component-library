import type {
	DummyButtonIconDefaultElement,
	DummyButtonIconElement,
	DummyButtonIconProps,
	DummyButtonIconRef
} from './DummyButtonIcon';
import { DummyButtonIcon, keys as dummyButtonIconKeys } from './DummyButtonIcon';
import type { DummyButtonSkeletonProps, DummyButtonSkeletonRef } from './DummyButtonSkeleton';
import { DummyButtonSkeleton, keys as dummyButtonSkeletonKeys } from './DummyButtonSkeleton';

// Keys
export const keys = { ...dummyButtonIconKeys, ...dummyButtonSkeletonKeys };

// Components
export { DummyButtonIcon, DummyButtonSkeleton };

// Component Types
export type {
	DummyButtonIconDefaultElement,
	DummyButtonIconElement,
	DummyButtonIconProps,
	DummyButtonIconRef,
	DummyButtonSkeletonProps,
	DummyButtonSkeletonRef
};
