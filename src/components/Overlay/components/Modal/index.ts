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
	ModalTitleRef
} from './components';
import {
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
export const constants = { ...commonConstants };

// Keys
export const keys = { ...componentsKeys };

// Utils
export * as utils from './common/utils';

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
	ModalTitleRef
};
