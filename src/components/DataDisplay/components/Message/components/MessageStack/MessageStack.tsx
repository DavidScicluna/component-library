import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { VStack } from '@components/Layout';

import { useMessageContext } from '../../common/hooks';

import { KEYS_MESSAGE_STACK_CLASS } from './common/keys';
import type { MessageStackProps, MessageStackRef } from './common/types';

const MessageStack = forwardRef(function MessageStack<Element extends PolymorphicElementType>(
	props: MessageStackProps<Element>,
	ref: MessageStackRef<Element>
): JSX.Element {
	const { spacing: DEFAULT_MESSAGE_STACK_SPACING } = useMessageContext();

	const {
		children,
		className = DEFAULT_CLASSNAME,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		spacing = DEFAULT_MESSAGE_STACK_SPACING,
		...rest
	} = props;

	return (
		<VStack
			{...rest}
			ref={ref}
			className={classNames(KEYS_MESSAGE_STACK_CLASS, { [className]: !!className })}
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

// MessageStack.displayName = 'MessageStack';

export default MessageStack;
