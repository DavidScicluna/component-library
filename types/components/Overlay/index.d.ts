/// <reference types="react" />
import type { BackdropOverlayBlurType, BackdropOverlayBlurTypes, BackdropOverlayProps, BackdropOverlayRef } from './components/BackdropOverlay';
import { BackdropOverlay } from './components/BackdropOverlay';
import type { ConfirmModalActionsProps, ConfirmModalActionsRef, ConfirmModalActionsRenderActionProps, ConfirmModalActionsRenderCancelProps, ConfirmModalBackdropProps, ConfirmModalBackdropRef, ConfirmModalBodyProps, ConfirmModalBodyRef, ConfirmModalContext, ConfirmModalDefaultElement, ConfirmModalElement, ConfirmModalIconDefaultElement, ConfirmModalIconElement, ConfirmModalIconProps, ConfirmModalIconRef, ConfirmModalProps, ConfirmModalRef, ConfirmModalRenderBackdropProps, ConfirmModalRenderCancelProps, ConfirmModalRenderTriggerProps, ConfirmModalSize, ConfirmModalStackProps, ConfirmModalStackRef, ConfirmModalSubtitleDefaultElement, ConfirmModalSubtitleElement, ConfirmModalSubtitleProps, ConfirmModalSubtitleRef, ConfirmModalTitleDefaultElement, ConfirmModalTitleElement, ConfirmModalTitleProps, ConfirmModalTitleRef } from './components/ConfirmModal';
import { ConfirmModal } from './components/ConfirmModal';
import type { DummyPushableOverlayProps, DummyPushableOverlayRef, DummyPushableOverlayVariant } from './components/DummyPushableOverlay';
import { DummyPushableOverlay } from './components/DummyPushableOverlay';
import type { GlassOverlayBlurType, GlassOverlayBlurTypes, GlassOverlayProps, GlassOverlayRef } from './components/GlassOverlay';
import { GlassOverlay } from './components/GlassOverlay';
import type { HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef } from './components/HoverOverlay';
import { HoverOverlay } from './components/HoverOverlay';
import type { IndicatorPlacement, IndicatorPlacements, IndicatorProps, IndicatorRef } from './components/Indicator';
import { Indicator } from './components/Indicator';
import type { LinearGradientColor, LinearGradientDirection, LinearGradientDirections, LinearGradientProps, LinearGradientRef } from './components/LinearGradient';
import { LinearGradient } from './components/LinearGradient';
import type { LoadingOverlayBlurType, LoadingOverlayBlurTypes, LoadingOverlayProps, LoadingOverlayRef } from './components/LoadingOverlay';
import { LoadingOverlay } from './components/LoadingOverlay';
import type { ModalBackdropProps, ModalBackdropRef, ModalBodyProps, ModalBodyRef, ModalContext, ModalDefaultElement, ModalElement, ModalFooterProps, ModalFooterRef, ModalFooterRenderActionProps, ModalFooterRenderCancelProps, ModalHeaderProps, ModalHeaderRef, ModalHeaderRenderCancelProps, ModalProps, ModalRef, ModalRenderBackdropProps, ModalRenderTriggerProps, ModalSize, ModalStackProps, ModalStackRef, ModalSubtitleDefaultElement, ModalSubtitleElement, ModalSubtitleProps, ModalSubtitleRef, ModalTitleDefaultElement, ModalTitleElement, ModalTitleProps, ModalTitleRef } from './components/Modal';
import { Modal } from './components/Modal';
import type { PopperPlacement, PopperProps, PopperRef } from './components/Popper';
import { Popper } from './components/Popper';
import type { PositionOverlayBlurType, PositionOverlayBlurTypes, PositionOverlayPlacement, PositionOverlayPlacements, PositionOverlayProps, PositionOverlayRef } from './components/PositionOverlay';
import { PositionOverlay } from './components/PositionOverlay';
import type { PushableOverlayProps, PushableOverlayRef, PushableOverlayVariant } from './components/PushableOverlay';
import { PushableOverlay } from './components/PushableOverlay';
import type { StateOverlayProps, StateOverlayRef, StateOverlayState } from './components/StateOverlay';
import { StateOverlay } from './components/StateOverlay';
import type { TooltipPlacement, TooltipProps, TooltipRef } from './components/Tooltip';
import { Tooltip } from './components/Tooltip';
export declare const constants: {
    __DEFAULT_TOOLTIP_CLOSE_DELAY__: 0;
    __DEFAULT_TOOLTIP_CLOSE_ON_CLICK__: true;
    __DEFAULT_TOOLTIP_CLOSE_ON_ESC__: true;
    __DEFAULT_TOOLTIP_GUTTER__: 8;
    __DEFAULT_TOOLTIP_IS_DISABLED__: false;
    __DEFAULT_TOOLTIP_IS_OPEN__: false;
    __DEFAULT_TOOLTIP_LABEL__: "";
    __DEFAULT_TOOLTIP_OPEN_DELAY__: 0;
    __DEFAULT_TOOLTIP_PLACEMENT__: TooltipPlacement;
    __DEFAULT_STATE_OVERLAY_HAS_GLASS__: false;
    __DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__: false;
    __DEFAULT_STATE_OVERLAY_STATE__: StateOverlayState;
    __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__: false;
    __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__: false;
    __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__: false;
    __DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__: false;
    __DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__: false;
    __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__: true;
    __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__: Record<"base" | "active" | "hover" | "pushable", import("../..").ThemeBorderWidth>;
    __DEFAULT_PUSHABLE_OVERLAY_VARIANT__: PushableOverlayVariant;
    __DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__: 0.5;
    __DEFAULT_POSITION_OVERLAY_BLUR__: import("../..").ThemeBlurClass;
    __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__: PositionOverlayBlurType;
    __DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__: true;
    __DEFAULT_POSITION_OVERLAY_HAS_GLASS__: true;
    __DEFAULT_POSITION_OVERLAY_IS_VISIBLE__: false;
    __DEFAULT_POSITION_OVERLAY_PLACEMENT__: PositionOverlayPlacement;
    __DEFAULT_POSITION_OVERLAY_RADIUS__: import("../..").ThemeRadius;
    __DEFAULT_POPPER_CLOSE_DELAY__: 0;
    __DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE__: true;
    __DEFAULT_POPPER_CLOSE_ON_ESC__: true;
    __DEFAULT_POPPER_GUTTER__: 8;
    __DEFAULT_POPPER_IS_DISABLED__: false;
    __DEFAULT_POPPER_IS_OPEN__: false;
    __DEFAULT_POPPER_OPEN_DELAY__: 0;
    __DEFAULT_POPPER_PLACEMENT__: PopperPlacement;
    __DEFAULT_MODAL_CLOSE_ON_ESC__: true;
    __DEFAULT_MODAL_CLOSE_ON_OVERLAY_CLICK__: true;
    __DEFAULT_MODAL_HAS_BACKDROP__: true;
    __DEFAULT_MODAL_ID__: string;
    __DEFAULT_MODAL_IS_OPEN__: false;
    __DEFAULT_MODAL_SIZE__: ModalSize;
    __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__: 0.5;
    __DEFAULT_LOADING_OVERLAY_BLUR__: import("../..").ThemeBlurClass;
    __DEFAULT_LOADING_OVERLAY_BLUR_TYPE__: LoadingOverlayBlurType;
    __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__: true;
    __DEFAULT_LOADING_OVERLAY_HAS_GLASS__: true;
    __DEFAULT_LOADING_OVERLAY_IS_LOADING__: false;
    __DEFAULT_LOADING_OVERLAY_RADIUS__: import("../..").ThemeRadius;
    __DEFAULT_LINEAR_GRADIENT_DIRECTION__: LinearGradientDirection;
    __DEFAULT_LINEAR_GRADIENT_FROM__: LinearGradientColor;
    __DEFAULT_LINEAR_GRADIENT_MIDDLE__: LinearGradientColor;
    __DEFAULT_LINEAR_GRADIENT_TO__: LinearGradientColor;
    __DEFAULT_INDICATOR_IS_VISIBLE__: false;
    __DEFAULT_INDICATOR_OFFSET__: 0;
    __DEFAULT_INDICATOR_PLACEMENT__: IndicatorPlacement;
    __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__: 0.5;
    __DEFAULT_GLASS_OVERLAY_BLUR__: import("../..").ThemeBlurClass;
    __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__: GlassOverlayBlurType;
    __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__: true;
    __DEFAULT_GLASS_OVERLAY_RADIUS__: import("../..").ThemeRadius;
    __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__: true;
    __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED__: false;
    __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__: DummyPushableOverlayVariant;
    __DEFAULT_CONFIRM_MODAL_BODY_SPACING__: import("../..").ThemeSpacing;
    __DEFAULT_CONFIRM_MODAL_CLOSE_ON_ESC__: true;
    __DEFAULT_CONFIRM_MODAL_CLOSE_ON_OVERLAY_CLICK__: true;
    __DEFAULT_CONFIRM_MODAL_HAS_BACKDROP__: true;
    __DEFAULT_CONFIRM_MODAL_ID__: string;
    __DEFAULT_CONFIRM_MODAL_IS_OPEN__: false;
    __DEFAULT_CONFIRM_MODAL_SIZE__: ConfirmModalSize;
    __DEFAULT_CONFIRM_MODAL_SPACING__: import("../..").ThemeSpacing;
    __DEFAULT_BACKDROP_OVERLAY_AMOUNT__: 0.5;
    __DEFAULT_BACKDROP_OVERLAY_BLUR__: import("../..").ThemeBlurClass;
    __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__: BackdropOverlayBlurType;
    __DEFAULT_BACKDROP_OVERLAY_RADIUS__: import("../..").ThemeRadius;
};
export declare const keys: {
    __KEYS_TOOLTIP_CLASS__: "ds-cl-tooltip";
    __KEYS_STATE_OVERLAY_CLASS__: "ds-cl-state-overlay";
    __KEYS_PUSHABLE_OVERLAY_CLASS__: "ds-cl-pushable-overlay";
    __KEYS_POSITION_OVERLAY_CLASS__: "ds-cl-position-overlay";
    __KEYS_POPPER_CLASS__: "ds-cl-popper";
    __KEYS_MODAL_TITLE_CLASS__: "ds-cl-modal-title";
    __KEYS_MODAL_SUBTITLE_CLASS__: "ds-cl-modal-subtitle";
    __KEYS_MODAL_STACK_CLASS__: "ds-cl-modal-stack";
    __KEYS_MODAL_HEADER_CLASS__: "ds-cl-modal-header";
    __KEYS_MODAL_FOOTER_CLASS__: "ds-cl-modal-footer";
    __KEYS_MODAL_BODY_CLASS__: "ds-cl-modal-body";
    __KEYS_MODAL_BACKDROP_CLASS__: "ds-cl-modal-backdrop";
    __KEYS_MODAL_CLASS__: "ds-cl-modal";
    __KEYS_LOADING_OVERLAY_CLASS__: "ds-cl-loading-overlay";
    __KEYS_LINEAR_GRADIENT_CLASS__: "ds-cl-linear-gradient";
    __KEYS_INDICATOR_CLASS__: "ds-cl-indicator";
    __KEYS_HOVER_OVERLAY_CLASS__: "ds-cl-hover-overlay";
    __KEYS_GLASS_OVERLAY_CLASS__: "ds-cl-glass-overlay";
    __KEY_DUMMY_PUSHABLE_OVERLAY_CLASS__: "ds-cl-dummy-pushable-overlay";
    confirm_modal_actions_keys: typeof import("./components/ConfirmModal/components/ConfirmModalActions/common/keys");
    confirm_modal_backdrop_keys: typeof import("./components/ConfirmModal/components/ConfirmModalBackdrop/common/keys");
    confirm_modal_body_keys: typeof import("./components/ConfirmModal/components/ConfirmModalBody/common/keys");
    confirm_modal_icon_keys: typeof import("./components/ConfirmModal/components/ConfirmModalIcon/common/keys");
    confirm_modal_stack_keys: typeof import("./components/ConfirmModal/components/ConfirmModalStack/common/keys");
    confirm_modal_subtitle_keys: typeof import("./components/ConfirmModal/components/ConfirmModalSubtitle/common/keys");
    confirm_modal_title_keys: typeof import("./components/ConfirmModal/components/ConfirmModalTitle/common/keys");
    __KEYS_CONFIRM_MODAL_CLASS__: "ds-cl-confirm-modal";
    __KEYS_BACKDROP_OVERLAY_CLASS__: "ds-cl-backdrop-overlay";
};
export declare const hooks: {
    useTooltipClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        color: TooltipProps<Element_1>["color"];
        colorMode: TooltipProps<Element_1>["colorMode"];
    }) => {
        content: string;
        tooltip: string;
        arrow: string;
    };
    usePushableOverlayClasses: <Element_2 extends import("react").ElementType = "div">(props: {
        color: PushableOverlayProps<Element_2>["color"];
        radius: PushableOverlayProps<Element_2>["radius"];
        colorMode: PushableOverlayProps<Element_2>["colorMode"];
        isActive: PushableOverlayProps<Element_2>["isActive"];
        isDisabled: PushableOverlayProps<Element_2>["isDisabled"];
        isFixed: PushableOverlayProps<Element_2>["isFixed"];
        isOutlined: PushableOverlayProps<Element_2>["isOutlined"];
        isPushable: PushableOverlayProps<Element_2>["isPushable"];
        variant: PushableOverlayProps<Element_2>["variant"];
    }) => string;
    usePushableOverlayStyles: <Element_3 extends import("react").ElementType = "div">(props: {
        color: PushableOverlayProps<Element_3>["color"];
        colorMode: PushableOverlayProps<Element_3>["colorMode"];
        isActive: PushableOverlayProps<Element_3>["isActive"];
        isDisabled: PushableOverlayProps<Element_3>["isDisabled"];
        isFixed: PushableOverlayProps<Element_3>["isFixed"];
        isPushable: PushableOverlayProps<Element_3>["isPushable"];
        variant: PushableOverlayProps<Element_3>["variant"];
    }) => import("@emotion/serialize").CSSObject;
    usePositionOverlayClasses: <Element_4 extends import("react").ElementType = "div">(props: {
        radius: PositionOverlayProps<Element_4>["radius"];
        blur: PositionOverlayProps<Element_4>["blur"];
        blurType: PositionOverlayProps<Element_4>["blurType"];
        hasGlass: PositionOverlayProps<Element_4>["hasGlass"];
    }) => {
        container: string;
        overlay: string;
    };
    usePositionOverlayStyles: <Element_5 extends import("react").ElementType = "div">(props: {
        color: PositionOverlayProps<Element_5>["color"];
        colorMode: PositionOverlayProps<Element_5>["colorMode"];
        placement: PositionOverlayProps<Element_5>["placement"];
        backdropAmount: PositionOverlayProps<Element_5>["backdropAmount"];
        hasBackground: PositionOverlayProps<Element_5>["hasBackground"];
    }) => {
        position: import("@emotion/serialize").CSSObject;
        overlay: import("@emotion/serialize").CSSObject;
    };
    usePopperClasses: <Element_6 extends import("react").ElementType = "div">(props: {
        color: PopperProps<Element_6>["color"];
        radius: PopperProps<Element_6>["radius"];
        colorMode: PopperProps<Element_6>["colorMode"];
    }) => {
        popper: string;
        arrow: string;
    };
    useModalClasses: <Element_7 extends "dialog" = "dialog">(props: {
        color?: ModalProps<Element_7>["color"] | undefined;
        spacing?: ModalProps<Element_7>["spacing"] | undefined;
        size?: ModalProps<Element_7>["size"] | undefined;
        colorMode?: ModalProps<Element_7>["colorMode"] | undefined;
    }) => {
        content: string;
        container: string;
        backdrop: string;
    };
    useModalContext: <Element_8 extends "dialog" = "dialog">() => {
        color: ModalProps<Element_8>["color"] | undefined;
        colorMode: ModalProps<Element_8>["colorMode"] | undefined;
        id: string;
        isOpen: boolean;
        onClose: (() => void) & import("react").ReactEventHandler<HTMLDialogElement>;
        size: ModalSize;
        spacing: import("../..").ThemeSpacing;
    };
    useLoadingOverlayClasses: <Element_9 extends import("react").ElementType = "div">(props: {
        radius: LoadingOverlayProps<Element_9>["radius"];
        blur: LoadingOverlayProps<Element_9>["blur"];
        blurType: LoadingOverlayProps<Element_9>["blurType"];
        hasGlass: LoadingOverlayProps<Element_9>["hasGlass"];
    }) => {
        container: string;
        overlay: string;
    };
    useLoadingOverlayStyles: <Element_10 extends import("react").ElementType = "div">(props: {
        color: LoadingOverlayProps<Element_10>["color"];
        colorMode: LoadingOverlayProps<Element_10>["colorMode"];
        backdropAmount: LoadingOverlayProps<Element_10>["backdropAmount"];
        hasBackground: LoadingOverlayProps<Element_10>["hasBackground"];
    }) => import("@emotion/serialize").CSSObject;
    useLinearGradientClasses: <Element_11 extends import("react").ElementType = "div">(props: {
        direction: LinearGradientProps<Element_11>["direction"];
        from: LinearGradientProps<Element_11>["from"];
        to: LinearGradientProps<Element_11>["to"];
        middle: LinearGradientProps<Element_11>["middle"];
    }) => string;
    useIndicatorStyles: <Element_12 extends import("react").ElementType = "div">(props: {
        offset: IndicatorProps<Element_12>["offset"];
        placement: IndicatorProps<Element_12>["placement"];
    }) => {
        position: import("@emotion/serialize").CSSObject;
        overlay: import("@emotion/serialize").CSSObject;
    };
    useGlassOverlayClasses: <Element_13 extends import("react").ElementType = "div">(props: {
        radius: GlassOverlayProps<Element_13>["radius"];
        blur: GlassOverlayProps<Element_13>["blur"];
        blurType: GlassOverlayProps<Element_13>["blurType"];
    }) => {
        container: string;
        overlay: string;
    };
    useGlassOverlayStyles: <Element_14 extends import("react").ElementType = "div">(props: {
        color: GlassOverlayProps<Element_14>["color"];
        colorMode: GlassOverlayProps<Element_14>["colorMode"];
        backdropAmount: GlassOverlayProps<Element_14>["backdropAmount"];
        hasBackground: GlassOverlayProps<Element_14>["hasBackground"];
    }) => import("@emotion/serialize").CSSObject;
    useDummyPushableOverlayClasses: <Element_15 extends import("react").ElementType = "div">(props: {
        radius: DummyPushableOverlayProps<Element_15>["radius"];
        colorMode: DummyPushableOverlayProps<Element_15>["colorMode"];
        isOutlined: DummyPushableOverlayProps<Element_15>["isOutlined"];
        variant: DummyPushableOverlayProps<Element_15>["variant"];
        isAnimated: DummyPushableOverlayProps<Element_15>["isAnimated"];
    }) => string;
    useDummyPushableOverlayStyles: <Element_16 extends import("react").ElementType = "div">(props: {
        color: DummyPushableOverlayProps<Element_16>["color"];
        colorMode: DummyPushableOverlayProps<Element_16>["colorMode"];
        variant: DummyPushableOverlayProps<Element_16>["variant"];
    }) => import("@emotion/serialize").CSSObject;
    useConfirmModalClasses: <Element_17 extends "dialog" = "dialog">(props: {
        color?: ConfirmModalProps<Element_17>["color"] | undefined;
        spacing?: ConfirmModalProps<Element_17>["spacing"] | undefined;
        size?: ConfirmModalProps<Element_17>["size"] | undefined;
        colorMode?: ConfirmModalProps<Element_17>["colorMode"] | undefined;
    }) => {
        content: string;
        container: string;
        backdrop: string;
        cancel: string;
    };
    useConfirmModalContext: <Element_18 extends "dialog" = "dialog">() => {
        color: ConfirmModalProps<Element_18>["color"] | undefined;
        colorMode: ConfirmModalProps<Element_18>["colorMode"] | undefined;
        id: string;
        isOpen: boolean;
        onClose: (() => void) & import("react").ReactEventHandler<HTMLDialogElement>;
        size: ConfirmModalSize;
        spacing: import("../..").ThemeSpacing;
    };
    useBackdropOverlayClasses: <Element_19 extends import("react").ElementType = "div">(props: {
        radius: BackdropOverlayProps<Element_19>["radius"];
        blur: BackdropOverlayProps<Element_19>["blur"];
        blurType: BackdropOverlayProps<Element_19>["blurType"];
    }) => {
        container: string;
        overlay: string;
    };
    useBackdropOverlayStyles: <Element_20 extends import("react").ElementType = "div">(props: {
        color: BackdropOverlayProps<Element_20>["color"];
        colorMode: BackdropOverlayProps<Element_20>["colorMode"];
        amount: BackdropOverlayProps<Element_20>["amount"];
    }) => import("@emotion/serialize").CSSObject;
};
export { BackdropOverlay, ConfirmModal, DummyPushableOverlay, GlassOverlay, HoverOverlay, Indicator, LinearGradient, LoadingOverlay, Modal, Popper, PositionOverlay, PushableOverlay, StateOverlay, Tooltip };
export type { BackdropOverlayBlurType, BackdropOverlayBlurTypes, BackdropOverlayProps, BackdropOverlayRef, ConfirmModalActionsProps, ConfirmModalActionsRef, ConfirmModalActionsRenderActionProps, ConfirmModalActionsRenderCancelProps, ConfirmModalBackdropProps, ConfirmModalBackdropRef, ConfirmModalBodyProps, ConfirmModalBodyRef, ConfirmModalContext, ConfirmModalDefaultElement, ConfirmModalElement, ConfirmModalIconDefaultElement, ConfirmModalIconElement, ConfirmModalIconProps, ConfirmModalIconRef, ConfirmModalProps, ConfirmModalRef, ConfirmModalRenderBackdropProps, ConfirmModalRenderCancelProps, ConfirmModalRenderTriggerProps, ConfirmModalSize, ConfirmModalStackProps, ConfirmModalStackRef, ConfirmModalSubtitleDefaultElement, ConfirmModalSubtitleElement, ConfirmModalSubtitleProps, ConfirmModalSubtitleRef, ConfirmModalTitleDefaultElement, ConfirmModalTitleElement, ConfirmModalTitleProps, ConfirmModalTitleRef, DummyPushableOverlayProps, DummyPushableOverlayRef, DummyPushableOverlayVariant, GlassOverlayBlurType, GlassOverlayBlurTypes, GlassOverlayProps, GlassOverlayRef, HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef, IndicatorPlacement, IndicatorPlacements, IndicatorProps, IndicatorRef, LinearGradientColor, LinearGradientDirection, LinearGradientDirections, LinearGradientProps, LinearGradientRef, LoadingOverlayBlurType, LoadingOverlayBlurTypes, LoadingOverlayProps, LoadingOverlayRef, ModalBackdropProps, ModalBackdropRef, ModalBodyProps, ModalBodyRef, ModalContext, ModalDefaultElement, ModalElement, ModalFooterProps, ModalFooterRef, ModalFooterRenderActionProps, ModalFooterRenderCancelProps, ModalHeaderProps, ModalHeaderRef, ModalHeaderRenderCancelProps, ModalProps, ModalRef, ModalRenderBackdropProps, ModalRenderTriggerProps, ModalSize, ModalStackProps, ModalStackRef, ModalSubtitleDefaultElement, ModalSubtitleElement, ModalSubtitleProps, ModalSubtitleRef, ModalTitleDefaultElement, ModalTitleElement, ModalTitleProps, ModalTitleRef, PopperPlacement, PopperProps, PopperRef, PositionOverlayBlurType, PositionOverlayBlurTypes, PositionOverlayPlacement, PositionOverlayPlacements, PositionOverlayProps, PositionOverlayRef, PushableOverlayProps, PushableOverlayRef, PushableOverlayVariant, StateOverlayProps, StateOverlayRef, StateOverlayState, TooltipPlacement, TooltipProps, TooltipRef };
//# sourceMappingURL=index.d.ts.map