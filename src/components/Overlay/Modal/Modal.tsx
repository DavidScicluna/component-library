import type { ReactElement } from 'react';
import React, { createContext, forwardRef } from 'react';

import { __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';
import { useBoolean } from '@common/hooks';

import { AnimatePresence } from '@components/Animation';
import { Portal } from '@components/Portal';

import {
	__DEFAULT_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_MODAL_IS_OPEN__,
	__DEFAULT_MODAL_SIZE__
} from './common/constants';
import { useModalIsMounted } from './common/hooks';
import type {
	ModalContext as ModalContextType,
	ModalDefaultElement,
	ModalElement,
	ModalProps,
	ModalRef
} from './common/types';
import { ModalContainer } from './components';

export const ModalContext = createContext<ModalContextType>({
	isOpen: __DEFAULT_MODAL_IS_OPEN__,
	onClose: __DEFAULT_METHOD__,
	size: __DEFAULT_MODAL_SIZE__,
	spacing: __DEFAULT_SPACING__
});

const Modal = forwardRef(function Modal<Element extends ModalElement = ModalDefaultElement>(
	props: ModalProps<Element>,
	ref: ModalRef<Element>
): ReactElement {
	const {
		renderTrigger,
		color,
		colorMode,
		closeOnEsc = __DEFAULT_MODAL_CLOSE_ON_ESC__,
		closeOnOverlayClick = __DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
		onClose,
		onCloseComplete,
		onOpen,
		size = __DEFAULT_MODAL_SIZE__,
		spacing = __DEFAULT_SPACING__,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_MODAL_IS_OPEN__);

	const isMounted = useModalIsMounted(isOpen);

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
						<ModalContext.Provider
							value={{ color, colorMode, isOpen, onClose: handleClose, size, spacing }}
						>
							<ModalContainer<Element>
								{...rest}
								ref={ref}
								closeOnEsc={closeOnEsc}
								closeOnOverlayClick={closeOnOverlayClick}
							/>
						</ModalContext.Provider>
					</Portal>
				) : null}
			</>
		</AnimatePresence>
	);
});

export default Modal;
