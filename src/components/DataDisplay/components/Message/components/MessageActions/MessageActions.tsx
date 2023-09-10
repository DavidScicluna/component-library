import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useMediaQuery } from '@common/hooks';

import { Stack } from '@components/Layout';

import { useMessageContext } from '../../common/hooks';

import { __KEYS_MESSAGE_ACTIONS_CLASS__ } from './common/keys';
import type { MessageActionsProps, MessageActionsRef } from './common/types';

const MessageActions = forwardRef(function MessageActions<Element extends ElementType>(
	props: MessageActionsProps<Element>,
	ref: MessageActionsRef<Element>
): ReactElement {
	const isSm = useMediaQuery({ breakpoint: 'sm', type: 'width', direction: 'max' });

	const { color, colorMode, spacing: __DEFAULT_MESSAGE_ACTIONS_SPACING__ } = useMessageContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		direction = isSm ? 'column-reverse' : 'row',
		alignItems = 'center',
		justifyContent = isSm ? 'center' : 'space-between',
		spacing = __DEFAULT_MESSAGE_ACTIONS_SPACING__,
		...rest
	} = props;

	return (
		<Stack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_MESSAGE_ACTIONS_CLASS__, { [className]: !!className })}
			direction={direction}
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{children({ color, colorMode, isFullWidth: isSm, size: 'md', variant: 'text' })}
		</Stack>
	);
});

export default MessageActions;
