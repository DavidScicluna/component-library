import type {
	ProgressLabelDefaultElement,
	ProgressLabelElement,
	ProgressLabelProps,
	ProgressLabelRef
} from './ProgressLabel';
import { keys as progressLabelKeys, ProgressLabel } from './ProgressLabel';
import type { ProgressSectionProps, ProgressSectionRef } from './ProgressSection';
import {
	constants as progressSectionConstants,
	hooks as progressSectionHooks,
	keys as progressSectionKeys,
	ProgressSection
} from './ProgressSection';

// Constants
export const constants = { ...progressSectionConstants };

// Keys
export const keys = { ...progressLabelKeys, ...progressSectionKeys };

// Hooks
export const hooks = { ...progressSectionHooks };

// Components
export { ProgressLabel, ProgressSection };

// Component Types
export type {
	ProgressLabelDefaultElement,
	ProgressLabelElement,
	ProgressLabelProps,
	ProgressLabelRef,
	ProgressSectionProps,
	ProgressSectionRef
};
