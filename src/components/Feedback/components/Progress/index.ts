import * as commonConstants from './common/constants';
import { useProgressClasses, useProgressContext, useProgressStyles } from './common/hooks';
import * as commonKeys from './common/keys';
import type { ProgressContext, ProgressProps, ProgressRef } from './common/types';
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
	keys as componentsKeys,
	ProgressLabel,
	ProgressSection,
	useProgressSectionClasses
} from './components';
import Progress from './Progress';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export { useProgressClasses, useProgressContext, useProgressSectionClasses, useProgressStyles };

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
	ProgressSectionRef
};
