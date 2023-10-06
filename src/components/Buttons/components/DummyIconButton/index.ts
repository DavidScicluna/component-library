import * as commonConstants from './common/constants';
import * as commonKeys from './common/keys';
import type {
	DummyIconButtonContext,
	DummyIconButtonProps,
	DummyIconButtonRef,
	DummyIconButtonSize,
	DummyIconButtonVariant
} from './common/types';
import type {
	DummyIconButtonIconDefaultElement,
	DummyIconButtonIconElement,
	DummyIconButtonIconProps,
	DummyIconButtonIconRef,
	DummyIconButtonSkeletonProps,
	DummyIconButtonSkeletonRef
} from './components';
import { DummyIconButtonIcon, DummyIconButtonSkeleton, keys as componentKeys } from './components';
import DummyIconButton from './DummyIconButton';

// Constants
// TODO: consolidate all constants and keys to be imported as * as
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentKeys };

// Hooks
export * as hooks from './common/hooks';

// Components
export { DummyIconButton, DummyIconButtonIcon, DummyIconButtonSkeleton };

// Component Types
export type {
	DummyIconButtonContext,
	DummyIconButtonIconDefaultElement,
	DummyIconButtonIconElement,
	DummyIconButtonIconProps,
	DummyIconButtonIconRef,
	DummyIconButtonProps,
	DummyIconButtonRef,
	DummyIconButtonSize,
	DummyIconButtonSkeletonProps,
	DummyIconButtonSkeletonRef,
	DummyIconButtonVariant
};
