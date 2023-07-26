import { forwardRef, ReactElement } from 'react';

import { pick } from 'lodash-es';

import { constants } from '@components/Animation';

import AnimatePresence from '../AnimatePresence';
import MotionBox from '../MotionBox';

import type { FadeProps, FadeRef } from './common/types';

const {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} = constants;

const config = __DEFAULT_TRANSITION_CONFIG__;

const variants = {
	enter: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
		opacity: 1,
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
		opacity: 0,
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const Fade = forwardRef<FadeRef, FadeProps>(function Fade(props, ref): ReactElement {
	const {
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, ['transition', 'transitionEnd']);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox {...rest} {...config} ref={ref} custom={custom} animate={animate} variants={variants} />
			) : null}
		</AnimatePresence>
	);
});

export default Fade;
