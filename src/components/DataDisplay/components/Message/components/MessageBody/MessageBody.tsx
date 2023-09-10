import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { VStack } from '@components/Layout';

import { __DEFAULT_MESSAGE_BODY_SPACING__ } from './common/constants';
import { __KEYS_MESSAGE_BODY_CLASS__ } from './common/keys';
import type { MessageBodyProps, MessageBodyRef } from './common/types';

const MessageBody = forwardRef(function MessageBody<Element extends ElementType>(
	props: MessageBodyProps<Element>,
	ref: MessageBodyRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignItems = 'center',
		justifyContent = 'center',
		spacing = __DEFAULT_MESSAGE_BODY_SPACING__,
		...rest
	} = props;

	return (
		<VStack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_MESSAGE_BODY_CLASS__, { [className]: !!className })}
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{children}
		</VStack>
	);
});

export default MessageBody;
