import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import Box from '@components/Box';

import type { MotionBoxProps, MotionBoxRef } from './common/types';

// The reason for the any is to fix the ref type bug
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomBox: any = motion(Box);

const MotionBox = forwardRef<MotionBoxRef, MotionBoxProps>(function MotionBox(props, ref): ReactElement {
	const { children, ...rest } = props;

	return (
		<CustomBox {...rest} ref={ref}>
			{children}
		</CustomBox>
	);
});

export default MotionBox;
