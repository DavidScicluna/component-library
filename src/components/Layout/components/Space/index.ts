import * as commonConstants from './common/constants';
import { useGetSpaceClasses } from './common/hooks';
import * as commonKeys from './common/keys';
import type { SpaceProps, SpaceRef } from './common/types';
import Space from './Space';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useGetSpaceClasses };

// Components
export { Space };

// Component Types
export type { SpaceProps, SpaceRef };
