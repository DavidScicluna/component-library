import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import type { VStackProps } from '@components/Layout';
import { VStack } from '@components/Layout';

import { __DEFAULT_MESSAGE_AS__, __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_VARIANT__ } from './common/constants';
import { useMessageClasses, useMessageResponsiveValues } from './common/hooks';
import { __KEYS_MESSAGE_CLASS__ } from './common/keys';
import type {
	MessageContext as MessageContextType,
	MessageDefaultElement,
	MessageElement,
	MessageProps,
	MessageRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const MessageContext = createContext<MessageContextType<MessageDefaultElement>>({
	spacing: __DEFAULT_SPACING__
});

// Move Message to DataDisplay folder since its not an overlay!
const Message = forwardRef(function Message<Element extends MessageElement>(
	props: MessageProps<Element>,
	ref: MessageRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_MESSAGE_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		radius: radiusProp = __DEFAULT_MESSAGE_RADIUS__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		variant: variantProp = __DEFAULT_MESSAGE_VARIANT__,
		...rest
	} = props;

	const { radius, spacing, variant } = useMessageResponsiveValues<Element>({
		radius: radiusProp,
		spacing: spacingProp,
		variant: variantProp
	});

	const classes = useMessageClasses<Element>({ color, colorMode, radius, variant });

	return (
		<MessageContext.Provider value={{ color, colorMode, spacing }}>
			<VStack
				{...(rest as VStackProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_MESSAGE_CLASS__, classes, { [className]: !!className })}
				spacing={spacing}
			>
				{children}
			</VStack>
		</MessageContext.Provider>
	);
});

// Message.displayName = 'Message';

export default Message;
