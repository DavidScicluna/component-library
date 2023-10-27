import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { VStack } from '@components/Layout';

import { useConfirmModalContext } from '../../common/hooks';

import { __KEYS_CONFIRM_MODAL_ACTIONS_CLASS__ } from './common/keys';
import type { ConfirmModalActionsProps, ConfirmModalActionsRef } from './common/types';

const ConfirmModalActions = forwardRef(function ConfirmModalActions<
	Element extends ElementType = PolymorphicDefaultElement
>(props: ConfirmModalActionsProps<Element>, ref: ConfirmModalActionsRef<Element>): ReactElement {
	const { color, colorMode, onClose, spacing: __DEFAULT_CONFIRM_MODAL_ACTIONS_SPACING__ } = useConfirmModalContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderCancel,
		renderAction,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		spacing = __DEFAULT_CONFIRM_MODAL_ACTIONS_SPACING__,
		...rest
	} = props;

	return (
		<VStack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CONFIRM_MODAL_ACTIONS_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{renderAction
				? renderAction({
						color,
						colorMode,
						isFullWidth: true,
						size: 'md',
						variant: 'contained'
				  })
				: null}

			{renderCancel
				? renderCancel({
						colorMode,
						isFullWidth: true,
						onClick: typeof onClose === 'function' ? () => onClose() : undefined,
						size: 'md',
						variant: 'monochrome'
				  })
				: null}
		</VStack>
	);
});

ConfirmModalActions.displayName = 'ConfirmModalActions';

export default ConfirmModalActions;
