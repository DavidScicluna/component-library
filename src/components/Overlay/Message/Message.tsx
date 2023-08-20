import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { VStack } from '@components/Layout';

import { __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_SIZE__, __DEFAULT_MESSAGE_VARIANT__ } from './common/constants';
import { useMessageClasses } from './common/hooks';
import type { MessageContext as MessageContextType, MessageProps, MessageRef } from './common/types';

export const MessageContext = createContext<MessageContextType<PolymorphicDefaultElement>>({
	spacing: __DEFAULT_SPACING__
});

const Message = forwardRef(function Message<Element extends ElementType>(
	props: MessageProps<Element>,
	ref: MessageRef<Element>
): ReactElement {
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

	const classes = useMessageClasses({ color, colorMode, radius, size, variant });

	return (
		<MessageContext.Provider value={{ color, colorMode, spacing }}>
			<VStack<Element>
				{...rest}
				ref={ref}
				className={classNames(`${__DEFAULT_CLASS_PREFIX__}-message`, classes, { [className]: !!className })}
				spacing={spacing}
			>
				{children}
			</VStack>
		</MessageContext.Provider>
	);
});

export default Message;
