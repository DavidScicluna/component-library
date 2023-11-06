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

import {
	__DEFAULT_COLLAPSE_AXIS__,
	__DEFAULT_COLLAPSE_ENDING_HEIGHT__,
	__DEFAULT_COLLAPSE_ENDING_WIDTH__,
	__DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__,
	__DEFAULT_COLLAPSE_STARTING_HEIGHT__,
	__DEFAULT_COLLAPSE_STARTING_WIDTH__
} from './common/constants';
import {
	__KEYS_COLLAPSE__,
	__KEYS_COLLAPSE_CLASS__,
	__KEYS_COLLAPSE_X_AXIS__,
	__KEYS_COLLAPSE_Y_AXIS__
} from './common/keys';
import type { CollapseProps, CollapseRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const config = __DEFAULT_ANIMATION_TRANSITION_CONFIG__;

const variants = {
	enter: ({
		axis = __DEFAULT_COLLAPSE_AXIS__,
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__,
		endingWidth = __DEFAULT_COLLAPSE_ENDING_WIDTH__,
		endingHeight = __DEFAULT_COLLAPSE_ENDING_HEIGHT__,
		isOpacityAnimated = __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__
	}) => ({
		...(isOpacityAnimated && { opacity: 1 }),
		...(axis === 'x'
			? { width: endingWidth, transformOrigin: 'left' }
			: { height: endingHeight, transformOrigin: 'top' }),
		transition: { ...transition.enter },
		transitionEnd: { ...transitionEnd.enter }
	}),
	exit: ({
		axis = __DEFAULT_COLLAPSE_AXIS__,
		transition = __DEFAULT_ANIMATION_TRANSITION__,
		transitionEnd = __DEFAULT_ANIMATION_TRANSITION_END__,
		startingWidth = __DEFAULT_COLLAPSE_STARTING_WIDTH__,
		startingHeight = __DEFAULT_COLLAPSE_STARTING_HEIGHT__,
		isOpacityAnimated = __DEFAULT_COLLAPSE_IS_OPACITY_ANIMATED__
	}) => ({
		...(isOpacityAnimated && { opacity: 0 }),
		...(axis === 'x'
			? { width: startingWidth, transformOrigin: 'left' }
			: { height: startingHeight, transformOrigin: 'top' }),
		transition: { ...transition.exit },
		transitionEnd: { ...transitionEnd.exit }
	})
};

const Collapse = forwardRef(function Collapse<Element extends ElementType = PolymorphicDefaultElement>(
	props: CollapseProps<Element>,
	ref: CollapseRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		in: isOpen = __DEFAULT_ANIMATION_IN__,
		unmountOnExit = __DEFAULT_ANIMATION_UNMOUNT_ON_EXIT__,
		style,
		...rest
	} = props;

	const animate = isOpen || unmountOnExit ? 'enter' : 'exit';
	const isVisible = unmountOnExit ? isOpen && unmountOnExit : true;

	const custom = pick({ ...rest }, [...__KEYS_COLLAPSE__, ...__KEYS_COLLAPSE_X_AXIS__, ...__KEYS_COLLAPSE_Y_AXIS__]);

	return (
		<AnimatePresence custom={custom}>
			{isVisible ? (
				<MotionBox<Element>
					{...omit({ ...rest }, [
						...__KEYS_COLLAPSE__,
						...__KEYS_COLLAPSE_X_AXIS__,
						...__KEYS_COLLAPSE_Y_AXIS__
					])}
					{...config}
					ref={ref}
					className={classNames(__KEYS_COLLAPSE_CLASS__, { [className]: !!className })}
					custom={custom}
					animate={animate}
					variants={variants}
					style={{ overflow: 'hidden', display: 'block', ...style }}
				/>
			) : null}
		</AnimatePresence>
	);
});

Collapse.displayName = 'Collapse';

export default Collapse;
