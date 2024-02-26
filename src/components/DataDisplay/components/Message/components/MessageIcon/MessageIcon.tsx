import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import type { IconProps } from '@components/DataDisplay';
import { DEFAULT_MESSAGE_ICON_AS, Icon } from '@components/DataDisplay';

import { useMessageContext } from '../../common/hooks';

import { KEYS_MESSAGE_ICON_CLASS } from './common/keys';
import type { MessageIconElement, MessageIconProps, MessageIconRef } from './common/types';

const MessageIcon = forwardRef(function MessageIcon<Element extends MessageIconElement>(
	props: MessageIconProps<Element>,
	ref: MessageIconRef<Element>
): JSX.Element {
	const { color: DEFAULT_MESSAGE_ICON_COLOR, colorMode: DEFAULT_MESSAGE_ICON_COLORMODE } = useMessageContext();

	const {
		as = DEFAULT_MESSAGE_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_MESSAGE_ICON_COLOR,
		colorMode = DEFAULT_MESSAGE_ICON_COLORMODE,
		...rest
	} = props;

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_MESSAGE_ICON_CLASS, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
		/>
	);
});

// MessageIcon.displayName = 'MessageIcon';

export default MessageIcon;
