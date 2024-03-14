import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_SPACING } from '@common/constants';

import { VStack } from '@components/Layout';

import { DEFAULT_MESSAGE_AS, DEFAULT_MESSAGE_RADIUS, DEFAULT_MESSAGE_VARIANT } from './common/constants';
import { useMessageClasses, useMessageResponsiveValues } from './common/hooks';
import { KEYS_MESSAGE_CLASS } from './common/keys';
import type {
	MessageContext as MessageContextType,
	MessageDefaultElement,
	MessageElement,
	MessageProps,
	MessageRef
} from './common/types';

export const MessageContext = createContext<MessageContextType<MessageDefaultElement>>({
	spacing: DEFAULT_SPACING
});

// Move Message to DataDisplay folder since its not an overlay!
const Message = forwardRef(function Message<Element extends MessageElement>(
	props: MessageProps<Element>,
	ref: MessageRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_MESSAGE_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		radius: radiusProp = DEFAULT_MESSAGE_RADIUS,
		spacing: spacingProp = DEFAULT_SPACING,
		variant: variantProp = DEFAULT_MESSAGE_VARIANT,
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
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEYS_MESSAGE_CLASS, classes, { [className]: !!className })}
				spacing={spacing}
			>
				{children}
			</VStack>
		</MessageContext.Provider>
	);
});

// Message.displayName = 'Message';

export default Message;
