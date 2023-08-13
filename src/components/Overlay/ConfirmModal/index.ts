import {
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_CONFIRM_MODAL_DURATION__,
	__DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
	__DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	__DEFAULT_CONFIRM_MODAL_SIZE__,
	__DEFAULT_CONFIRM_MODAL_SPACING__
} from './common/constants';
import { useConfirmModalContext } from './common/hooks';
import type {
	ConfirmModalContext,
	ConfirmModalDefaultElement,
	ConfirmModalElement,
	ConfirmModalProps,
	ConfirmModalRef,
	ConfirmModalRenderBackdropProps,
	ConfirmModalRenderCancelProps,
	ConfirmModalRenderTriggerProps,
	ConfirmModalSize
} from './common/types';
import type {
	ConfirmModalActionsProps,
	ConfirmModalActionsRef,
	ConfirmModalActionsRenderCancelProps,
	ConfirmModalActionsRenderProps,
	ConfirmModalBackdropElement,
	ConfirmModalBackdropProps,
	ConfirmModalBackdropRef,
	ConfirmModalBodyProps,
	ConfirmModalBodyRef,
	ConfirmModalIconDefaultElement,
	ConfirmModalIconElement,
	ConfirmModalIconProps,
	ConfirmModalIconRef,
	ConfirmModalStackProps,
	ConfirmModalStackRef,
	ConfirmModalSubtitleDefaultElement,
	ConfirmModalSubtitleElement,
	ConfirmModalSubtitleProps,
	ConfirmModalSubtitleRef,
	ConfirmModalTitleDefaultElement,
	ConfirmModalTitleElement,
	ConfirmModalTitleProps,
	ConfirmModalTitleRef,
	ConfirmModalTransitionProps,
	ConfirmModalTransitionRef,
	ConfirmModalTransitionVariant
} from './components';
import {
	ConfirmModalActions,
	ConfirmModalBackdrop,
	ConfirmModalBody,
	ConfirmModalIcon,
	ConfirmModalStack,
	ConfirmModalSubtitle,
	ConfirmModalTitle,
	ConfirmModalTransition,
	constants as componentsConstants
} from './components';
import ConfirmModal from './ConfirmModal';

// Constants
export const constants = {
	...componentsConstants,
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__,
	__DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__,
	__DEFAULT_CONFIRM_MODAL_DURATION__,
	__DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__,
	__DEFAULT_CONFIRM_MODAL_IS_OPEN__,
	__DEFAULT_CONFIRM_MODAL_SIZE__,
	__DEFAULT_CONFIRM_MODAL_SPACING__
};

// Hooks
export { useConfirmModalContext };

// Components
export {
	ConfirmModal,
	ConfirmModalActions,
	ConfirmModalBackdrop,
	ConfirmModalBody,
	ConfirmModalIcon,
	ConfirmModalStack,
	ConfirmModalSubtitle,
	ConfirmModalTitle,
	ConfirmModalTransition
};

// Component Types
export type {
	ConfirmModalActionsProps,
	ConfirmModalActionsRef,
	ConfirmModalActionsRenderCancelProps,
	ConfirmModalActionsRenderProps,
	ConfirmModalBackdropElement,
	ConfirmModalBackdropProps,
	ConfirmModalBackdropRef,
	ConfirmModalBodyProps,
	ConfirmModalBodyRef,
	ConfirmModalContext,
	ConfirmModalDefaultElement,
	ConfirmModalElement,
	ConfirmModalIconDefaultElement,
	ConfirmModalIconElement,
	ConfirmModalIconProps,
	ConfirmModalIconRef,
	ConfirmModalProps,
	ConfirmModalRef,
	ConfirmModalRenderBackdropProps,
	ConfirmModalRenderCancelProps,
	ConfirmModalRenderTriggerProps,
	ConfirmModalSize,
	ConfirmModalStackProps,
	ConfirmModalStackRef,
	ConfirmModalSubtitleDefaultElement,
	ConfirmModalSubtitleElement,
	ConfirmModalSubtitleProps,
	ConfirmModalSubtitleRef,
	ConfirmModalTitleDefaultElement,
	ConfirmModalTitleElement,
	ConfirmModalTitleProps,
	ConfirmModalTitleRef,
	ConfirmModalTransitionProps,
	ConfirmModalTransitionRef,
	ConfirmModalTransitionVariant
};
