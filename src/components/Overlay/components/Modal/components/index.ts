import type { ModalBackdropElement, ModalBackdropProps, ModalBackdropRef } from './ModalBackdrop';
import { keys as modalBackdropKeys, ModalBackdrop } from './ModalBackdrop';
import type { ModalBodyProps, ModalBodyRef } from './ModalBody';
import { keys as modalBodyKeys, ModalBody } from './ModalBody';
import type { ModalContainerProps, ModalContainerRef } from './ModalContainer';
import { keys as modalContainerKeys, ModalContainer } from './ModalContainer';
import type {
	ModalFooterProps,
	ModalFooterRef,
	ModalFooterRenderCancelProps,
	ModalFooterRenderProps
} from './ModalFooter';
import { keys as modalFooterKeys, ModalFooter } from './ModalFooter';
import type { ModalHeaderProps, ModalHeaderRef } from './ModalHeader';
import { keys as modalHeaderKeys, ModalHeader } from './ModalHeader';
import type { ModalStackProps, ModalStackRef } from './ModalStack';
import { keys as modalStackKeys, ModalStack } from './ModalStack';
import type {
	ModalSubtitleDefaultElement,
	ModalSubtitleElement,
	ModalSubtitleProps,
	ModalSubtitleRef
} from './ModalSubtitle';
import { keys as modalSubtitleKeys, ModalSubtitle } from './ModalSubtitle';
import type { ModalTitleDefaultElement, ModalTitleElement, ModalTitleProps, ModalTitleRef } from './ModalTitle';
import { keys as modalTitleKeys, ModalTitle } from './ModalTitle';
import type { ModalTransitionProps, ModalTransitionRef, ModalTransitionVariant } from './ModalTransition';
import { constants as modalTransitionConstants, keys as modalTransitionKeys, ModalTransition } from './ModalTransition';

// Constants
export const constants = { ...modalTransitionConstants };

// Keys
export const keys = {
	...modalBackdropKeys,
	...modalBodyKeys,
	...modalContainerKeys,
	...modalFooterKeys,
	...modalHeaderKeys,
	...modalStackKeys,
	...modalSubtitleKeys,
	...modalTitleKeys,
	...modalTransitionKeys
};

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
