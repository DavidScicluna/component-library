import { forwardRef, ReactElement } from 'react';

import Stack from '../Stack';

import { HStackProps, HStackRef } from './common/types';

const HStack = forwardRef<HStackRef, HStackProps>(function HStack(props, ref): ReactElement {
	const { children, ...rest } = props;

	return (
		<Stack {...rest} ref={ref} direction='row'>
			{children}
		</Stack>
	);
});

export default HStack;
