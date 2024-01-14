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

import { VStack } from '@components/Layout';

import { __DEFAULT_MESSAGE_BODY_SPACING__ } from './common/constants';
import { __KEYS_MESSAGE_BODY_CLASS__ } from './common/keys';
import type { MessageBodyProps, MessageBodyRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const MessageBody: PolymorphicComponentWithRef = forwardRef(function MessageBody<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: MessageBodyProps<Element>, ref: MessageBodyRef<Element>): ReactElement {
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

MessageBody.displayName = 'MessageBody';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <MessageBody<Element> {...props} />;
