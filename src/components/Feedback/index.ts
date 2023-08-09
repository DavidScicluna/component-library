import type { SkeletonProps, SkeletonRef } from './components/Skeleton';
import { constants as skeletonConstants, Skeleton, useGetSkeletonClasses } from './components/Skeleton';
import type {
	SpinnerBarsVariant,
	SpinnerColorRingVariant,
	SpinnerOvalVariant,
	SpinnerProps,
	SpinnerPuffVariant,
	SpinnerRef,
	SpinnerRingsVariant,
	SpinnerRotatingLinesVariant,
	SpinnerSize,
	SpinnerTailSpinVariant,
	SpinnerThreeDotsVariant,
	SpinnerVariant
} from './components/Spinner';
import { constants as spinnerConstants, Spinner } from './components/Spinner';

// Constants
export const constants = { ...spinnerConstants, ...skeletonConstants };

// Hooks
export { useGetSkeletonClasses };

// Components
export { Skeleton, Spinner };

// Component Types
export type {
	SkeletonProps,
	SkeletonRef,
	SpinnerBarsVariant,
	SpinnerColorRingVariant,
	SpinnerOvalVariant,
	SpinnerProps,
	SpinnerPuffVariant,
	SpinnerRef,
	SpinnerRingsVariant,
	SpinnerRotatingLinesVariant,
	SpinnerSize,
	SpinnerTailSpinVariant,
	SpinnerThreeDotsVariant,
	SpinnerVariant
};
