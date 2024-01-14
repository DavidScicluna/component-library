import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { Stack } from '../Stack';

import { __KEYS_H_STACK_CLASS__ } from './common/keys';
import type { HStackProps, HStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const HStack: PolymorphicComponentWithRef = forwardRef(function HStack<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: HStackProps<Element>, ref: HStackRef<Element>): ReactElement {
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

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <HStack<Element> {...props} />;
