import { forwardRef, ReactElement } from 'react';

import { motion } from 'framer-motion';
import { pick } from 'lodash-es';

import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from '@components/Animation/common/constants';

import AnimatePresence from '../AnimatePresence';

import {
	__DEFAULT_COLLAPSE_AXIS__,
	__DEFAULT_COLLAPSE_ENDING_HEIGHT__,
	__DEFAULT_COLLAPSE_ENDING_WIDTH__,
	__DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
	__DEFAULT_COLLAPSE_STARTING_HEIGHT__,
	__DEFAULT_COLLAPSE_STARTING_WIDTH__
} from './common/constants';
import { CollapseProps, CollapseRef } from './common/types';

const config = __DEFAULT_TRANSITION_CONFIG__;

const variants = {
	enter: ({
		axis = __DEFAULT_COLLAPSE_AXIS__,
		transition = __DEFAULT_TRANSITION__,
		transitionEnd = __DEFAULT_TRANSITION_END__,
		endingWidth = __DEFAULT_COLLAPSE_ENDING_WIDTH__,
		endingHeight = __DEFAULT_COLLAPSE_ENDING_HEIGHT__,
		isOpacityAnimated = __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__
	}) => ({
		...(isOpacityAnimated && { opacity: 1 }),
		...(axis === 'x'
			? { width: endingWidth, transformOrigin: 'left' }
			: { height: endingHeight, transformOrigin: 'top' }),
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		axis = __DEFAULT_COLLAPSE_AXIS__,
		transition = __DEFAULT_TRANSITION__,
		transitionEnd = __DEFAULT_TRANSITION_END__,
		startingWidth = __DEFAULT_COLLAPSE_STARTING_WIDTH__,
		startingHeight = __DEFAULT_COLLAPSE_STARTING_HEIGHT__,
		isOpacityAnimated = __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__
	}) => ({
		...(isOpacityAnimated && { opacity: 0 }),
		...(axis === 'x'
			? { width: startingWidth, transformOrigin: 'left' }
			: { height: startingHeight, transformOrigin: 'top' }),
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const Collapse = forwardRef<CollapseRef, CollapseProps>(function Collapse(props, ref): ReactElement {
	const {
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		style,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, [
		'axis',
		'transition',
		'transitionEnd',
		'startingWidth',
		'endingWidth',
		'startingHeight',
		'endingHeight',
		'isOpacityAnimated'
	]);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<motion.div
					{...rest}
					{...config}
					ref={ref}
					custom={custom}
					animate={animate}
					variants={variants}
					style={{ overflow: 'hidden', display: 'block', ...style }}
				/>
			) : null}
		</AnimatePresence>
	);
});

export default Collapse;
