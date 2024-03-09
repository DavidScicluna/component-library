import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Stack } from '../Stack';

import { KEYS_H_STACK_CLASS } from './common/keys';
import type { HStackProps, HStackRef } from './common/types';

const HStack = forwardRef(function HStack<Element extends PolymorphicElementType>(
	props: HStackProps<Element>,
	ref: HStackRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, ...rest } = props;

	return (
		<Stack
			{...rest}
			ref={ref}
			className={classNames(KEYS_H_STACK_CLASS, { [className]: !!className })}
			direction='row'
		>
			{children}
		</Stack>
	);
});

// HStack.displayName = 'HStack';

export default HStack;
