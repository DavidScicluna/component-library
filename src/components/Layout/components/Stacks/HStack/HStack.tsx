import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Stack } from '../Stack';

import { __KEYS_H_STACK_CLASS__ } from './common/keys';
import type { HStackProps, HStackRef } from './common/types';

const HStack = forwardRef(function HStack<Element extends ElementType = PolymorphicDefaultElement>(
	props: HStackProps<Element>,
	ref: HStackRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Stack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_H_STACK_CLASS__, { [className]: !!className })}
			direction='row'
		>
			{children}
		</Stack>
	);
});

HStack.displayName = 'HStack';

export default HStack;
