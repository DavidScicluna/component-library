import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { useMessageContext } from '../../common/hooks';

import { DEFAULT_MESSAGE_TITLE_AS } from './common/constants';
import { KEYS_MESSAGE_TITLE_CLASS } from './common/keys';
import type { MessageTitleElement, MessageTitleProps, MessageTitleRef } from './common/types';

const MessageTitle = forwardRef(function MessageTitle<Element extends MessageTitleElement>(
	props: MessageTitleProps<Element>,
	ref: MessageTitleRef<Element>
): JSX.Element {
	const { colorMode } = useMessageContext();

	const DEFAULT_MESSAGE_TITLE_COLOR = useGetColor({
		color: 'gray',
		colorMode,
		colorType: 'default',
		hueType: 'text.primary',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_MESSAGE_TITLE_AS,
		className = DEFAULT_CLASSNAME,
		align = 'center',
		color = DEFAULT_MESSAGE_TITLE_COLOR,
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
			className={classNames(KEYS_MESSAGE_TITLE_CLASS, { [className]: !!className })}
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
