import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { constants, MotionBox } from '@components/Animation';

import { __KEYS_TOOLTIP_TRANSITION_CLASS__ } from './common/keys';
import type { TooltipTransitionProps, TooltipTransitionRef } from './common/types';

const {
	__DEFAULT_ANIMATION_TRANSITION__,
	__DEFAULT_ANIMATION_TRANSITION_CONFIG__,
	__DEFAULT_ANIMATION_TRANSITION_END__
	// __DEFAULT_POP_INITIAL_SCALE__
} = constants;

const config = __DEFAULT_ANIMATION_TRANSITION_CONFIG__;

const variants = {
	enter: ({
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 1,
		// scale: 1,
		// transformOrigin: 'center',
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 0,
		// scale: __DEFAULT_POP_INITIAL_SCALE__,
		// transformOrigin: 'center',
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const TooltipTransition = forwardRef(function TooltipTransition<Element extends ElementType>(
	props: TooltipTransitionProps<Element>,
	ref: TooltipTransitionRef<Element>
): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<MotionBox<Element>
			{...rest}
			{...config}
			ref={ref}
			className={classNames(__KEYS_TOOLTIP_TRANSITION_CLASS__, { [className]: !!className })}
			variants={variants}
		/>
	);
});

export default TooltipTransition;
