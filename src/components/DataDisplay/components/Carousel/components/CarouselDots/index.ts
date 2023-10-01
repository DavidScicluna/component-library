import * as commonConstants from './common/constants';
import * as commonKeys from './common/keys';
import type {
	CarouselDot as CarouselDotType,
	CarouselDots as CarouselDotsType,
	CarouselDotsProps,
	CarouselDotsRef
} from './common/types';
import CarouselDots from './CarouselDots';
import type { CarouselDotProps, CarouselDotRef } from './components';
import { CarouselDot, keys as componentsKeys, useCarouselDotClasses } from './components';

// Constants
export const constants = { ...commonConstants };

// Keys
export const keys = { ...commonKeys, ...componentsKeys };

// Hooks
export { useCarouselDotClasses };

// Components
export { CarouselDot, CarouselDots };

// Component Types
export type { CarouselDotProps, CarouselDotRef, CarouselDotsProps, CarouselDotsRef, CarouselDotsType, CarouselDotType };
