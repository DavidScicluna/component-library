import type {
	BackdropOverlayBlurType,
	BackdropOverlayBlurTypes,
	BackdropOverlayProps,
	BackdropOverlayRef
} from './components/BackdropOverlay';
import {
	BackdropOverlay,
	constants as backdropOverlayConstants,
	hooks as backdropOverlayHooks,
	keys as backdropOverlayKeys
} from './components/BackdropOverlay';
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
} from './components/ConfirmModal';
import {
	ConfirmModal,
	constants as confirmModalConstants,
	hooks as confirmModalHooks,
	keys as confirmModalKeys
} from './components/ConfirmModal';
import type {
	DummyPushableOverlayProps,
	DummyPushableOverlayRef,
	DummyPushableOverlayVariant
} from './components/DummyPushableOverlay';
import {
	constants as dummyPushableOverlayConstants,
	DummyPushableOverlay,
	hooks as dummyPushableOverlayHooks,
	keys as dummyPushableOverlayKeys
} from './components/DummyPushableOverlay';
import type {
	GlassOverlayBlurType,
	GlassOverlayBlurTypes,
	GlassOverlayProps,
	GlassOverlayRef
} from './components/GlassOverlay';
import {
	constants as glassOverlayConstants,
	GlassOverlay,
	hooks as glassOverlayHooks,
	keys as glassOverlayKeys
} from './components/GlassOverlay';
import type { HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef } from './components/HoverOverlay';
import { HoverOverlay, keys as hoverOverlayKeys } from './components/HoverOverlay';
import type { IndicatorPlacement, IndicatorPlacements, IndicatorProps, IndicatorRef } from './components/Indicator';
import {
	constants as indicatorConstants,
	hooks as indicatorHooks,
	Indicator,
	keys as indicatorKeys
} from './components/Indicator';
import type {
	LinearGradientColor,
	LinearGradientDirection,
	LinearGradientDirections,
	LinearGradientProps,
	LinearGradientRef
} from './components/LinearGradient';
import {
	constants as linearGradientConstants,
	hooks as linearGradientHooks,
	keys as linearGradientKeys,
	LinearGradient
} from './components/LinearGradient';
import type {
	LoadingOverlayBlurType,
	LoadingOverlayBlurTypes,
	LoadingOverlayProps,
	LoadingOverlayRef
} from './components/LoadingOverlay';
import {
	constants as loadingOverlayConstants,
	hooks as loadingOverlayHooks,
	keys as loadingOverlayKeys,
	LoadingOverlay
} from './components/LoadingOverlay';
import type {
	ModalBackdropElement,
	ModalBackdropProps,
	ModalBackdropRef,
	ModalBodyProps,
	ModalBodyRef,
	ModalContext,
	ModalDefaultElement,
	ModalElement,
	ModalFooterProps,
	ModalFooterRef,
	ModalFooterRenderActionProps,
	ModalFooterRenderCancelProps,
	ModalHeaderProps,
	ModalHeaderRef,
	ModalHeaderRenderCancelProps,
	ModalProps,
	ModalRef,
	ModalRenderBackdropProps,
	ModalRenderTriggerProps,
	ModalSize,
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
} from './components/Modal';
import { constants as modalConstants, hooks as modalHooks, keys as modalKeys, Modal } from './components/Modal';
import type { PopperPlacement, PopperProps, PopperRef } from './components/Popper';
import { constants as popperConstants, hooks as popperHooks, keys as popperKeys, Popper } from './components/Popper';
import type {
	PositionOverlayBlurType,
	PositionOverlayBlurTypes,
	PositionOverlayPlacement,
	PositionOverlayPlacements,
	PositionOverlayProps,
	PositionOverlayRef
} from './components/PositionOverlay';
import {
	constants as positionOverlayConstants,
	hooks as positionOverlayHooks,
	keys as positionOverlayKeys,
	PositionOverlay
} from './components/PositionOverlay';
import type { PushableOverlayProps, PushableOverlayRef, PushableOverlayVariant } from './components/PushableOverlay';
import {
	constants as pushableOverlayConstants,
	hooks as pushableOverlayHooks,
	keys as pushableOverlayKeys,
	PushableOverlay
} from './components/PushableOverlay';
import type { StateOverlayProps, StateOverlayRef, StateOverlayState } from './components/StateOverlay';
import { constants as stateOverlayConstants, keys as stateOverlayKeys, StateOverlay } from './components/StateOverlay';
import type { TooltipPlacement, TooltipProps, TooltipRef } from './components/Tooltip';
import {
	constants as tooltipConstants,
	hooks as tooltipHooks,
	keys as tooltipKeys,
	Tooltip
} from './components/Tooltip';

