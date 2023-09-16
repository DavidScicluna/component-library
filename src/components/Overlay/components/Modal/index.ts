import * as commonConstants from './common/constants';
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
	ModalFooterRenderActionProps,
	ModalFooterRenderCancelProps,
	ModalHeaderProps,
	ModalHeaderRef,
	ModalHeaderRenderCancelProps,
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
	keys as componentsKeys,
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
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...componentsKeys };

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
	ModalFooterRenderActionProps,
	ModalFooterRenderCancelProps,
	ModalHeaderProps,
	ModalHeaderRef,
	ModalHeaderRenderCancelProps,
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
