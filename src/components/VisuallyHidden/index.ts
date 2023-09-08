import { useVisuallyHiddenStyles } from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	VisuallyHiddenDefaultElement,
	VisuallyHiddenElement,
	VisuallyHiddenProps,
	VisuallyHiddenRef
} from './common/types';
import VisuallyHidden from './VisuallyHidden';

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useVisuallyHiddenStyles };

// Components
export { VisuallyHidden };

// Components Types
export type { VisuallyHiddenDefaultElement, VisuallyHiddenElement, VisuallyHiddenProps, VisuallyHiddenRef };
