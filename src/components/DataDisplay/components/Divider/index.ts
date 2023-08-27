import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from './common/constants';
import { useDividerClasses, useDividerStyles } from './common/hooks';
import type {
	DividerDefaultElement,
	DividerElement,
	DividerPlacement,
	DividerProps,
	DividerRef,
	DividerVariant
} from './common/types';
import Divider from './Divider';

// Constants
export const constants = {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
};

// Hooks
export { useDividerClasses, useDividerStyles };

// Components
export { Divider };

// Component Types
export type { DividerDefaultElement, DividerElement, DividerPlacement, DividerProps, DividerRef, DividerVariant };