// Constants
export const constants = {
	...backdropOverlayConstants,
	...confirmModalConstants,
	...dummyPushableOverlayConstants,
	...glassOverlayConstants,
	...indicatorConstants,
	...linearGradientConstants,
	...loadingOverlayConstants,
	...modalConstants,
	...popperConstants,
	...positionOverlayConstants,
	...pushableOverlayConstants,
	...stateOverlayConstants,
	...tooltipConstants
};

// Keys
export const keys = {
	...backdropOverlayKeys,
	...confirmModalKeys,
	...dummyPushableOverlayKeys,
	...glassOverlayKeys,
	...hoverOverlayKeys,
	...indicatorKeys,
	...linearGradientKeys,
	...loadingOverlayKeys,
	...modalKeys,
	...popperKeys,
	...positionOverlayKeys,
	...pushableOverlayKeys,
	...stateOverlayKeys,
	...tooltipKeys
};

// Hooks
export const hooks = {
	...backdropOverlayHooks,
	...confirmModalHooks,
	...dummyPushableOverlayHooks,
	...glassOverlayHooks,
	...indicatorHooks,
	...linearGradientHooks,
	...loadingOverlayHooks,
	...modalHooks,
	...popperHooks,
	...positionOverlayHooks,
	...pushableOverlayHooks,
	...tooltipHooks
};

// Components
export {
	BackdropOverlay,
	ConfirmModal,
	DummyPushableOverlay,
	GlassOverlay,
	HoverOverlay,
	Indicator,
	LinearGradient,
	LoadingOverlay,
	Modal,
	Popper,
	PositionOverlay,
	PushableOverlay,
	StateOverlay,
	Tooltip
};

// Components Types
export type {
	BackdropOverlayBlurType,
	BackdropOverlayBlurTypes,
	BackdropOverlayProps,
	BackdropOverlayRef,
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
	DummyPushableOverlayProps,
	DummyPushableOverlayRef,
	DummyPushableOverlayVariant,
	GlassOverlayBlurType,
	GlassOverlayBlurTypes,
	GlassOverlayProps,
	GlassOverlayRef,
	HoverOverlayMouseEvent,
	HoverOverlayProps,
	HoverOverlayRef,
	IndicatorPlacement,
	IndicatorPlacements,
	IndicatorProps,
	IndicatorRef,
	LinearGradientColor,
	LinearGradientDirection,
	LinearGradientDirections,
	LinearGradientProps,
	LinearGradientRef,
	LoadingOverlayBlurType,
	LoadingOverlayBlurTypes,
	LoadingOverlayProps,
	LoadingOverlayRef,
	ModalBackdropElement,
	ModalBackdropProps,
	ModalBackdropRef,
	ModalBodyProps,
	ModalBodyRef,
	ModalContext,
	ModalDefaultElement,
	ModalElement,
	ModalFooterProps,
	ModalFooterRef,
	ModalFooterRenderActionProps,
	ModalFooterRenderCancelProps,
	ModalHeaderProps,
	ModalHeaderRef,
	ModalHeaderRenderCancelProps,
	ModalProps,
	ModalRef,
	ModalRenderBackdropProps,
	ModalRenderTriggerProps,
	ModalSize,
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
	PopperPlacement,
	PopperProps,
	PopperRef,
	PositionOverlayBlurType,
	PositionOverlayBlurTypes,
	PositionOverlayPlacement,
	PositionOverlayPlacements,
	PositionOverlayProps,
	PositionOverlayRef,
	PushableOverlayProps,
	PushableOverlayRef,
	PushableOverlayVariant,
	StateOverlayProps,
	StateOverlayRef,
	StateOverlayState,
	TooltipPlacement,
	TooltipProps,
	TooltipRef
};
