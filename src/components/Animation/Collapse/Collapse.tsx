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
import { TransitionProps, Variants } from '../common/types';

import {
	__DEFAULT_COLLAPSE_ENDING_HEIGHT__,
	__DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
	__DEFAULT_COLLAPSE_STARTING_HEIGHT__
} from './common/constants';
import { CollapseProps, CollapseRef } from './common/types';

const config = __DEFAULT_TRANSITION_CONFIG__;

const Collapse = forwardRef<CollapseRef, CollapseProps>(function Collapse(props, ref): ReactElement {
	const {
		isOpacityAnimated = __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
		startingHeight = __DEFAULT_COLLAPSE_STARTING_HEIGHT__,
		endingHeight = __DEFAULT_COLLAPSE_ENDING_HEIGHT__,
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		transition,
		transitionEnd,
		style,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = { transition, transitionEnd };

	const variants = useMemo<Variants<TransitionProps>>(() => {
		return {
			enter: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
				...(isOpacityAnimated && { opacity: 1 }),
				height: endingHeight,
				transition: { ...transition.enter },
				transitionEnd: { ...transitionEnd.enter }
			}),
			exit: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
				...(isOpacityAnimated && { opacity: 0 }),
				height: startingHeight,
				transition: { ...transition.exit },
				transitionEnd: { ...transitionEnd.exit }
			})
		};
	}, [isOpacityAnimated, startingHeight, endingHeight]);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<motion.div
					ref={ref}
					custom={custom}
					animate={animate}
					variants={variants}
					style={{ overflow: 'hidden', display: 'block', ...style }}
					{...config}
					{...rest}
				/>
			) : null}
		</AnimatePresence>
	);
});

export default Collapse;
