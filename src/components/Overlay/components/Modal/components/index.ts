import type { ModalBackdropElement, ModalBackdropProps, ModalBackdropRef } from './ModalBackdrop';
import { ModalBackdrop } from './ModalBackdrop';
import type { ModalBodyProps, ModalBodyRef } from './ModalBody';
import { ModalBody } from './ModalBody';
import type { ModalContainerProps, ModalContainerRef } from './ModalContainer';
import { ModalContainer } from './ModalContainer';
import type {
	ModalFooterProps,
	ModalFooterRef,
	ModalFooterRenderCancelProps,
	ModalFooterRenderProps
} from './ModalFooter';
import { ModalFooter } from './ModalFooter';
import type { ModalHeaderProps, ModalHeaderRef } from './ModalHeader';
import { ModalHeader } from './ModalHeader';
import type { ModalStackProps, ModalStackRef } from './ModalStack';
import { ModalStack } from './ModalStack';
import type {
	ModalSubtitleDefaultElement,
	ModalSubtitleElement,
	ModalSubtitleProps,
	ModalSubtitleRef
} from './ModalSubtitle';
import { ModalSubtitle } from './ModalSubtitle';
import type { ModalTitleDefaultElement, ModalTitleElement, ModalTitleProps, ModalTitleRef } from './ModalTitle';
import { ModalTitle } from './ModalTitle';
import type { ModalTransitionProps, ModalTransitionRef, ModalTransitionVariant } from './ModalTransition';
import { constants as modalTransitionConstants, ModalTransition } from './ModalTransition';

// Constants
export const constants = { ...modalTransitionConstants };

// Components
export {
	ModalBackdrop,
	ModalBody,
	ModalContainer,
	ModalFooter,
	ModalHeader,
	ModalStack,
	ModalSubtitle,
	ModalTitle,
	ModalTransition
};

// Component Types
export type {
	ModalBackdropElement,
	ModalBackdropProps,
	ModalBackdropRef,
	ModalBodyProps,
	ModalBodyRef,
	ModalContainerProps,
	ModalContainerRef,
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
	ModalTransitionProps,
	ModalTransitionRef,
	ModalTransitionVariant
};
