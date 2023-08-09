import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import type { MotionBoxProps, MotionBoxRef } from './common/types';

// The reason for the any is to fix the ref type bug
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomBox: any = motion(Box);

const MotionBox = forwardRef<MotionBoxRef, MotionBoxProps>(function MotionBox(props, ref): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<CustomBox
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-motion-box`, { [className]: !!className })}
		>
			{children}
		</CustomBox>
	);
});

export default MotionBox;
