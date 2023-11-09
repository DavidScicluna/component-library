import * as common_constants from './common/constants';
import * as common_hooks from './common/hooks';
import * as common_keys from './common/keys';
import type { ProgressContext, ProgressProps, ProgressRef, ProgressVariant } from './common/types';
import type {
	ProgressLabelDefaultElement,
	ProgressLabelElement,
	ProgressLabelProps,
	ProgressLabelRef,
	ProgressSectionProps,
	ProgressSectionRef
} from './components';
import {
	constants as components_constants,
	hooks as components_hooks,
	keys as components_keys,
	ProgressLabel,
	ProgressSection
} from './components';
import Progress from './Progress';

// Constants
export const constants = { ...common_constants, ...components_constants };

// Keys
export const keys = { ...common_keys, ...components_keys };

// Hooks
export const hooks = { ...common_hooks, ...components_hooks };

// Components
export { Progress, ProgressLabel, ProgressSection };

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
	ProgressVariant
};
