import * as commonConstants from './common/constants';
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
	ConfirmModalActionsRenderActionProps,
	ConfirmModalActionsRenderCancelProps,
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
	constants as componentsConstants,
	keys as componentsKeys
} from './components';
import ConfirmModal from './ConfirmModal';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...componentsKeys };

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
	ConfirmModalActionsRenderActionProps,
	ConfirmModalActionsRenderCancelProps,
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
