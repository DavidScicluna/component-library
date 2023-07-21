import { forwardRef, ReactElement } from 'react';

import { motion } from 'framer-motion';

import { useConst } from '../../../common/hooks';
import AnimatePresence from '../AnimatePresence';
import {
	__DEFAULT_TRANSITION__,
	__DEFAULT_TRANSITION_CONFIG__,
	__DEFAULT_TRANSITION_END__,
	__DEFAULT_TRANSITION_IN__,
	__DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__
} from '../common/constants';
import transitions from '../common/data/transitions';
import { TransitionProps, Variants } from '../common/types';

import { FadeProps, FadeRef } from './common/types';

const config = __DEFAULT_TRANSITION_CONFIG__;

const Fade = forwardRef<FadeRef, FadeProps>(function Fade(props, ref): ReactElement {
	const {
		in: isOpen = __DEFAULT_TRANSITION_IN__,
		unmountOnExit = __DEFAULT_TRANSITION_UNMOUNT_ON_EXIT__,
		transition,
		transitionEnd,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = { transition, transitionEnd };

	const variants = useConst<Variants<TransitionProps>>({
		enter: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
			...transitions.fade.enter,
			transition: { ...transition.enter },
			transitionEnd: { ...transitionEnd.enter }
		}),
		exit: ({ transition = __DEFAULT_TRANSITION__, transitionEnd = __DEFAULT_TRANSITION_END__ } = {}) => ({
			...transitions.fade.exit,
			transition: { ...transition.exit },
			transitionEnd: { ...transitionEnd.exit }
		})
	});

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<motion.div ref={ref} custom={custom} animate={animate} variants={variants} {...config} {...rest} />
			) : null}
		</AnimatePresence>
	);
});

export default Fade;
