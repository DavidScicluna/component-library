import * as commonConstants from './common/constants';
import {
	useDummyButtonClasses,
	useDummyButtonContext,
	useDummyButtonFontSize,
	useDummyButtonSizeConfig
} from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	DummyButtonContext,
	DummyButtonProps,
	DummyButtonRef,
	DummyButtonRenderProps,
	DummyButtonSize,
	DummyButtonVariant
} from './common/types';
import type {
	DummyButtonIconDefaultElement,
	DummyButtonIconElement,
	DummyButtonIconProps,
	DummyButtonIconRef,
	DummyButtonSkeletonProps,
	DummyButtonSkeletonRef
} from './components';
import { DummyButtonIcon, DummyButtonSkeleton, keys as componentKeys } from './components';
import DummyButton from './DummyButton';

// Constants
// TODO: consolidate all constants and keys to be imported as * as
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentKeys };

// Hooks
export { useDummyButtonClasses, useDummyButtonContext, useDummyButtonFontSize, useDummyButtonSizeConfig };

// Components
export { DummyButton, DummyButtonIcon, DummyButtonSkeleton };

// Component Types
export type {
	DummyButtonContext,
	DummyButtonIconDefaultElement,
	DummyButtonIconElement,
	DummyButtonIconProps,
	DummyButtonIconRef,
	DummyButtonProps,
	DummyButtonRef,
	DummyButtonRenderProps,
	DummyButtonSize,
	DummyButtonSkeletonProps,
	DummyButtonSkeletonRef,
	DummyButtonVariant
};
