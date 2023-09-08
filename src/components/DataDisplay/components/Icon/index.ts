import * as commonConstants from './common/constants';
import { useIconClasses } from './common/hooks';
import * as commonKeys from './common/keys';
import type { IconCategory, IconDefaultElement, IconElement, IconProps, IconRef, IconVariant } from './common/types';
import Icon from './Icon';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useIconClasses };

// Components
export { Icon };

// Component Types
export type { IconCategory, IconDefaultElement, IconElement, IconProps, IconRef, IconVariant };
