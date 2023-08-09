import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { omit, pick } from 'lodash-es';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from '../../common/constants';
import { AnimatePresence } from '../AnimatePresence';
import { MotionBox } from '../MotionBox';

import { __DEFAULT_POP_INITIAL_SCALE__, __DEFAULT_POP_IS_REVERSED__ } from './common/constants';
import { __KEYS_POP__ } from './common/keys';
import type { PopProps, PopRef } from './common/types';

const config = __DEFAULT_TRANSITION_CONFIG__;

const variants = {
	enter: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
		opacity: 1,
		scale: 1,
		transformOrigin: 'center',
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		transition = __DEFAULT_TRANSITION__,
		transitionEnd = __DEFAULT_TRANSITION_END__,
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

const Pop = forwardRef<PopRef, PopProps>(function Pop(props, ref): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, __KEYS_POP__);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox
					{...omit({ ...rest }, __KEYS_POP__)}
					{...config}
					ref={ref}
					className={classNames(`${__DEFAULT_CLASS_PREFIX__}-pop`, { [className]: !!className })}
					custom={custom}
					animate={animate}
					variants={variants}
				/>
			) : null}
		</AnimatePresence>
	);
});

export default Pop;
