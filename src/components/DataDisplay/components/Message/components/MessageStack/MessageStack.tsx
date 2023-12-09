import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { VStack } from '@components/Layout';

import { useMessageContext } from '../../common/hooks';

import { __KEYS_MESSAGE_STACK_CLASS__ } from './common/keys';
import type { MessageStackProps, MessageStackRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const MessageStack: PolymorphicComponentWithRef = forwardRef(function MessageStack<
	Element extends ElementType = PolymorphicDefaultElement
>(props: MessageStackProps<Element>, ref: MessageStackRef<Element>): ReactElement {
	const { spacing: __DEFAULT_MESSAGE_STACK_SPACING__ } = useMessageContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		spacing = __DEFAULT_MESSAGE_STACK_SPACING__,
		...rest
	} = props;

	return (
		<VStack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_MESSAGE_STACK_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{children}
		</VStack>
	);
});

MessageStack.displayName = 'MessageStack';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <MessageStack<Element> {...props} />;
