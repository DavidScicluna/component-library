import { forwardRef, ReactElement } from 'react';

import Stack from '../Stack';

import { VStackProps, VStackRef } from './common/types';

const VStack = forwardRef<VStackRef, VStackProps>(function VStack(props, ref): ReactElement {
	const { children, ...rest } = props;

	return (
		<Stack {...rest} ref={ref} direction='column'>
			{children}
		</Stack>
	);
});

export default VStack;
