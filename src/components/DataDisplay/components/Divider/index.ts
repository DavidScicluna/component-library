import * as commonConstants from './common/constants';
import { useDividerClasses, useDividerStyles } from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	DividerDefaultElement,
	DividerElement,
	DividerOrientation,
	DividerOrientations,
	DividerPlacement,
	DividerProps,
	DividerRef,
	DividerVariant
} from './common/types';
import Divider from './Divider';

// Constants
export const constants = { ...commonConstants };

// Keys
export const key = { ...commonKeys };

// Hooks
export { useDividerClasses, useDividerStyles };

// Components
export { Divider };

// Component Types
export type {
	DividerDefaultElement,
	DividerElement,
	DividerOrientation,
	DividerOrientations,
	DividerPlacement,
	DividerProps,
	DividerRef,
	DividerVariant
};
