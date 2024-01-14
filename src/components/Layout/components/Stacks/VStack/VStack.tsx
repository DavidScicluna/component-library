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

import { __KEYS_V_STACK_CLASS__ } from './common/keys';
import type { VStackProps, VStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const VStack: PolymorphicComponentWithRef = forwardRef(function VStack<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: VStackProps<Element>, ref: VStackRef<Element>): ReactElement {
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

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <VStack<Element> {...props} />;
