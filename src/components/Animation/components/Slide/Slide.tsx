import { forwardRef, ReactElement } from 'react';

import { pick } from 'lodash-es';

import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from '../../common/constants';
import AnimatePresence from '../AnimatePresence';
import MotionBox from '../MotionBox';

import {
	__DEFAULT_SLIDE_IS_REVERSED__,
	__DEFAULT_SLIDE_OFFSET_X__,
	__DEFAULT_SLIDE_OFFSET_Y__
} from './common/constants';
import type { SlideProps, SlideRef } from './common/types';

const config = { ...__DEFAULT_TRANSITION_CONFIG__, initial: 'initial' };

const variants = {
	initial: ({
		offsetX = __DEFAULT_SLIDE_OFFSET_X__,
		offsetY = __DEFAULT_SLIDE_OFFSET_Y__,
		transition = __DEFAULT_TRANSITION__,
		transitionEnd = __DEFAULT_TRANSITION_END__
	}) => ({
		opacity: 0,
		x: offsetX,
		y: offsetY,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	enter: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
		opacity: 1,
		x: 0,
		y: 0,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		offsetX = __DEFAULT_SLIDE_OFFSET_X__,
		offsetY = __DEFAULT_SLIDE_OFFSET_Y__,
		transition = __DEFAULT_TRANSITION__,
		transitionEnd = __DEFAULT_TRANSITION_END__,
		isReversed = __DEFAULT_SLIDE_IS_REVERSED__
	} = {}) => ({
		...(isReversed
			? { x: offsetX, y: offsetY, transitionEnd: { ...transitionEnd.exit } }
			: { transitionEnd: { x: offsetX, y: offsetY, ...transitionEnd.exit } }),
		opacity: 0,
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const Slide = forwardRef<SlideRef, SlideProps>(function Slide(props, ref): ReactElement {
	const {
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, ['offsetX', 'offsetY', 'transition', 'transitionEnd', 'isReversed']);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox {...rest} {...config} ref={ref} custom={custom} animate={animate} variants={variants} />
			) : null}
		</AnimatePresence>
	);
});

export default Slide;