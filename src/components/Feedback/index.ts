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
	constants as alert_constants,
	hooks as alert_hooks,
	keys as alert_keys,
	utils as alert_utils
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
	constants as progress_constants,
	hooks as progress_hooks,
	keys as progress_keys,
	Progress,
	ProgressLabel,
	ProgressSection
} from './components/Progress';
import type { SkeletonProps, SkeletonRef } from './components/Skeleton';
import {
	constants as skeleton_constants,
	hooks as skeleton_hooks,
	keys as skeleton_keys,
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
import { constants as spinner_constants, keys as spinner_keys, Spinner } from './components/Spinner';

// Constants
export const constants = { ...alert_constants, ...progress_constants, ...spinner_constants, ...skeleton_constants };

// Keys
export const keys = { ...alert_keys, ...progress_keys, ...spinner_keys, ...skeleton_keys };

// Utils
export const utils = { ...alert_utils };

// Hooks
export const hooks = { ...alert_hooks, ...progress_hooks, ...skeleton_hooks };

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
