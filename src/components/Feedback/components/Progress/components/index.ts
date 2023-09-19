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
	keys as progressSectionKeys,
	ProgressSection,
	useProgressSectionClasses
} from './ProgressSection';

// Constants
export const constants = { ...progressSectionConstants };

// Keys
export const keys = { ...progressLabelKeys, ...progressSectionKeys };

// Hooks
export { useProgressSectionClasses };

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
