import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { keys } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_DURATION__, __DEFAULT_EASING__ } from '@common/constants';
import { delays, durations } from '@common/data';
import type {
	AnimationConfig,
	AnimationDelay,
	AnimationDuration,
	AnimationEasing,
	PolymorphicElementType
} from '@common/types';
import { getAnimationConfig, getAnimationDelay, getAnimationDuration, getAnimationEasings } from '@common/utils';

import { AnimatePresence } from '@components/Animation';
import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from './common/constants';
import { transitions } from './common/data';
import { useTransitionResponsiveValues } from './common/hooks';
import { __KEYS_TRANSITION_CLASS__ } from './common/keys';
import type { TransitionProps, TransitionRef, TransitionVariant } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionBox: any = motion(Box);

const Transition = forwardRef(function Transition<Element extends PolymorphicElementType>(
	props: TransitionProps<Element>,
	ref: TransitionRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		config: configProp,
		delay: delayProp,
		duration: durationProp = __DEFAULT_DURATION__,
		easing: easingProp = __DEFAULT_EASING__,
		in: isAnimatedProp = __DEFAULT_TRANSITION_IN__,
		transition: transitionProp = __DEFAULT_TRANSITION__,
		unmountOnExit: unmountOnExitProp = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		onExitComplete,
		// onExited,
		// onExit,
		// onEnter,
		// onEntered,
		...rest
	} = props;

	const {
		config,
		delay,
		duration,
		easing,
		in: isAnimated,
		transition,
		unmountOnExit
	} = useTransitionResponsiveValues<Element>({
		config: configProp,
		delay: delayProp,
		duration: durationProp,
		easing: easingProp,
		in: isAnimatedProp,
		transition: transitionProp,
		unmountOnExit: unmountOnExitProp
	});

	const isVisible = unmountOnExit ? isAnimated && unmountOnExit : true;

	const delayNum = useMemo<AnimationDelay>(() => {
		if (delay) {
			if (typeof delay === 'string' && delays.includes(delay)) {
				return getAnimationDelay(delay);
			} else {
				return delay as AnimationDelay;
			}
		} else {
			return 0;
		}
	}, [delay]);
	const durationNum = useMemo<AnimationDuration>(() => {
		if (typeof duration === 'string' && durations.includes(duration)) {
			return getAnimationDuration(duration);
		} else {
			return duration as AnimationDuration;
		}
	}, [duration]);
	const easingArr = useMemo<AnimationEasing>(() => getAnimationEasings(easing), [easing]);
	const configObj = useMemo<AnimationConfig>(() => {
		return { ...getAnimationConfig(), delay: delayNum, duration: durationNum, ease: easingArr };
	}, [delayNum, durationNum, easingArr]);

	const variants = useMemo<TransitionVariant>(() => {
		if (typeof transition === 'string' && keys(transitions).includes(transition)) {
			return transitions[transition];
		} else {
			return transition as TransitionVariant;
		}
	}, [transition]);

	return (
		<AnimatePresence onExitComplete={onExitComplete}>
			{isVisible ? (
				<MotionBox
					{...(rest as BoxProps<Element>)}
					ref={ref}
					className={classNames(__KEYS_TRANSITION_CLASS__, { [className]: !!className })}
					initial='exit'
					animate={isAnimated || unmountOnExit ? 'enter' : 'exit'}
					exit='exit'
					transition={config || configObj}
					variants={variants}
				>
					{children}
				</MotionBox>
			) : null}
		</AnimatePresence>
	);
});

// Transition.displayName = 'Transition';

export default Transition;
