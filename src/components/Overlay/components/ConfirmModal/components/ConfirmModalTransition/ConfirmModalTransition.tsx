/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { omit } from 'lodash-es';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { constants } from '@components/Animation';

import {
	__DEFAULT_CONFIRM_MODAL_TRANSITION_INITIAL_SCALE__,
	__DEFAULT_CONFIRM_MODAL_TRANSITION_TRANSITION__,
	__DEFAULT_CONFIRM_MODAL_TRANSITION_VARIANT__
} from './common/constants';
import { __KEYS_CONFIRM_MODAL_TRANSITION__, __KEYS_CONFIRM_MODAL_TRANSITION_CLASS__ } from './common/keys';
import type { ConfirmModalTransitionProps, ConfirmModalTransitionRef } from './common/types';

const { __DEFAULT_ANIMATION_TRANSITION_CONFIG__, __DEFAULT_ANIMATION_TRANSITION_END__, __DEFAULT_ANIMATION_IN__ } =
	constants;

const config = __DEFAULT_ANIMATION_TRANSITION_CONFIG__;

const popVariant = {
	enter: ({
		transition = __DEFAULT_CONFIRM_MODAL_TRANSITION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 1,
		scale: 1,
		transformOrigin: 'center',
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		transition = __DEFAULT_CONFIRM_MODAL_TRANSITION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 0,
		scale: __DEFAULT_CONFIRM_MODAL_TRANSITION_INITIAL_SCALE__,
		transformOrigin: 'center',
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};
const fadeVariant = {
	enter: ({
		transition = __DEFAULT_CONFIRM_MODAL_TRANSITION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 1,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		transition = __DEFAULT_CONFIRM_MODAL_TRANSITION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__
	} = {}) => ({
		opacity: 0,
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const ConfirmModalTransition = forwardRef<ConfirmModalTransitionRef, ConfirmModalTransitionProps>(
	function ConfirmModalTransition(props, ref): ReactElement {
		const {
			children,
			className = __DEFAULT_CLASSNAME__,
			in: isOpen = __DEFAULT_ANIMATION_IN__,
			variant = __DEFAULT_CONFIRM_MODAL_TRANSITION_VARIANT__,
			...rest
		} = props;

		return (
			<motion.section
				{...omit({ ...rest }, __KEYS_CONFIRM_MODAL_TRANSITION__)}
				{...(config as any)}
				key={`${__DEFAULT_CLASS_PREFIX__}-confirm-modal-transition-${variant}`}
				ref={ref}
				className={classNames(__KEYS_CONFIRM_MODAL_TRANSITION_CLASS__, { [className]: !!className })}
				animate={isOpen ? 'enter' : 'exit'}
				variants={variant === 'pop' ? popVariant : fadeVariant}
			>
				{children}
			</motion.section>
		);
	}
);

ConfirmModalTransition.displayName = 'ConfirmModalTransition';

export default ConfirmModalTransition;
