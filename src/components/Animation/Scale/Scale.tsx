import { forwardRef, ReactElement, useMemo } from 'react';

import { motion } from 'framer-motion';

import AnimatePresence from '../AnimatePresence';
import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from '../common/constants';
import transitions from '../common/data/transitions';
import { TransitionProps, Variants } from '../common/types';

import { ScaleProps, ScaleRef } from './common/types';

const config = __DEFAULT_TRANSITION_CONFIG__;

const Scale = forwardRef<ScaleRef, ScaleProps>(function Scale(props, ref): ReactElement {
	const {
		axis,
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		transition,
		transitionEnd,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = { transition, transitionEnd };

	const variants = useMemo<Variants<TransitionProps>>(() => {
		return {
			enter: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
				...transitions[axis === 'x' ? 'scale-x' : axis === 'y' ? 'scale-y' : 'scale'].enter,
				transition: { ...transition.enter },
				transitionEnd: { ...transitionEnd.enter }
			}),
			exit: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
				...transitions[axis === 'x' ? 'scale-x' : axis === 'y' ? 'scale-y' : 'scale'].exit,
				transition: { ...transition.exit },
				transitionEnd: { ...transitionEnd.exit }
			})
		};
	}, [axis]);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<motion.div ref={ref} custom={custom} animate={animate} variants={variants} {...config} {...rest} />
			) : null}
		</AnimatePresence>
	);
});

export default Scale;
