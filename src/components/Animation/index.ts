import * as common_constants from './common/constants';
import type {
	AnimationCommonProps,
	AnimationCommonRef,
	TransitionConfig,
	TransitionDelay,
	TransitionEndConfig,
	TransitionProps,
	TransitionVariants
} from './common/types';
import type { AnimatePresenceProps } from './components/AnimatePresence';
import { AnimatePresence } from './components/AnimatePresence';
import type {
	CollapseAxis,
	CollapseProps,
	CollapseRef,
	CollapseXAxisProps,
	CollapseYAxisProps
} from './components/Collapse';
import { Collapse, constants as collapse_constants, keys as collapse_keys } from './components/Collapse';
import type { FadeProps, FadeRef } from './components/Fade';
import { Fade, keys as fade_keys } from './components/Fade';
import type { MotionBoxProps, MotionBoxRef } from './components/MotionBox';
import { MotionBox } from './components/MotionBox';
import type { PageTransitionProps, PageTransitionRef } from './components/PageTransition';
import {
	constants as page_transition_constants,
	keys as page_transition_keys,
	PageTransition
} from './components/PageTransition';
import type { PopProps, PopRef } from './components/Pop';
import { constants as pop_constants, keys as pop_keys, Pop } from './components/Pop';
import type { SlideProps, SlideRef } from './components/Slide';
import { constants as slide_constants, keys as slide_keys, Slide } from './components/Slide';

// Constants
export const constants = {
	...common_constants,
	...collapse_constants,
	...page_transition_constants,
	...pop_constants,
	...slide_constants
};

// Keys
export const keys = {
	...collapse_keys,
	...fade_keys,
	...page_transition_keys,
	...pop_keys,
	...slide_keys
};

// Components
export { AnimatePresence, Collapse, Fade, MotionBox, PageTransition, Pop, Slide };

// Component Types
export type {
	AnimatePresenceProps,
	AnimationCommonProps,
	AnimationCommonRef,
	CollapseAxis,
	CollapseProps,
	CollapseRef,
	CollapseXAxisProps,
	CollapseYAxisProps,
	FadeProps,
	FadeRef,
	MotionBoxProps,
	MotionBoxRef,
	PageTransitionProps,
	PageTransitionRef,
	PopProps,
	PopRef,
	SlideProps,
	SlideRef,
	TransitionConfig,
	TransitionDelay,
	TransitionEndConfig,
	TransitionProps,
	TransitionVariants
};
