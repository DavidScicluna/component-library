import type {
	ProgressContext,
	ProgressLabelDefaultElement,
	ProgressLabelElement,
	ProgressLabelProps,
	ProgressLabelRef,
	ProgressProps,
	ProgressRef,
	ProgressSectionProps,
	ProgressSectionRef
} from './components/Progress';
import {
	constants as progressConstants,
	keys as progressKeys,
	Progress,
	ProgressLabel,
	ProgressSection
} from './components/Progress';
import type { SkeletonProps, SkeletonRef } from './components/Skeleton';
import {
	constants as skeletonConstants,
	keys as skeletonKeys,
	Skeleton,
	useSkeletonClasses
} from './components/Skeleton';
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
import { constants as spinnerConstants, keys as spinnerKeys, Spinner } from './components/Spinner';

// Constants
export const constants = { ...progressConstants, ...spinnerConstants, ...skeletonConstants };

// Keys
export const keys = { ...progressKeys, ...spinnerKeys, ...skeletonKeys };

// Hooks
export { useSkeletonClasses };

// Components
export { Progress, ProgressLabel, ProgressSection, Skeleton, Spinner };

// Component Types
export type {
	ProgressContext,
	ProgressLabelDefaultElement,
	ProgressLabelElement,
	ProgressLabelProps,
	ProgressLabelRef,
	ProgressProps,
	ProgressRef,
	ProgressSectionProps,
	ProgressSectionRef,
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
