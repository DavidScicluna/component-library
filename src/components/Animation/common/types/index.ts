import type { ElementType } from 'react';

import type { Target, TargetAndTransition, Transition } from 'framer-motion';

import type { MotionBoxProps, MotionBoxRef } from '@components/Animation';

type OmittedCommonAnimationProps = 'custom' | 'animate' | 'initial' | 'exit' | 'variants';

export type CommonAnimationProps<Element extends ElementType> = Omit<
	MotionBoxProps<Element>,
	OmittedCommonAnimationProps
> & {
	/**
	 * If `true`, the element will unmount when `in={false}` and animation is done
	 * @default true
	 */
	unmountOnExit?: boolean;
	/**
	 * If `true`, the animation will animate in, if `false` the animation will animate out
	 * @default false
	 */
	in?: boolean;
};

export type CommonAnimationRef<Element extends ElementType> = MotionBoxRef<Element>;

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
type TransitionVariant<P = object> = TargetAndTransition | TargetResolver<P>;

export type TransitionVariants<P = object> = {
	enter: TransitionVariant<P>;
	exit: TransitionVariant<P>;
	initial?: TransitionVariant<P>;
};
