import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { VStack } from '@components/Layout';

import { useConfirmModalContext } from '../../common/hooks';

import { KEYS_CONFIRM_MODAL_ACTIONS_CLASS } from './common/keys';
import type { ConfirmModalActionsProps, ConfirmModalActionsRef } from './common/types';

const ConfirmModalActions = forwardRef(function ConfirmModalActions<Element extends PolymorphicElementType>(
	props: ConfirmModalActionsProps<Element>,
	ref: ConfirmModalActionsRef<Element>
): JSX.Element {
	const { color, colorMode, onClose, spacing: DEFAULT_CONFIRM_MODAL_ACTIONS_SPACING } = useConfirmModalContext();

	const {
		className = DEFAULT_CLASSNAME,
		renderCancel,
		renderAction,
		alignItems = 'stretch',
		justifyContent = 'stretch',
		spacing = DEFAULT_CONFIRM_MODAL_ACTIONS_SPACING,
		...rest
	} = props;

	return (
		<VStack
			{...rest}
			ref={ref}
			className={classNames(KEYS_CONFIRM_MODAL_ACTIONS_CLASS, { [className]: !!className })}
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

// ConfirmModalActions.displayName = 'ConfirmModalActions';

export default ConfirmModalActions;
