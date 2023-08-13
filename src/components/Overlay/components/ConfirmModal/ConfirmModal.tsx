import type { ReactElement } from 'react';
import React, { createContext, forwardRef } from 'react';

import { __DEFAULT_METHOD__ } from '@common/constants';
import { useBoolean } from '@common/hooks';

import { AnimatePresence } from '@components/Animation';
import { Portal } from '@components/Portal';

import {
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	__DEFAULT_CONFIRM_MODAL_SIZE__,
	__DEFAULT_CONFIRM_MODAL_SPACING__
} from './common/constants';
import { useConfirmModalIsMounted } from './common/hooks';
import type {
	ConfirmModalContext as ConfirmModalContextType,
	ConfirmModalDefaultElement,
	ConfirmModalElement,
	ConfirmModalProps,
	ConfirmModalRef
} from './common/types';
import { ConfirmModalContainer } from './components';

export const ConfirmModalContext = createContext<ConfirmModalContextType>({
	isOpen: __DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	onClose: __DEFAULT_METHOD__,
	size: __DEFAULT_CONFIRM_MODAL_SIZE__,
	spacing: __DEFAULT_CONFIRM_MODAL_SPACING__
});

const ConfirmModal = forwardRef(function ConfirmModal<Element extends ConfirmModalElement = ConfirmModalDefaultElement>(
	props: ConfirmModalProps<Element>,
	ref: ConfirmModalRef<Element>
): ReactElement {
	const {
		renderTrigger,
		color,
		colorMode,
		closeOnEsc = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick = __DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		onClose,
		onCloseComplete,
		onOpen,
		size = __DEFAULT_CONFIRM_MODAL_SIZE__,
		spacing = __DEFAULT_CONFIRM_MODAL_SPACING__,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_CONFIRM_MODAL_IS_OPEN__);

	const isMounted = useConfirmModalIsMounted(isOpen);

	const handleOpen = (): void => {
		setIsOpen.on();
		if (onOpen) {
			onOpen();
		}
	};

	const handleClose = (): void => {
		setIsOpen.off();
		if (onClose) {
			onClose();
		}
	};

	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
			<>
				{renderTrigger({ color, colorMode, isOpen, onOpen: handleOpen })}

				{isMounted ? (
					<Portal>
						<ConfirmModalContext.Provider
							value={{ color, colorMode, isOpen, onClose: handleClose, size, spacing }}
						>
							<ConfirmModalContainer<Element>
								{...rest}
								ref={ref}
								closeOnEsc={closeOnEsc}
								closeOnOverlayClick={closeOnOverlayClick}
							/>
						</ConfirmModalContext.Provider>
					</Portal>
				) : null}
			</>
		</AnimatePresence>
	);
});

export default ConfirmModal;
