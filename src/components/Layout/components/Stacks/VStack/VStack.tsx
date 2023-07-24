import { ElementType, forwardRef, ReactElement } from 'react';

import Stack from '../Stack';
import type { StackProps } from '../Stack/common/types';

import type { VStackProps, VStackRef } from './common/types';

const VStack = forwardRef(function VStack<Element extends ElementType>(
	props: VStackProps<Element>,
	ref: VStackRef<Element>
): ReactElement {
	const { children, ...rest } = props;

	return (
		<Stack {...(rest as StackProps<Element>)} ref={ref} direction='column'>
			{children}
		</Stack>
	);
});

export default VStack;
