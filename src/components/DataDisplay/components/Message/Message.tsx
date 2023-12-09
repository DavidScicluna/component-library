import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { VStack } from '@components/Layout';

import { __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_SIZE__, __DEFAULT_MESSAGE_VARIANT__ } from './common/constants';
import { useMessageClasses } from './common/hooks';
import { __KEYS_MESSAGE_CLASS__ } from './common/keys';
import type { MessageContext as MessageContextType, MessageProps, MessageRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const MessageContext = createContext<MessageContextType<PolymorphicDefaultElement>>({
	spacing: __DEFAULT_SPACING__
});

// Move Message to DataDisplay folder since its not an overlay!
const Message: PolymorphicComponentWithRef = forwardRef(function Message<
	Element extends ElementType = PolymorphicDefaultElement
>(props: MessageProps<Element>, ref: MessageRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		radius = __DEFAULT_MESSAGE_RADIUS__,
		size = __DEFAULT_MESSAGE_SIZE__,
		spacing = __DEFAULT_SPACING__,
		variant = __DEFAULT_MESSAGE_VARIANT__,
		...rest
	} = props;

	const classes = useMessageClasses<Element>({ color, colorMode, radius, size, variant });

	return (
		<MessageContext.Provider value={{ color, colorMode, spacing }}>
			<VStack<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_MESSAGE_CLASS__, classes, { [className]: !!className })}
				spacing={spacing}
			>
				{children}
			</VStack>
		</MessageContext.Provider>
	);
});

Message.displayName = 'Message';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Message<Element> {...props} />;
