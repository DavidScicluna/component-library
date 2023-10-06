import * as commonConstants from './common/constants';
import type {
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
import { Collapse, constants as collapseConstants, keys as collapseKeys } from './components/Collapse';
import type { FadeProps, FadeRef } from './components/Fade';
import { Fade, keys as fadeKeys } from './components/Fade';
import type { MotionBoxProps, MotionBoxRef } from './components/MotionBox';
import { MotionBox } from './components/MotionBox';
import type { PageTransitionProps, PageTransitionRef } from './components/PageTransition';
import {
	constants as pageTransitionConstants,
	keys as pageTransitionKeys,
	PageTransition
} from './components/PageTransition';
import type { PopProps, PopRef } from './components/Pop';
import { constants as popConstants, keys as popKeys, Pop } from './components/Pop';
import type { SlideProps, SlideRef } from './components/Slide';
import { constants as slideConstants, keys as slideKeys, Slide } from './components/Slide';

// Constants
export const constants = {
	...commonConstants,
	...collapseConstants,
	...pageTransitionConstants,
	...popConstants,
	...slideConstants
};

// Keys
export const keys = {
	...collapseKeys,
	...fadeKeys,
	...pageTransitionKeys,
	...popKeys,
	...slideKeys
};

// Components
export { AnimatePresence, Collapse, Fade, MotionBox, PageTransition, Pop, Slide };

// Component Types
export type {
	AnimatePresenceProps,
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
