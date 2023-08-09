import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from './common/constants';
import { useGetContainerClasses } from './common/hooks';
import type { ContainerBreakpoint, ContainerBreakpoints, ContainerProps, ContainerRef } from './common/types';
import Container from './Container';

// Constants
export const constants = {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
};

// Hooks
export { useGetContainerClasses };

// Components
export { Container };

// Component Types
export type { ContainerBreakpoint, ContainerBreakpoints, ContainerProps, ContainerRef };
