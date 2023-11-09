import type {
	DummyIconButtonIconDefaultElement,
	DummyIconButtonIconElement,
	DummyIconButtonIconProps,
	DummyIconButtonIconRef
} from './DummyIconButtonIcon';
import { DummyIconButtonIcon, keys as dummy_icon_button_icon_keys } from './DummyIconButtonIcon';
import type { DummyIconButtonSkeletonProps, DummyIconButtonSkeletonRef } from './DummyIconButtonSkeleton';
import { DummyIconButtonSkeleton, keys as dummy_icon_button_skeleton_keys } from './DummyIconButtonSkeleton';

// Keys
export const keys = { ...dummy_icon_button_icon_keys, ...dummy_icon_button_skeleton_keys };

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
