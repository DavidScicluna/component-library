import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { useMessageContext } from '../../common/hooks';

import { DEFAULT_MESSAGE_SUBTITLE_AS } from './common/constants';
import { KEYS_MESSAGE_SUBTITLE_CLASS } from './common/keys';
import type { MessageSubtitleElement, MessageSubtitleProps, MessageSubtitleRef } from './common/types';

const MessageSubtitle = forwardRef(function MessageSubtitle<Element extends MessageSubtitleElement>(
	props: MessageSubtitleProps<Element>,
	ref: MessageSubtitleRef<Element>
): JSX.Element {
	const { colorMode } = useMessageContext();

	const DEFAULT_MESSAGE_SUBTITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.secondary',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_MESSAGE_SUBTITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'center',
		color = DEFAULT_MESSAGE_SUBTITLE_COLOR,
		fontSize = ['xs', 'sm'],
		fontWeight = 'normal',
		lineClamp = 'none',
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_MESSAGE_SUBTITLE_CLASS, { [className]: !!className })}
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
