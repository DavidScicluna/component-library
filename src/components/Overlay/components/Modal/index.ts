import {
	__DEFAULT_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_MODAL_DURATION__,
	__DEFAULT_MODAL_HAS_BACKDROP__,
	__DEFAULT_MODAL_IS_OPEN__,
	__DEFAULT_MODAL_SIZE__
} from './common/constants';
import { useModalContext } from './common/hooks';
import type {
	ModalContext,
	ModalDefaultElement,
	ModalElement,
	ModalProps,
	ModalRef,
	ModalRenderBackdropProps,
	ModalRenderTriggerProps,
	ModalSize
} from './common/types';
import type {
	ModalBackdropElement,
	ModalBackdropProps,
	ModalBackdropRef,
	ModalBodyProps,
	ModalBodyRef,
	ModalFooterProps,
	ModalFooterRef,
	ModalFooterRenderCancelProps,
	ModalFooterRenderProps,
	ModalHeaderProps,
	ModalHeaderRef,
	ModalStackProps,
	ModalStackRef,
	ModalSubtitleDefaultElement,
	ModalSubtitleElement,
	ModalSubtitleProps,
	ModalSubtitleRef,
	ModalTitleDefaultElement,
	ModalTitleElement,
	ModalTitleProps,
	ModalTitleRef,
	ModalTransitionVariant
} from './components';
import {
	constants as componentsConstants,
	ModalBackdrop,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalStack,
	ModalSubtitle,
	ModalTitle
} from './components';
import Modal from './Modal';

// Constants
export const constants = {
	...componentsConstants,
	__DEFAULT_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_MODAL_DURATION__,
	__DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_MODAL_HAS_BACKDROP__,
	__DEFAULT_MODAL_IS_OPEN__,
	__DEFAULT_MODAL_SIZE__
};

// Hooks
export { useModalContext };

// Components
export { Modal, ModalBackdrop, ModalBody, ModalFooter, ModalHeader, ModalStack, ModalSubtitle, ModalTitle };

// Component Types
export type {
	ModalBackdropElement,
	ModalBackdropProps,
	ModalBackdropRef,
	ModalBodyProps,
	ModalBodyRef,
	ModalContext,
	ModalDefaultElement,
	ModalElement,
	ModalFooterProps,
	ModalFooterRef,
	ModalFooterRenderCancelProps,
	ModalFooterRenderProps,
	ModalHeaderProps,
	ModalHeaderRef,
	ModalProps,
	ModalRef,
	ModalRenderBackdropProps,
	ModalRenderTriggerProps,
	ModalSize,
	ModalStackProps,
	ModalStackRef,
	ModalSubtitleDefaultElement,
	ModalSubtitleElement,
	ModalSubtitleProps,
	ModalSubtitleRef,
	ModalTitleDefaultElement,
	ModalTitleElement,
	ModalTitleProps,
	ModalTitleRef,
	ModalTransitionVariant
};
