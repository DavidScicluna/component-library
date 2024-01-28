import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useMessageContext } from '../../common/hooks';

import { __DEFAULT_MESSAGE_SUBTITLE_AS__ } from './common/constants';
import { __KEYS_MESSAGE_SUBTITLE_CLASS__ } from './common/keys';
import type { MessageSubtitleElement, MessageSubtitleProps, MessageSubtitleRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const MessageSubtitle = forwardRef(function MessageSubtitle<Element extends MessageSubtitleElement>(
	props: MessageSubtitleProps<Element>,
	ref: MessageSubtitleRef<Element>
): ReactElement {
	const { colorMode } = useMessageContext();

	const __DEFAULT_MESSAGE_SUBTITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		as = __DEFAULT_MESSAGE_SUBTITLE_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_MESSAGE_SUBTITLE_COLOR__,
		fontSize = ['xs', 'sm'],
		fontWeight = 'normal',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_MESSAGE_SUBTITLE_CLASS__, { [className]: !!className })}
			align={align}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineClamp={lineClamp}
		>
			{children}
		</Text>
	);
});

// MessageSubtitle.displayName = 'MessageSubtitle';

export default MessageSubtitle;
