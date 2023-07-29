import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import Stack from '../Stack';
import type { StackProps } from '../Stack/common/types';

import type { HStackProps, HStackRef } from './common/types';

const HStack = forwardRef(function HStack<Element extends ElementType>(
	props: HStackProps<Element>,
	ref: HStackRef<Element>
): ReactElement {
	const { children, ...rest } = props;

	return (
		<Stack<Element> {...(rest as StackProps<Element>)} ref={ref} direction='row'>
			{children}
		</Stack>
	);
});

export default HStack;
