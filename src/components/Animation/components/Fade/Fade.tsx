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

import { __KEYS_FADE__, __KEYS_FADE_CLASS__ } from './common/keys';
import type { FadeProps, FadeRef } from './common/types';

const config = __DEFAULT_ANIMATION_TRANSITION_CONFIG__;

const variants = {
	enter: ({
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 1,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 0,
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const Fade = forwardRef(function Fade<Element extends ElementType>(
	props: FadeProps<Element>,
	ref: FadeRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		in: isOpen = __DEFAULT_ANIMATION_IN__,
		unmountOnExit = __DEFAULT_ANIMATION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, __KEYS_FADE__);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox<Element>
					{...omit({ ...rest }, __KEYS_FADE__)}
					{...config}
					ref={ref}
					className={classNames(__KEYS_FADE_CLASS__, { [className]: !!className })}
					custom={custom}
					animate={animate}
					variants={variants}
				/>
			) : null}
		</AnimatePresence>
	);
});

Fade.displayName = 'Fade';

export default Fade;
