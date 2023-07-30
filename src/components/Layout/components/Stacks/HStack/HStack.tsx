import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import Stack from '../Stack';

import type { HStackProps, HStackRef } from './common/types';

const HStack = forwardRef(function HStack<Element extends ElementType>(
	props: HStackProps<Element>,
	ref: HStackRef<Element>
): ReactElement {
	const { children, ...rest } = props;

	return (
		<Stack<Element> {...rest} ref={ref} direction='row'>
			{children}
		</Stack>
	);
});

export default HStack;
