import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useMediaQuery } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import type { StackProps } from '@components/Layout';
import { Stack } from '@components/Layout';

import { useMessageContext } from '../../common/hooks';

import { __KEYS_MESSAGE_ACTIONS_CLASS__ } from './common/keys';
import type { MessageActionsProps, MessageActionsRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const MessageActions = forwardRef(function MessageActions<Element extends PolymorphicElementType>(
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
		<Stack
			{...(rest as StackProps<Element>)}
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

// MessageActions.displayName = 'MessageActions';

export default MessageActions;
