import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import { __KEYS_MOTION_BOX_CLASS__ } from './common/keys';
import type { MotionBoxProps, MotionBoxRef } from './common/types';

// The reason for the any is to fix the ref type bug
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomBox: any = motion(Box);

const MotionBox = forwardRef(function MotionBox<Element extends ElementType>(
	props: MotionBoxProps<Element>,
	ref: MotionBoxRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<CustomBox<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_MOTION_BOX_CLASS__, { [className]: !!className })}
		>
			{children}
		</CustomBox>
	);
});

MotionBox.displayName = 'MotionBox';

export default MotionBox;
