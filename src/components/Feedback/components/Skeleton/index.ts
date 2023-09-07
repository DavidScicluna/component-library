import * as commonConstants from './common/constants';
import { useSkeletonClasses } from './common/hooks';
import * as commonKeys from './common/keys';
import type { SkeletonProps, SkeletonRef } from './common/types';
import Skeleton from './Skeleton';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useSkeletonClasses };

// Components
export { Skeleton };

// Component Types
export type { SkeletonProps, SkeletonRef };
