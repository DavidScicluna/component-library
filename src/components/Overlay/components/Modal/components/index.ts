import type { ModalBackdropProps, ModalBackdropRef } from './ModalBackdrop';
import { keys as modalBackdropKeys, ModalBackdrop } from './ModalBackdrop';
import type { ModalBodyProps, ModalBodyRef } from './ModalBody';
import { keys as modalBodyKeys, ModalBody } from './ModalBody';
import type {
	ModalFooterProps,
	ModalFooterRef,
	ModalFooterRenderActionProps,
	ModalFooterRenderCancelProps
} from './ModalFooter';
import { keys as modalFooterKeys, ModalFooter } from './ModalFooter';
import type { ModalHeaderProps, ModalHeaderRef, ModalHeaderRenderCancelProps } from './ModalHeader';
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

// Keys
export const keys = {
	...modalBackdropKeys,
	...modalBodyKeys,
	...modalFooterKeys,
	...modalHeaderKeys,
	...modalStackKeys,
	...modalSubtitleKeys,
	...modalTitleKeys
};

// Components
export { ModalBackdrop, ModalBody, ModalFooter, ModalHeader, ModalStack, ModalSubtitle, ModalTitle };

// Component Types
export type {
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
};
