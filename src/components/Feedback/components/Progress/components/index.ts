import type {
	ProgressLabelDefaultElement,
	ProgressLabelElement,
	ProgressLabelProps,
	ProgressLabelRef
} from './ProgressLabel';
import { keys as progress_label_keys, ProgressLabel } from './ProgressLabel';
import type { ProgressSectionProps, ProgressSectionRef } from './ProgressSection';
import {
	constants as progress_section_constants,
	hooks as progress_section_hooks,
	keys as progress_section_keys,
	ProgressSection
} from './ProgressSection';

// Constants
export const constants = { ...progress_section_constants };

// Keys
export const keys = { ...progress_label_keys, ...progress_section_keys };

// Hooks
export const hooks = { ...progress_section_hooks };

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
