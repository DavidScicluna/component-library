import type { HTMLMotionProps, Target, TargetAndTransition, Transition } from 'framer-motion';

import type { Nullable } from '@common/types';

export type CommonAnimationProps = TransitionProps & {
	/**
	 * If `true`, the element will unmount when `in={false}` and animation is done
	 */
	unmountOnExit?: boolean;
	/**
	 * Show the component; triggers when enter or exit states
	 */
	in?: boolean;
} & Omit<HTMLMotionProps<'div'>, 'custom' | 'animate' | 'initial' | 'exit' | 'transition' | 'variants'>;

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

type TargetResolver<P = object> = (props: P & TransitionProps) => TargetAndTransition;
type Variant<P = object> = TargetAndTransition | TargetResolver<P>;

export type Variants<P = object> = {
	enter: Variant<P>;
	exit: Variant<P>;
	initial?: Variant<P>;
};

export type SlideDirection = 'top' | 'left' | 'bottom' | 'right';
