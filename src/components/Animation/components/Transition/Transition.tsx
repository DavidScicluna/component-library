import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { keys } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_DURATION, DEFAULT_EASING } from '@common/constants';
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
import { Box } from '@components/Box';

import { DEFAULT_TRANSITION, DEFAULT_TRANSITION_IN, DEFAULT_TRANSITION_UNMOUNT_ON_EXIT } from './common/constants';
import { transitions } from './common/data';
import { useTransitionResponsiveValues } from './common/hooks';
import { KEYS_TRANSITION_CLASS } from './common/keys';
import type { TransitionProps, TransitionRef, TransitionVariant } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionBox: any = motion(Box);

const Transition = forwardRef(function Transition<Element extends PolymorphicElementType>(
	props: TransitionProps<Element>,
	ref: TransitionRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		config: configProp,
		delay: delayProp,
		duration: durationProp = DEFAULT_DURATION,
		easing: easingProp = DEFAULT_EASING,
		in: isAnimatedProp = DEFAULT_TRANSITION_IN,
		transition: transitionProp = DEFAULT_TRANSITION,
		unmountOnExit: unmountOnExitProp = DEFAULT_TRANSITION_UNMOUNT_ON_EXIT,
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
					{...rest}
					ref={ref}
					className={classNames(KEYS_TRANSITION_CLASS, { [className]: !!className })}
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
