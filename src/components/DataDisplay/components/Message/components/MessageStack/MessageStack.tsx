import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { VStack } from '@components/Layout';

import { useMessageContext } from '../../common/hooks';

import { __KEYS_MESSAGE_STACK_CLASS__ } from './common/keys';
import type { MessageStackProps, MessageStackRef } from './common/types';

const MessageStack = forwardRef(function MessageStack<Element extends ElementType>(
	props: MessageStackProps<Element>,
	ref: MessageStackRef<Element>
): ReactElement {
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

export default MessageStack;
