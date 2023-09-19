import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Stack } from '../Stack';

import { __KEYS_V_STACK_CLASS__ } from './common/keys';
import type { VStackProps, VStackRef } from './common/types';

const VStack = forwardRef(function VStack<Element extends ElementType>(
	props: VStackProps<Element>,
	ref: VStackRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Stack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_V_STACK_CLASS__, { [className]: !!className })}
			direction='column'
		>
			{children}
		</Stack>
	);
});

VStack.displayName = 'VStack';

export default VStack;
