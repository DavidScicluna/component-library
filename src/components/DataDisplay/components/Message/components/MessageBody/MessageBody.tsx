import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';

import { DEFAULT_MESSAGE_BODY_SPACING } from './common/constants';
import { KEYS_MESSAGE_BODY_CLASS } from './common/keys';
import type { MessageBodyProps, MessageBodyRef } from './common/types';

const MessageBody = forwardRef(function MessageBody<Element extends PolymorphicElementType>(
	props: MessageBodyProps<Element>,
	ref: MessageBodyRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		alignItems = 'center',
		justifyContent = 'center',
		spacing = DEFAULT_MESSAGE_BODY_SPACING,
		...rest
	} = props;

	return (
		<VStack
			{...(rest as VStackProps<Element>)}
			ref={ref}
			className={classNames(KEYS_MESSAGE_BODY_CLASS, { [className]: !!className })}
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{children}
		</VStack>
	);
});

// MessageBody.displayName = 'MessageBody';

export default MessageBody;
