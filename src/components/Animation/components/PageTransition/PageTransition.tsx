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
import AnimatePresence from '../AnimatePresence';
import MotionBox from '../MotionBox';

import { __DEFAULT_PAGE_TRANSITION_BLUR__ } from './common/constants';
import otherProps from './common/keys';
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

const PageTransition = forwardRef<PageTransitionRef, PageTransitionProps>(function PageTransition(
	props,
	ref
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, otherProps);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox
					{...omit({ ...rest }, otherProps)}
					{...config}
					ref={ref}
					className={classNames(`${__DEFAULT_CLASS_PREFIX__}-page-transition`, { [className]: !!className })}
					custom={custom}
					animate={animate}
					variants={variants}
				/>
			) : null}
		</AnimatePresence>
	);
});

export default PageTransition;
