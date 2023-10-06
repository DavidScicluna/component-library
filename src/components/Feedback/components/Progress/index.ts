import * as commonConstants from './common/constants';
import * as commonHooks from './common/hooks';
import * as commonKeys from './common/keys';
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
	constants as componentsConstants,
	hooks as componentsHooks,
	keys as componentsKeys,
	ProgressLabel,
	ProgressSection
} from './components';
import Progress from './Progress';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export const hooks = { ...commonHooks, ...componentsHooks };

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
