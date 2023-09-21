import * as commonConstants from './common/constants';
import { useLinkClasses } from './common/hooks';
import * as commonKeys from './common/keys';
import type { LinkDefaultElement, LinkElement, LinkMouseEvent, LinkProps, LinkRef } from './common/types';
import Link from './Link';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys };

// Hooks
export { useLinkClasses };

// Components
export { Link };

// Component Types
export type { LinkDefaultElement, LinkElement, LinkMouseEvent, LinkProps, LinkRef };
