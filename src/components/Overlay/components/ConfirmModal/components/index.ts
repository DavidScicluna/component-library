import type {
	ConfirmModalActionsProps,
	ConfirmModalActionsRef,
	ConfirmModalActionsRenderActionProps,
	ConfirmModalActionsRenderCancelProps
} from './ConfirmModalActions';
import { ConfirmModalActions, keys as confirm_modal_actions_keys } from './ConfirmModalActions';
import type { ConfirmModalBackdropProps, ConfirmModalBackdropRef } from './ConfirmModalBackdrop';
import { ConfirmModalBackdrop, keys as confirm_modal_backdrop_keys } from './ConfirmModalBackdrop';
import type { ConfirmModalBodyProps, ConfirmModalBodyRef } from './ConfirmModalBody';
import {
	ConfirmModalBody,
	constants as confirm_modal_body_constants,
	keys as confirm_modal_body_keys
} from './ConfirmModalBody';
import type {
	ConfirmModalIconDefaultElement,
	ConfirmModalIconElement,
	ConfirmModalIconProps,
	ConfirmModalIconRef
} from './ConfirmModalIcon';
import { ConfirmModalIcon, keys as confirm_modal_icon_keys } from './ConfirmModalIcon';
import type { ConfirmModalStackProps, ConfirmModalStackRef } from './ConfirmModalStack';
import { ConfirmModalStack, keys as confirm_modal_stack_keys } from './ConfirmModalStack';
import type {
	ConfirmModalSubtitleDefaultElement,
	ConfirmModalSubtitleElement,
	ConfirmModalSubtitleProps,
	ConfirmModalSubtitleRef
} from './ConfirmModalSubtitle';
import { ConfirmModalSubtitle, keys as confirm_modal_subtitle_keys } from './ConfirmModalSubtitle';
import type {
	ConfirmModalTitleDefaultElement,
	ConfirmModalTitleElement,
	ConfirmModalTitleProps,
	ConfirmModalTitleRef
} from './ConfirmModalTitle';
import { ConfirmModalTitle, keys as confirm_modal_title_keys } from './ConfirmModalTitle';

// Constants
export const constants = { ...confirm_modal_body_constants };

// Keys
export const keys = {
	confirm_modal_actions_keys,
	confirm_modal_backdrop_keys,
	confirm_modal_body_keys,
	confirm_modal_icon_keys,
	confirm_modal_stack_keys,
	confirm_modal_subtitle_keys,
	confirm_modal_title_keys
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
