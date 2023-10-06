import type {
	AlertContext,
	AlertDescriptionDefaultElement,
	AlertDescriptionElement,
	AlertDescriptionProps,
	AlertDescriptionRef,
	AlertDuration,
	AlertIconDefaultElement,
	AlertIconElement,
	AlertIconProps,
	AlertIconRef,
	AlertLabelDefaultElement,
	AlertLabelElement,
	AlertLabelProps,
	AlertLabelRef,
	AlertProps,
	AlertRef,
	AlertRenderActionsProps,
	AlertRenderCloseProps,
	AlertStatus,
	AlertVariant
} from './components/Alert';
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertLabel,
	constants as alertConstants,
	hooks as alertHooks,
	keys as alertKeys,
	utils as alertUtils
} from './components/Alert';
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
	hooks as skeletonHooks,
	keys as skeletonKeys,
	Skeleton
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
export const constants = { ...alertConstants, ...progressConstants, ...spinnerConstants, ...skeletonConstants };

// Keys
export const keys = { ...alertKeys, ...progressKeys, ...spinnerKeys, ...skeletonKeys };

// Utils
export const utils = { ...alertUtils };

// Hooks
export const hooks = { ...alertHooks, ...skeletonHooks };

// Components
export { Alert, AlertDescription, AlertIcon, AlertLabel, Progress, ProgressLabel, ProgressSection, Skeleton, Spinner };

// Component Types
export type {
	AlertContext,
	AlertDescriptionDefaultElement,
	AlertDescriptionElement,
	AlertDescriptionProps,
	AlertDescriptionRef,
	AlertDuration,
	AlertIconDefaultElement,
	AlertIconElement,
	AlertIconProps,
	AlertIconRef,
	AlertLabelDefaultElement,
	AlertLabelElement,
	AlertLabelProps,
	AlertLabelRef,
	AlertProps,
	AlertRef,
	AlertRenderActionsProps,
	AlertRenderCloseProps,
	AlertStatus,
	AlertVariant,
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
