import type {
	DummyButtonIconDefaultElement,
	DummyButtonIconElement,
	DummyButtonIconProps,
	DummyButtonIconRef
} from './DummyButtonIcon';
import { DummyButtonIcon, keys as dummy_button_icon_keys } from './DummyButtonIcon';
import type { DummyButtonSkeletonProps, DummyButtonSkeletonRef } from './DummyButtonSkeleton';
import { DummyButtonSkeleton, keys as dummy_button_skeleton_keys } from './DummyButtonSkeleton';

// Keys
export const keys = { ...dummy_button_icon_keys, ...dummy_button_skeleton_keys };

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
