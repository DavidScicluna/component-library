import { __DEFAULT_ICON_CATEGORY__, __DEFAULT_ICON_VARIANT__ } from './common/constants';
import { useGetIconClasses } from './common/hooks';
import type { IconCategory, IconDefaultElement, IconElement, IconProps, IconRef, IconVariant } from './common/types';
import Icon from './Icon';

// Constants
export const constants = { __DEFAULT_ICON_CATEGORY__, __DEFAULT_ICON_VARIANT__ };

// Hooks
export { useGetIconClasses };

// Components
export { Icon };

// Component Types
export type { IconCategory, IconDefaultElement, IconElement, IconProps, IconRef, IconVariant };
