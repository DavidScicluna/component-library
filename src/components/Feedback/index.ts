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
import type { PuffSpinnerProps, PuffSpinnerRef, PuffSpinnerSize } from './components/PuffSpinner';
import {
	constants as puff_spinner_constants,
	hooks as puff_spinner_hooks,
	keys as puff_spinner_keys,
	PuffSpinner
} from './components/PuffSpinner';
import type { SkeletonProps, SkeletonRef } from './components/Skeleton';
import {
	constants as skeleton_constants,
	hooks as skeleton_hooks,
	keys as skeleton_keys,
	Skeleton
} from './components/Skeleton';
import type { TailSpinSpinnerProps, TailSpinSpinnerRef, TailSpinSpinnerSize } from './components/TailSpinSpinner';
import {
	constants as tail_spin_spinner_constants,
	hooks as tail_spin_spinner_hooks,
	keys as tail_spin_spinner_keys,
	TailSpinSpinner
} from './components/TailSpinSpinner';
import type { ThreeDotsSpinnerProps, ThreeDotsSpinnerRef, ThreeDotsSpinnerSize } from './components/ThreeDotsSpinner';
import {
	constants as three_dots_spinner_constants,
	hooks as three_dots_spinner_hooks,
	keys as three_dots_spinner_keys,
	ThreeDotsSpinner
} from './components/ThreeDotsSpinner';

// Constants
export const constants = {
	...alert_constants,
	...progress_constants,
	...puff_spinner_constants,
	...skeleton_constants,
	...tail_spin_spinner_constants,
	...three_dots_spinner_constants
};

// Keys
export const keys = {
	...alert_keys,
	...progress_keys,
	...puff_spinner_keys,
	...skeleton_keys,
	...tail_spin_spinner_keys,
	...three_dots_spinner_keys
};

// Utils
export const utils = { ...alert_utils };

// Hooks
export const hooks = {
	...alert_hooks,
	...progress_hooks,
	...puff_spinner_hooks,
	...skeleton_hooks,
	...tail_spin_spinner_hooks,
	...three_dots_spinner_hooks
};

// Components
export {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertLabel,
	Progress,
	ProgressLabel,
	ProgressSection,
	PuffSpinner,
	Skeleton,
	TailSpinSpinner,
	ThreeDotsSpinner
};

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
	PuffSpinnerProps,
	PuffSpinnerRef,
	PuffSpinnerSize,
	SkeletonProps,
	SkeletonRef,
	TailSpinSpinnerProps,
	TailSpinSpinnerRef,
	TailSpinSpinnerSize,
	ThreeDotsSpinnerProps,
	ThreeDotsSpinnerRef,
	ThreeDotsSpinnerSize
};
