import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
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

import { __DEFAULT_PAGE_TRANSITION_BLUR__ } from './common/constants';
import { __KEYS_PAGE_TRANSITION__, __KEYS_PAGE_TRANSITION_CLASS__ } from './common/keys';
import type { PageTransitionProps, PageTransitionRef } from './common/types';

const config = __DEFAULT_ANIMATION_TRANSITION_CONFIG__;

const variants = {
	enter: ({
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		width: '100%',
		height: '100%',
		filter: 'blur(0px)',
		opacity: 1,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		blur = __DEFAULT_PAGE_TRANSITION_BLUR__,
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		width: '100%',
		height: '100%',
		filter: `blur(${blur}px)`,
		opacity: 0,
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const PageTransition = forwardRef(function PageTransition<Element extends ElementType = PolymorphicDefaultElement>(
	props: PageTransitionProps<Element>,
	ref: PageTransitionRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		in: isOpen = __DEFAULT_ANIMATION_IN__,
		unmountOnExit = __DEFAULT_ANIMATION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, __KEYS_PAGE_TRANSITION__);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox<Element>
					{...omit({ ...rest }, __KEYS_PAGE_TRANSITION__)}
					{...config}
					ref={ref}
					className={classNames(__KEYS_PAGE_TRANSITION_CLASS__, { [className]: !!className })}
					custom={custom}
					animate={animate}
					variants={variants}
				/>
			) : null}
		</AnimatePresence>
	);
});

PageTransition.displayName = 'PageTransition';

export default PageTransition;
