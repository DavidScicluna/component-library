import * as commonConstants from './common/constants';
import { useAspectRatioClasses } from './common/hooks';
import * as commonKeys from './common/keys';
import type { AspectRatioProps, AspectRatioRef } from './common/types';
import AspectRatio from './AspectRatio';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useAspectRatioClasses };

// Components
export { AspectRatio };

// Component Types
export type { AspectRatioProps, AspectRatioRef };
