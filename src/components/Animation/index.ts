import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_EASINGS__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from './common/constants';
import {
	CommonAnimationProps,
	CommonAnimationRef,
	TransitionConfig,
	TransitionDelay,
	TransitionEndConfig,
	TransitionProps,
	Variants as TransitionVariants
} from './common/types';
import AnimatePresence from './components/AnimatePresence';
import { AnimatePresenceProps } from './components/AnimatePresence/common/types';
import Collapse from './components/Collapse';
import {
	__DEFAULT_COLLAPSE_AXIS__,
	__DEFAULT_COLLAPSE_ENDING_HEIGHT__,
	__DEFAULT_COLLAPSE_ENDING_WIDTH__,
	__DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
	__DEFAULT_COLLAPSE_STARTING_HEIGHT__,
	__DEFAULT_COLLAPSE_STARTING_WIDTH__
} from './components/Collapse/common/constants';
import {
	CollapseAxis,
	CollapseProps,
	CollapseRef,
	CollapseXAxisProps,
	CollapseYAxisProps
} from './components/Collapse/common/types';
import Fade from './components/Fade';
import { FadeProps, FadeRef } from './components/Fade/common/types';
import MotionBox from './components/MotionBox';
import { MotionBoxProps, MotionBoxRef } from './components/MotionBox/common/types';
import PageTransition from './components/PageTransition';
import { __DEFAULT_PAGE_TRANSITION_BLUR__ } from './components/PageTransition/common/constants';
import { PageTransitionProps, PageTransitionRef } from './components/PageTransition/common/types';
import Pop from './components/Pop';
import { __DEFAULT_POP_INITIAL_SCALE__, __DEFAULT_POP_IS_REVERSED__ } from './components/Pop/common/constants';
import { PopProps, PopRef } from './components/Pop/common/types';
import Slide from './components/Slide';
import {
	__DEFAULT_SLIDE_IS_REVERSED__,
	__DEFAULT_SLIDE_OFFSET_X__,
	__DEFAULT_SLIDE_OFFSET_Y__
} from './components/Slide/common/constants';
import { SlideProps, SlideRef } from './components/Slide/common/types';

export const constants = {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_EASINGS__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
	__DEFAULT_COLLAPSE_AXIS__,
	__DEFAULT_COLLAPSE_ENDING_HEIGHT__,
	__DEFAULT_COLLAPSE_ENDING_WIDTH__,
	__DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
	__DEFAULT_COLLAPSE_STARTING_HEIGHT__,
	__DEFAULT_COLLAPSE_STARTING_WIDTH__,
	__DEFAULT_PAGE_TRANSITION_BLUR__,
	__DEFAULT_POP_INITIAL_SCALE__,
	__DEFAULT_POP_IS_REVERSED__,
	__DEFAULT_SLIDE_IS_REVERSED__,
	__DEFAULT_SLIDE_OFFSET_X__,
	__DEFAULT_SLIDE_OFFSET_Y__
};

// Components
export { AnimatePresence, Collapse, Fade, MotionBox, PageTransition, Pop, Slide };

// Layout Components Types
export type {
	AnimatePresenceProps,
	CollapseAxis,
	CollapseProps,
	CollapseRef,
	CollapseXAxisProps,
	CollapseYAxisProps,
	CommonAnimationProps,
	CommonAnimationRef,
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
