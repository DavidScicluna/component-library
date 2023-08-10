import {
	__DEFAULT_GLASS_BLUR__,
	__DEFAULT_GLASS_HAS_BACKGROUND__,
	__DEFAULT_GLASS_IS_BACKDROP__
} from './common/constants';
import { useGetGlassClasses } from './common/hooks';
import type { GlassBlur, GlassProps, GlassRef } from './common/types';
import Glass from './Glass';

export default Glass;

// Constants
export const constants = { __DEFAULT_GLASS_BLUR__, __DEFAULT_GLASS_HAS_BACKGROUND__, __DEFAULT_GLASS_IS_BACKDROP__ };

// Hooks
export { useGetGlassClasses };

// Components
export { Glass };

// Component Types
export type { GlassBlur, GlassProps, GlassRef };
