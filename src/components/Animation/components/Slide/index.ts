import {
	__DEFAULT_SLIDE_IS_REVERSED__,
	__DEFAULT_SLIDE_OFFSET_X__,
	__DEFAULT_SLIDE_OFFSET_Y__
} from './common/constants';
import { __KEYS_SLIDE__ } from './common/keys';
import type { SlideProps, SlideRef } from './common/types';
import Slide from './Slide';

// Constants
export const constants = { __DEFAULT_SLIDE_IS_REVERSED__, __DEFAULT_SLIDE_OFFSET_X__, __DEFAULT_SLIDE_OFFSET_Y__ };

// Keys
export const keys = { __KEYS_SLIDE__ };

// Components
export { Slide };

// Component Types
export type { SlideProps, SlideRef };
