import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { omit, pick } from 'lodash-es';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import {
	__DEFAULT_ANIMATION_IN__,
	__DEFAULT_ANIMATION_TRANSITION__,
	__DEFAULT_ANIMATION_TRANSITION_CONFIG__,
	__DEFAULT_ANIMATION_TRANSITION_END__,
	__DEFAULT_ANIMATION_UNMOUNT_ON_EXIT__
} from '../../common/constants';
import { AnimatePresence } from '../AnimatePresence';
import { MotionBox } from '../MotionBox';

import { __DEFAULT_POP_INITIAL_SCALE__, __DEFAULT_POP_IS_REVERSED__ } from './common/constants';
import { __KEYS_POP__, __KEYS_POP_CLASS__ } from './common/keys';
import type { PopProps, PopRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const config = __DEFAULT_ANIMATION_TRANSITION_CONFIG__;

const variants = {
	enter: ({
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		scale: 1,
		opacity: 1,
		transformOrigin: 'center',
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__,
		initialScale = __DEFAULT_POP_INITIAL_SCALE__,
		isReversed = __DEFAULT_POP_IS_REVERSED__
	} = {}) => ({
		...(isReversed
			? { scale: initialScale, transitionEnd: { ...transitionEnd.exit } }
			: { transitionEnd: { scale: initialScale, ...transitionEnd.exit } }),
		opacity: 0,
		transformOrigin: 'center',
		transition: { ...transition.exit }
	})
};

const Pop = forwardRef(function Pop<Element extends ElementType = PolymorphicDefaultElement>(
	props: PopProps<Element>,
	ref: PopRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		in: isOpen = __DEFAULT_ANIMATION_IN__,
		unmountOnExit = __DEFAULT_ANIMATION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, __KEYS_POP__);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox<Element>
					{...omit({ ...rest }, __KEYS_POP__)}
					{...config}
					ref={ref}
					className={classNames(__KEYS_POP_CLASS__, { [className]: !!className })}
					custom={custom}
					animate={animate}
					variants={variants}
				/>
			) : null}
		</AnimatePresence>
	);
});

Pop.displayName = 'Pop';

export default Pop;
