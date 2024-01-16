import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import { Stack } from '../Stack';

import { __KEYS_H_STACK_CLASS__ } from './common/keys';
import type { HStackProps, HStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const HStack = forwardRef(function HStack<Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: HStackProps<Element>,
	ref: HStackRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ...rest } = props;

	return (
		<Stack
			{...(rest as HStackProps<Element>)}
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
