import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useMediaQuery } from '@common/hooks';

import { VStack } from '@components/Layout';

import { useConfirmModalContext } from '../../common/hooks';

import type { ConfirmModalActionsProps, ConfirmModalActionsRef } from './common/types';

const ConfirmModalActions = forwardRef(function ConfirmModalActions<Element extends ElementType>(
	props: ConfirmModalActionsProps<Element>,
	ref: ConfirmModalActionsRef<Element>
): ReactElement {
	const isSm = useMediaQuery({ breakpoint: 'sm', type: 'width', direction: 'max' });

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
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-confirm-modal-actions`, { [className]: !!className })}
			alignItems={alignItems}
			justifyContent={justifyContent}
			spacing={spacing}
		>
			{renderAction
				? renderAction({
						color,
						colorMode,
						isFullWidth: isSm || !renderCancel,
						size: 'md',
						variant: 'contained'
				  })
				: null}

			{renderCancel
				? renderCancel({
						color: 'gray',
						colorMode,
						isFullWidth: isSm || !renderAction,
						onClick: typeof onClose === 'function' ? () => onClose() : undefined,
						size: 'md',
						variant: 'monochrome'
				  })
				: null}
		</VStack>
	);
});

export default ConfirmModalActions;
