import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useMessageContext } from '../../common/hooks';

import type {
	MessageTitleDefaultElement,
	MessageTitleElement,
	MessageTitleProps,
	MessageTitleRef
} from './common/types';

const MessageTitle = forwardRef(function MessageTitle<Element extends MessageTitleElement = MessageTitleDefaultElement>(
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
		className = __DEFAULT_CLASSNAME__,
		align = 'center',
		color = __DEFAULT_MESSAGE_TITLE_COLOR__,
		fontSize = ['xl', '2xl'],
		fontWeight = 'bold',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-message-title`, { [className]: !!className })}
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

export default MessageTitle;
