import type { HTMLMotionProps, Target, TargetAndTransition, Transition } from 'framer-motion';

import { Nullable } from '../../../../common/types';

export type CommonAnimationProps = Omit<HTMLMotionProps<'div'>, 'transition'> & {
	/**
	 * If `true`, the element will unmount when `in={false}` and animation is done
	 */
	unmountOnExit?: boolean;
	/**
	 * Show the component; triggers when enter or exit states
	 */
	in?: boolean;
} & TransitionProps;

export type CommonAnimationRef = Nullable<HTMLDivElement>;

type WithMotionState<P> = Partial<Record<'enter' | 'exit', P>>;

export type TransitionDelay = Partial<{ delay: number }>;
export type TransitionConfig = WithMotionState<Transition & TransitionDelay>;
export type TransitionEndConfig = WithMotionState<Target>;

export type TransitionProps = {
	/**
	 * Custom `transition` definition for `enter` and `exit`
	 */
	transition?: TransitionConfig;
	/**
	 * Custom `transitionEnd` definition for `enter` and `exit`
	 */
	transitionEnd?: TransitionEndConfig;
};

export type TransitionName =
	| 'fade'
	| 'skew-up'
	| 'skew-down'
	| 'rotate-right'
	| 'rotate-left'
	| 'slide-down'
	| 'slide-up'
	| 'slide-right'
	| 'slide-left'
	| 'scale-y'
	| 'scale-x'
	| 'scale'
	| 'pop'
	| 'pop-top-left'
	| 'pop-top-right'
	| 'pop-bottom-left'
	| 'pop-bottom-right';
export type Transitions = Record<TransitionName, WithMotionState<object>>;

type TargetResolver<P = object> = (props: P & TransitionProps) => TargetAndTransition;
type Variant<P = object> = TargetAndTransition | TargetResolver<P>;

export type Variants<P = object> = {
	enter: Variant<P>;
	exit: Variant<P>;
	initial?: Variant<P>;
};

export type SlideDirection = 'top' | 'left' | 'bottom' | 'right';
