import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Icon } from '@components/DataDisplay';

import { useMessageContext } from '../../common/hooks';

import { __KEYS_MESSAGE_ICON_CLASS__ } from './common/keys';
import type { MessageIconDefaultElement, MessageIconElement, MessageIconProps, MessageIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const MessageIcon: PolymorphicComponentWithRef = forwardRef(function MessageIcon<
	Element extends MessageIconElement = MessageIconDefaultElement
>(props: MessageIconProps<Element>, ref: MessageIconRef<Element>): ReactElement {
	const { color: __DEFAULT_MESSAGE_ICON_COLOR__, colorMode: __DEFAULT_MESSAGE_ICON_COLORMODE__ } =
		useMessageContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_MESSAGE_ICON_COLOR__,
		colorMode = __DEFAULT_MESSAGE_ICON_COLORMODE__,
		...rest
	} = props;

	return (
		<Icon
			{...rest}
			ref={ref}
			className={classNames(__KEYS_MESSAGE_ICON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
		/>
	);
});

MessageIcon.displayName = 'MessageIcon';

export default <Element extends MessageIconElement = MessageIconDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <MessageIcon<Element> {...props} />;
