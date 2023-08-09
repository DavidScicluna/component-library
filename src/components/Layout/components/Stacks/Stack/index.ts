import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from './common/constants';
import { useGetStackClasses } from './common/hooks';
import type { StackProps, StackRef } from './common/types';
import Stack from './Stack';

// Constants
export const constants = {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
};

// Hooks
export { useGetStackClasses };

// Components
export { Stack };

// Component Types
export type { StackProps, StackRef };
