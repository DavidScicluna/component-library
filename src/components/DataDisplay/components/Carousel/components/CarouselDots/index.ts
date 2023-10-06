import * as commonKeys from './common/keys';
import type {
	CarouselDot as CarouselDotType,
	CarouselDots as CarouselDotsType,
	CarouselDotsProps,
	CarouselDotsRef
} from './common/types';
import CarouselDots from './CarouselDots';
import type { CarouselDotProps, CarouselDotRef } from './components';
import { CarouselDot, hooks as componentsHooks, keys as componentsKeys } from './components';

// Constants
export * as constants from './common/constants';

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export const hooks = { ...componentsHooks };

// Components
export { CarouselDot, CarouselDots };

// Component Types
export type { CarouselDotProps, CarouselDotRef, CarouselDotsProps, CarouselDotsRef, CarouselDotsType, CarouselDotType };
