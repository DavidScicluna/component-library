import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useMediaQuery } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import type { StackProps } from '@components/Layout';
import { Stack } from '@components/Layout';

import { useMessageContext } from '../../common/hooks';

import { KEYS_MESSAGE_ACTIONS_CLASS } from './common/keys';
import type { MessageActionsProps, MessageActionsRef } from './common/types';

const MessageActions = forwardRef(function MessageActions<Element extends PolymorphicElementType>(
	props: MessageActionsProps<Element>,
	ref: MessageActionsRef<Element>
): JSX.Element {
	const isSm = useMediaQuery({ breakpoint: 'sm', type: 'width', direction: 'max' });

	const { color, colorMode, spacing: DEFAULT_MESSAGE_ACTIONS_SPACING } = useMessageContext();

	const {
		children,
		className = DEFAULT_CLASSNAME,
		direction = isSm ? 'column-reverse' : 'row',
		alignItems = 'center',
		justifyContent = isSm ? 'center' : 'space-between',
		spacing = DEFAULT_MESSAGE_ACTIONS_SPACING,
		...rest
	} = props;

	return (
		<Stack
			{...(rest as StackProps<Element>)}
			ref={ref}
			className={classNames(KEYS_MESSAGE_ACTIONS_CLASS, { [className]: !!className })}
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
