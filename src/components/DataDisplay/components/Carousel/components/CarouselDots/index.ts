import * as common_keys from './common/keys';
import type {
	CarouselDot as CarouselDotType,
	CarouselDots as CarouselDotsType,
	CarouselDotsProps,
	CarouselDotsRef
} from './common/types';
import CarouselDots from './CarouselDots';
import type { CarouselDotProps, CarouselDotRef } from './components';
import { CarouselDot, hooks as components_hooks, keys as components_keys } from './components';

// Constants
export * as constants from './common/constants';

// Keys
export const keys = { ...common_keys, ...components_keys };

// Hooks
export const hooks = { ...components_hooks };

// Components
export { CarouselDot, CarouselDots };

// Component Types
export type { CarouselDotProps, CarouselDotRef, CarouselDotsProps, CarouselDotsRef, CarouselDotsType, CarouselDotType };
