import Skeleton from './components/Skeleton';
import {
	__DEFAULT_SKELETON_IS_ANIMATED__,
	__DEFAULT_SKELETON_IS_LOADED__
} from './components/Skeleton/common/constants';
import { useGetSkeletonClasses } from './components/Skeleton/common/hooks';
import type { SkeletonProps, SkeletonRef } from './components/Skeleton/common/types';
import Spinner from './components/Spinner';
import {
	__DEFAULT_SPINNER_IS_VISIBLE__,
	__DEFAULT_SPINNER_SIZE__,
	__DEFAULT_SPINNER_VARIANT__
} from './components/Spinner/common/constants';
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
} from './components/Spinner/common/types';

// Constants
export const constants = {
	__DEFAULT_SPINNER_IS_VISIBLE__,
	__DEFAULT_SPINNER_SIZE__,
	__DEFAULT_SPINNER_VARIANT__,
	__DEFAULT_SKELETON_IS_ANIMATED__,
	__DEFAULT_SKELETON_IS_LOADED__
};

// Hooks
export { useGetSkeletonClasses };

// Components
export { Skeleton, Spinner };

// Components Types
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
