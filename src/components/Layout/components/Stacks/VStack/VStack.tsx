import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Stack } from '../Stack';

import { KEYS_V_STACK_CLASS } from './common/keys';
import type { VStackProps, VStackRef } from './common/types';

const VStack = forwardRef(function VStack<Element extends PolymorphicElementType>(
	props: VStackProps<Element>,
	ref: VStackRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<Stack
			{...rest}
			ref={ref}
			className={classNames(KEYS_V_STACK_CLASS, { [className]: !!className })}
			direction='column'
		>
			{children}
		</Stack>
	);
});

// VStack.displayName = 'VStack';

export default VStack;
