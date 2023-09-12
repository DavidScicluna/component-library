import * as commonConstants from './common/constants';
import { useLinearGradientClasses } from './common/hooks';
import * as commonKeys from './common/keys';
import type {
	LinearGradientColor,
	LinearGradientDirection,
	LinearGradientDirections,
	LinearGradientProps,
	LinearGradientRef
} from './common/types';
import LinearGradient from './LinearGradient';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useLinearGradientClasses };

// Components
export { LinearGradient };

// Component Types
export type {
	LinearGradientColor,
	LinearGradientDirection,
	LinearGradientDirections,
	LinearGradientProps,
	LinearGradientRef
};
