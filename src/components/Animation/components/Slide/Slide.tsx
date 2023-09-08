import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { omit, pick } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import {
	__DEFAULT_ANIMATION_IN__,
	__DEFAULT_ANIMATION_TRANSITION__,
	__DEFAULT_ANIMATION_TRANSITION_CONFIG__,
	__DEFAULT_ANIMATION_TRANSITION_END__,
	__DEFAULT_ANIMATION_UNMOUNT_ON_EXIT__
} from '../../common/constants';
import { AnimatePresence } from '../AnimatePresence';
import { MotionBox } from '../MotionBox';

import {
	__DEFAULT_SLIDE_IS_REVERSED__,
	__DEFAULT_SLIDE_OFFSET_X__,
	__DEFAULT_SLIDE_OFFSET_Y__
} from './common/constants';
import { __KEYS_SLIDE__, __KEYS_SLIDE_CLASS__ } from './common/keys';
import type { SlideProps, SlideRef } from './common/types';

const config = { ...__DEFAULT_ANIMATION_TRANSITION_CONFIG__, initial: 'initial' };

const variants = {
	initial: ({
		offsetX = __DEFAULT_SLIDE_OFFSET_X__,
		offsetY = __DEFAULT_SLIDE_OFFSET_Y__,
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	}) => ({
		opacity: 0,
		x: offsetX,
		y: offsetY,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	enter: ({
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 1,
		x: 0,
		y: 0,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		offsetX = __DEFAULT_SLIDE_OFFSET_X__,
		offsetY = __DEFAULT_SLIDE_OFFSET_Y__,
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__,
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

const Slide = forwardRef(function Slide<Element extends ElementType>(
	props: SlideProps<Element>,
	ref: SlideRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		in: isOpen = __DEFAULT_ANIMATION_IN__,
		unmountOnExit = __DEFAULT_ANIMATION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, __KEYS_SLIDE__);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox<Element>
					{...omit({ ...rest }, __KEYS_SLIDE__)}
					{...config}
					ref={ref}
					className={classNames(__KEYS_SLIDE_CLASS__, { [className]: !!className })}
					custom={custom}
					animate={animate}
					variants={variants}
				/>
			) : null}
		</AnimatePresence>
	);
});

export default Slide;
