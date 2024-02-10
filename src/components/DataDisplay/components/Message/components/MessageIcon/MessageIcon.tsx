import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { __DEFAULT_MESSAGE_ICON_AS__, Icon } from '@components/DataDisplay';

import { useMessageContext } from '../../common/hooks';

import { __KEYS_MESSAGE_ICON_CLASS__ } from './common/keys';
import type { MessageIconElement, MessageIconProps, MessageIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const MessageIcon = forwardRef(function MessageIcon<Element extends MessageIconElement>(
	props: MessageIconProps<Element>,
	ref: MessageIconRef<Element>
): JSX.Element {
	const { color: __DEFAULT_MESSAGE_ICON_COLOR__, colorMode: __DEFAULT_MESSAGE_ICON_COLORMODE__ } =
		useMessageContext();

	const {
		as = __DEFAULT_MESSAGE_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_MESSAGE_ICON_COLOR__,
		colorMode = __DEFAULT_MESSAGE_ICON_COLORMODE__,
		...rest
	} = props;

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_MESSAGE_ICON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
		/>
	);
});

// MessageIcon.displayName = 'MessageIcon';

export default MessageIcon;
