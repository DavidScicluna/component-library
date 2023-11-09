import type { ModalBackdropProps, ModalBackdropRef } from './ModalBackdrop';
import { keys as modal_backdrop_keys, ModalBackdrop } from './ModalBackdrop';
import type { ModalBodyProps, ModalBodyRef } from './ModalBody';
import { keys as modal_body_keys, ModalBody } from './ModalBody';
import type {
	ModalFooterProps,
	ModalFooterRef,
	ModalFooterRenderActionProps,
	ModalFooterRenderCancelProps
} from './ModalFooter';
import { keys as modal_footer_keys, ModalFooter } from './ModalFooter';
import type { ModalHeaderProps, ModalHeaderRef, ModalHeaderRenderCancelProps } from './ModalHeader';
import { keys as modal_header_keys, ModalHeader } from './ModalHeader';
import type { ModalStackProps, ModalStackRef } from './ModalStack';
import { keys as modal_stack_keys, ModalStack } from './ModalStack';
import type {
	ModalSubtitleDefaultElement,
	ModalSubtitleElement,
	ModalSubtitleProps,
	ModalSubtitleRef
} from './ModalSubtitle';
import { keys as modal_subtitle_keys, ModalSubtitle } from './ModalSubtitle';
import type { ModalTitleDefaultElement, ModalTitleElement, ModalTitleProps, ModalTitleRef } from './ModalTitle';
import { keys as modal_title_keys, ModalTitle } from './ModalTitle';

// Keys
export const keys = {
	...modal_backdrop_keys,
	...modal_body_keys,
	...modal_footer_keys,
	...modal_header_keys,
	...modal_stack_keys,
	...modal_subtitle_keys,
	...modal_title_keys
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
