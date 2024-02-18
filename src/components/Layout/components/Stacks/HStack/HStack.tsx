import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { StackProps } from '../Stack';
import { Stack } from '../Stack';

import { __KEYS_H_STACK_CLASS__ } from './common/keys';
import type { HStackProps, HStackRef } from './common/types';

const HStack = forwardRef(function HStack<Element extends PolymorphicElementType>(
	props: HStackProps<Element>,
	ref: HStackRef<Element>
): JSX.Element {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Stack
			{...(rest as StackProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_H_STACK_CLASS__, { [className]: !!className })}
			direction='row'
		>
			{children}
		</Stack>
	);
});

// HStack.displayName = 'HStack';

export default HStack;
