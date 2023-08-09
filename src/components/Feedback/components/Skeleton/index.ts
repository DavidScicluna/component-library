import { __DEFAULT_SKELETON_IS_ANIMATED__, __DEFAULT_SKELETON_IS_LOADED__ } from './common/constants';
import { useGetSkeletonClasses } from './common/hooks';
import type { SkeletonProps, SkeletonRef } from './common/types';
import Skeleton from './Skeleton';

// Constants
export const constants = { __DEFAULT_SKELETON_IS_ANIMATED__, __DEFAULT_SKELETON_IS_LOADED__ };

// Hooks
export { useGetSkeletonClasses };

// Components
export { Skeleton };

// Component Types
export type { SkeletonProps, SkeletonRef };
