import type {
	ConfirmModalActionsProps,
	ConfirmModalActionsRef,
	ConfirmModalActionsRenderCancelProps,
	ConfirmModalActionsRenderProps
} from './ConfirmModalActions';
import { ConfirmModalActions } from './ConfirmModalActions';
import type {
	ConfirmModalBackdropElement,
	ConfirmModalBackdropProps,
	ConfirmModalBackdropRef
} from './ConfirmModalBackdrop';
import { ConfirmModalBackdrop } from './ConfirmModalBackdrop';
import type { ConfirmModalBodyProps, ConfirmModalBodyRef } from './ConfirmModalBody';
import { ConfirmModalBody, constants as confirmModalBodyConstants } from './ConfirmModalBody';
import type { ConfirmModalContainerProps, ConfirmModalContainerRef } from './ConfirmModalContainer';
import { ConfirmModalContainer } from './ConfirmModalContainer';
import type {
	ConfirmModalIconDefaultElement,
	ConfirmModalIconElement,
	ConfirmModalIconProps,
	ConfirmModalIconRef
} from './ConfirmModalIcon';
import { ConfirmModalIcon } from './ConfirmModalIcon';
import type { ConfirmModalStackProps, ConfirmModalStackRef } from './ConfirmModalStack';
import { ConfirmModalStack } from './ConfirmModalStack';
import type {
	ConfirmModalSubtitleDefaultElement,
	ConfirmModalSubtitleElement,
	ConfirmModalSubtitleProps,
	ConfirmModalSubtitleRef
} from './ConfirmModalSubtitle';
import { ConfirmModalSubtitle } from './ConfirmModalSubtitle';
import type {
	ConfirmModalTitleDefaultElement,
	ConfirmModalTitleElement,
	ConfirmModalTitleProps,
	ConfirmModalTitleRef
} from './ConfirmModalTitle';
import { ConfirmModalTitle } from './ConfirmModalTitle';
import type {
	ConfirmModalTransitionProps,
	ConfirmModalTransitionRef,
	ConfirmModalTransitionVariant
} from './ConfirmModalTransition';
import { ConfirmModalTransition, constants as confirmModalTransitionConstants } from './ConfirmModalTransition';

// Constants
export const constants = { ...confirmModalBodyConstants, ...confirmModalTransitionConstants };

// Components
export {
	ConfirmModalActions,
	ConfirmModalBackdrop,
	ConfirmModalBody,
	ConfirmModalContainer,
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
	ConfirmModalContainerProps,
	ConfirmModalContainerRef,
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
};
