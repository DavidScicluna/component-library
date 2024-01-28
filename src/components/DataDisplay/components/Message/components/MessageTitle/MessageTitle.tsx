import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useMessageContext } from '../../common/hooks';

import { __DEFAULT_MESSAGE_TITLE_AS__ } from './common/constants';
import { __KEYS_MESSAGE_TITLE_CLASS__ } from './common/keys';
import type { MessageTitleElement, MessageTitleProps, MessageTitleRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const MessageTitle = forwardRef(function MessageTitle<Element extends MessageTitleElement>(
	props: MessageTitleProps<Element>,
	ref: MessageTitleRef<Element>
): ReactElement {
	const { colorMode } = useMessageContext();

	const __DEFAULT_MESSAGE_TITLE_COLOR__ = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		as = __DEFAULT_MESSAGE_TITLE_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_MESSAGE_TITLE_COLOR__,
		fontSize = ['xl', '2xl'],
		fontWeight = 'bold',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_MESSAGE_TITLE_CLASS__, { [className]: !!className })}
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

// MessageTitle.displayName = 'MessageTitle';

export default MessageTitle;
