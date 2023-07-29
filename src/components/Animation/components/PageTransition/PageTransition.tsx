import { forwardRef, ReactElement } from 'react';

import { omit, pick } from 'lodash-es';

import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from '../../common/constants';
import AnimatePresence from '../AnimatePresence';
import MotionBox from '../MotionBox';

import { __DEFAULT_PAGE_TRANSITION_BLUR__ } from './common/constants';
import type { PageTransitionProps, PageTransitionRef } from './common/types';

const config = __DEFAULT_TRANSITION_CONFIG__;

const variants = {
	enter: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
		width: '100%',
		height: '100%',
		filter: 'blur(0px)',
		opacity: 1,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		blur = __DEFAULT_PAGE_TRANSITION_BLUR__,
		transition = __DEFAULT_TRANSITION__,
		transitionEnd = __DEFAULT_TRANSITION_END__
	} = {}) => ({
		width: '100%',
		height: '100%',
		filter: `blur(${blur}px)`,
		opacity: 0,
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const pickedProps = ['blur', 'transition', 'transitionEnd'];
const omittedProps = ['blur', 'transition', 'transitionEnd'];

const PageTransition = forwardRef<PageTransitionRef, PageTransitionProps>(function PageTransition(
	props,
	ref
): ReactElement {
	const {
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, pickedProps);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox
					{...omit({ ...rest }, omittedProps)}
					{...config}
					ref={ref}
					custom={custom}
					animate={animate}
					variants={variants}
				/>
			) : null}
		</AnimatePresence>
	);
});

export default PageTransition;
