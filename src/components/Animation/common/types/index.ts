import type { ElementType } from 'react';

import type { Target, TargetAndTransition, Transition } from 'framer-motion';

import type { PolymorphicDefaultElement } from '@common/types';

import type { MotionBoxProps, MotionBoxRef } from '@components/Animation';

type OmittedAnimationCommonProps = 'custom' | 'animate' | 'initial' | 'exit' | 'variants';

export type AnimationCommonProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	MotionBoxProps<Element>,
	OmittedAnimationCommonProps
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

export type AnimationCommonRef<Element extends ElementType = PolymorphicDefaultElement> = MotionBoxRef<Element>;

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
