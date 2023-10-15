import type {
	ConfirmModalActionsProps,
	ConfirmModalActionsRef,
	ConfirmModalActionsRenderActionProps,
	ConfirmModalActionsRenderCancelProps
} from './ConfirmModalActions';
import { ConfirmModalActions, keys as confirmModalActionsKeys } from './ConfirmModalActions';
import type {
	ConfirmModalBackdropElement,
	ConfirmModalBackdropProps,
	ConfirmModalBackdropRef
} from './ConfirmModalBackdrop';
import { ConfirmModalBackdrop, keys as confirmModalBackdropKeys } from './ConfirmModalBackdrop';
import type { ConfirmModalBodyProps, ConfirmModalBodyRef } from './ConfirmModalBody';
import {
	ConfirmModalBody,
	constants as confirmModalBodyConstants,
	keys as confirmModalBodyKeys
} from './ConfirmModalBody';
import type {
	ConfirmModalIconDefaultElement,
	ConfirmModalIconElement,
	ConfirmModalIconProps,
	ConfirmModalIconRef
} from './ConfirmModalIcon';
import { ConfirmModalIcon, keys as confirmModalIconKeys } from './ConfirmModalIcon';
import type { ConfirmModalStackProps, ConfirmModalStackRef } from './ConfirmModalStack';
import { ConfirmModalStack, keys as confirmModalStackKeys } from './ConfirmModalStack';
import type {
	ConfirmModalSubtitleDefaultElement,
	ConfirmModalSubtitleElement,
	ConfirmModalSubtitleProps,
	ConfirmModalSubtitleRef
} from './ConfirmModalSubtitle';
import { ConfirmModalSubtitle, keys as confirmModalSubtitleKeys } from './ConfirmModalSubtitle';
import type {
	ConfirmModalTitleDefaultElement,
	ConfirmModalTitleElement,
	ConfirmModalTitleProps,
	ConfirmModalTitleRef
} from './ConfirmModalTitle';
import { ConfirmModalTitle, keys as confirmModalTitleKeys } from './ConfirmModalTitle';

// Constants
export const constants = { ...confirmModalBodyConstants };

// Keys
export const keys = {
	confirmModalActionsKeys,
	confirmModalBackdropKeys,
	confirmModalBodyKeys,
	confirmModalIconKeys,
	confirmModalStackKeys,
	confirmModalSubtitleKeys,
	confirmModalTitleKeys
};

// Components
export {
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
};
