import * as commonConstants from './common/constants';
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
	ConfirmModalTitleRef
} from './components';
import {
	ConfirmModalActions,
	ConfirmModalBackdrop,
	ConfirmModalBody,
	ConfirmModalIcon,
	ConfirmModalStack,
	ConfirmModalSubtitle,
	ConfirmModalTitle,
	constants as componentsConstants,
	keys as componentsKeys
} from './components';
import ConfirmModal from './ConfirmModal';

// Constants
export const constants = { ...commonConstants, ...componentsConstants };

// Keys
export const keys = { ...componentsKeys };

// Utils
export * as utils from './common/utils';

// Hooks
export * as hooks from './common/hooks';

// Components
export {
	ConfirmModal,
	ConfirmModalActions,
	ConfirmModalBackdrop,
	ConfirmModalBody,
	ConfirmModalIcon,
	ConfirmModalStack,
	ConfirmModalSubtitle,
	ConfirmModalTitle
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
	ConfirmModalTitleRef
};
