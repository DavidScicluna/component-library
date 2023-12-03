/// <reference types="react" />
import type { CarouselArrowDirection, CarouselContext, CarouselItem, CarouselItems, CarouselOrientation, CarouselProps, CarouselRef, CarouselRenderIconButtonProps, CarouselScrollAmount, CarouselVariant } from './common/types';
import Carousel from './Carousel';
import type { CarouselArrowButtonDefaultElement, CarouselArrowButtonElement, CarouselArrowButtonGroupProps, CarouselArrowButtonGroupRef, CarouselArrowButtonMouseEvent, CarouselArrowButtonProps, CarouselArrowButtonRef, CarouselArrowIconButtonDefaultElement, CarouselArrowIconButtonElement, CarouselArrowIconButtonGroupProps, CarouselArrowIconButtonGroupRef, CarouselArrowIconButtonMouseEvent, CarouselArrowIconButtonProps, CarouselArrowIconButtonRef, CarouselDotProps, CarouselDotRef, CarouselDotsProps, CarouselDotsRef, CarouselDotsType, CarouselDotType, CarouselLeftArrowButtonDefaultElement, CarouselLeftArrowButtonElement, CarouselLeftArrowButtonProps, CarouselLeftArrowButtonRef, CarouselLeftArrowIconButtonDefaultElement, CarouselLeftArrowIconButtonElement, CarouselLeftArrowIconButtonProps, CarouselLeftArrowIconButtonRef, CarouselLeftLinearGradientProps, CarouselLeftLinearGradientRef, CarouselLinearGradientProps, CarouselLinearGradientRef, CarouselOverlayArrowButtonDefaultElement, CarouselOverlayArrowButtonElement, CarouselOverlayArrowButtonProps, CarouselOverlayArrowButtonRef, CarouselOverlayArrowIconButtonDefaultElement, CarouselOverlayArrowIconButtonElement, CarouselOverlayArrowIconButtonProps, CarouselOverlayArrowIconButtonRef, CarouselOverlayLeftArrowButtonDefaultElement, CarouselOverlayLeftArrowButtonElement, CarouselOverlayLeftArrowButtonProps, CarouselOverlayLeftArrowButtonRef, CarouselOverlayLeftArrowIconButtonDefaultElement, CarouselOverlayLeftArrowIconButtonElement, CarouselOverlayLeftArrowIconButtonProps, CarouselOverlayLeftArrowIconButtonRef, CarouselOverlayRightArrowButtonDefaultElement, CarouselOverlayRightArrowButtonElement, CarouselOverlayRightArrowButtonProps, CarouselOverlayRightArrowButtonRef, CarouselOverlayRightArrowIconButtonDefaultElement, CarouselOverlayRightArrowIconButtonElement, CarouselOverlayRightArrowIconButtonProps, CarouselOverlayRightArrowIconButtonRef, CarouselRightArrowButtonDefaultElement, CarouselRightArrowButtonElement, CarouselRightArrowButtonProps, CarouselRightArrowButtonRef, CarouselRightArrowIconButtonDefaultElement, CarouselRightArrowIconButtonElement, CarouselRightArrowIconButtonProps, CarouselRightArrowIconButtonRef, CarouselRightLinearGradientProps, CarouselRightLinearGradientRef } from './components';
import { CarouselArrowButton, CarouselArrowButtonGroup, CarouselArrowIconButton, CarouselArrowIconButtonGroup, CarouselDots, CarouselLeftArrowButton, CarouselLeftArrowIconButton, CarouselLeftLinearGradient, CarouselLinearGradient, CarouselOverlayArrowButton, CarouselOverlayArrowIconButton, CarouselOverlayLeftArrowButton, CarouselOverlayLeftArrowIconButton, CarouselOverlayRightArrowButton, CarouselOverlayRightArrowIconButton, CarouselRightArrowButton, CarouselRightArrowIconButton, CarouselRightLinearGradient } from './components';
export declare const constants: {
    __DEFAULT_CAROUSEL_DOTS__: CarouselDotsType;
    __DEFAULT_CAROUSEL_DOTS_SIZE__: import("../../../..").ThemeSpacing;
    __DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE__: false;
    __DEFAULT_CAROUSEL_OVERLAY_ARROW_ICON_BUTTON_IS_VISIBLE__: false;
    __DEFAULT_CAROUSEL_OVERLAY_ARROW_BUTTON_IS_VISIBLE__: false;
    __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_ATTACHED__: true;
    __DEFAULT_CAROUSEL_ARROW_BUTTON_GROUP_IS_FULLWIDTH__: true;
    __DEFAULT_CAROUSEL_ARROW_BUTTON_BOTTOM_LABEL__: "Scroll Bottom";
    __DEFAULT_CAROUSEL_ARROW_BUTTON_HAS_ICON__: true;
    __DEFAULT_CAROUSEL_ARROW_BUTTON_IS_FULLWIDTH__: true;
    __DEFAULT_CAROUSEL_ARROW_BUTTON_LEFT_LABEL__: "Scroll Left";
    __DEFAULT_CAROUSEL_ARROW_BUTTON_RIGHT_LABEL__: "Scroll Right";
    __DEFAULT_CAROUSEL_ARROW_BUTTON_TOP_LABEL__: "Scroll Top";
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_GROUP_IS_ATTACHED__: true;
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_BOTTOM_LABEL__: "Scroll Bottom";
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP__: true;
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LEFT_LABEL__: "Scroll Left";
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_PLACEMENT__: import("../../../Overlay").TooltipPlacement;
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_RIGHT_LABEL__: "Scroll Right";
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_TOP_LABEL__: "Scroll Top";
    __DEFAULT_CAROUSEL_DURATION_NUMBER__: number;
    __DEFAULT_CAROUSEL_DURATION_THEME__: import("../../../..").ThemeDuration;
    __DEFAULT_CAROUSEL_ID__: string;
    __DEFAULT_CAROUSEL_ITEMS__: CarouselItems;
    __DEFAULT_CAROUSEL_ORIENTTATION__: CarouselOrientation;
    __DEFAULT_CAROUSEL_SCROLL_AMOUNT__: CarouselScrollAmount;
    __DEFAULT_CAROUSEL_VARIANT__: CarouselVariant;
    __DEFAULT_CAROUSEL_VISIBLE_ITEMS__: import("./common/types").CarouselVisibleItems;
};
export declare const keys: {
    __KEYS_CAROUSEL_RIGHT_ARROW_BUTTON_CLASS__: "ds-cl-carousel-right-arrow-button";
    __KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_CLASS__: "ds-cl-carousel-overlay-right-arrow-button";
    __KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_CLASS__: "ds-cl-carousel-overlay-left-arrow-button";
    __KEYS_CAROUSEL_OVERLAY_ARROW_BUTTON_CLASS__: "ds-cl-carousel-overlay-arrow-button";
    __KEYS_CAROUSEL_LEFT_ARROW_BUTTON_CLASS__: "ds-cl-carousel-left-arrow-button";
    __KEYS_CAROUSEL_DOT_CLASS__: "ds-cl-carousel-dot";
    __KEYS_CAROUSEL_DOTS_CLASS__: "ds-cl-carousel-dots";
    __KEYS_CAROUSEL_ARROW_BUTTON_GROUP_CLASS__: "ds-cl-carousel-arrow-button-group";
    __KEYS_CAROUSEL_ARROW_BUTTON_CLASS__: "ds-cl-carousel-arrow-button";
    __KEYS_CAROUSEL_RIGHT_LINEAR_GRADIENT_CLASS__: "ds-cl-carousel-right-linear-gradient";
    __KEYS_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_CLASS__: "ds-cl-carousel-right-arrow-icon-button";
    __KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS__: "ds-cl-carousel-overlay-right-arrow-icon-button";
    __KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_ICON_BUTTON_CLASS__: "ds-cl-carousel-overlay-left-arrow-icon-button";
    __KEYS_CAROUSEL_OVERLAY_ARROW_ICON_BUTTON_CLASS__: "ds-cl-carousel-overlay-arrow-icon-button";
    __KEYS_CAROUSEL_LINEAR_GRADIENT_CLASS__: "ds-cl-carousel-linear-gradient";
    __KEYS_CAROUSEL_LEFT_LINEAR_GRADIENT_CLASS__: "ds-cl-carousel-left-linear-gradient";
    __KEYS_CAROUSEL_LEFT_ARROW_ICON_BUTTON_CLASS__: "ds-cl-carousel-left-arrow-icon-button";
    __KEYS_CAROUSEL_ITEM_CLASS__: "ds-cl-carousel-item";
    __KEYS_CAROUSEL_ARROW_ICON_BUTTON_GROUP_CLASS__: "ds-cl-carousel-arrow-icon-button-group";
    __KEYS_CAROUSEL_ARROW_ICON_BUTTON_CLASS__: "ds-cl-carousel-arrow-icon-button";
    __KEYS_CAROUSEL_CLASS__: "ds-cl-carousel";
};
export * as utils from './common/utils';
export declare const hooks: {
    useCarouselDotClasses: <Element_1 extends import("react").ElementType = "div">(props: Pick<CarouselDotProps<Element_1>, "color" | "size" | "colorMode"> & {
        isVisible: boolean;
    }) => {
        item: string;
        scale100: string;
        scale75: string;
        scale50: string;
    };
    useCarouselArrowState: (direction: import("../../../..").PickFrom<CarouselVariant, "left" | "right">) => {
        isDisabled: boolean;
        isVisible: boolean;
    };
    useCarouselClasses: <Element_2 extends import("react").ElementType = "div">(props: {
        orientation: CarouselProps<Element_2>["orientation"];
        spacing: CarouselProps<Element_2>["spacing"];
        variant: CarouselProps<Element_2>["variant"];
    }) => Record<"items" | "item", string> & {
        overflow: Record<"hidden" | "auto", string>;
    };
    useCarouselContext: <Element_3 extends import("react").ElementType = "div">() => {
        color: CarouselProps<Element_3>["color"];
        colorMode: CarouselProps<Element_3>["colorMode"];
        id: string | CarouselProps<Element_3>["id"];
        items: CarouselItems;
        visibleItems: import("./common/types").CarouselVisibleItems;
        scrollAmount: CarouselScrollAmount;
        spacing: import("../../../..").ThemeSpacing;
        orientation: CarouselOrientation;
        variant: CarouselVariant;
    };
    useCarouselManager: () => {
        getItemByKey: (key: string) => import("../../../..").Undefinable<CarouselItem>;
        getItemIndexByKey: (key: string) => import("../../../..").Undefinable<number>;
        getItemByIndex: (index: number) => import("../../../..").Undefinable<CarouselItem>;
        getItemPos: (key: string) => Record<"next" | "prev", import("../../../..").Undefinable<CarouselItem>>;
        getNextItem: () => import("../../../..").Undefinable<CarouselItem>;
        getPrevItem: () => import("../../../..").Undefinable<CarouselItem>;
        isFirstItem: (key: string) => boolean;
        isFirstItemVisible: () => boolean;
        getFirstVisibleItem: () => import("../../../..").Undefinable<CarouselItem>;
        isItemVisible: (key: string) => boolean;
        isLastItem: (key: string) => boolean;
        isLastItemVisible: () => boolean;
        getLastVisibleItem: () => import("../../../..").Undefinable<CarouselItem>;
        scrollToItem: (item?: CarouselItem | undefined, inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition) => void;
        scrollNext: (inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition) => void;
        scrollPrev: (inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition) => void;
    };
};
export { Carousel, CarouselArrowButton, CarouselArrowButtonGroup, CarouselArrowIconButton, CarouselArrowIconButtonGroup, CarouselDots, CarouselLeftArrowButton, CarouselLeftArrowIconButton, CarouselLeftLinearGradient, CarouselLinearGradient, CarouselOverlayArrowButton, CarouselOverlayArrowIconButton, CarouselOverlayLeftArrowButton, CarouselOverlayLeftArrowIconButton, CarouselOverlayRightArrowButton, CarouselOverlayRightArrowIconButton, CarouselRightArrowButton, CarouselRightArrowIconButton, CarouselRightLinearGradient };
export type { CarouselArrowButtonDefaultElement, CarouselArrowButtonElement, CarouselArrowButtonGroupProps, CarouselArrowButtonGroupRef, CarouselArrowButtonMouseEvent, CarouselArrowButtonProps, CarouselArrowButtonRef, CarouselArrowDirection, CarouselArrowIconButtonDefaultElement, CarouselArrowIconButtonElement, CarouselArrowIconButtonGroupProps, CarouselArrowIconButtonGroupRef, CarouselArrowIconButtonMouseEvent, CarouselArrowIconButtonProps, CarouselArrowIconButtonRef, CarouselContext, CarouselDotProps, CarouselDotRef, CarouselDotsProps, CarouselDotsRef, CarouselDotsType, CarouselDotType, CarouselItem, CarouselItems, CarouselLeftArrowButtonDefaultElement, CarouselLeftArrowButtonElement, CarouselLeftArrowButtonProps, CarouselLeftArrowButtonRef, CarouselLeftArrowIconButtonDefaultElement, CarouselLeftArrowIconButtonElement, CarouselLeftArrowIconButtonProps, CarouselLeftArrowIconButtonRef, CarouselLeftLinearGradientProps, CarouselLeftLinearGradientRef, CarouselLinearGradientProps, CarouselLinearGradientRef, CarouselOrientation, CarouselOverlayArrowButtonDefaultElement, CarouselOverlayArrowButtonElement, CarouselOverlayArrowButtonProps, CarouselOverlayArrowButtonRef, CarouselOverlayArrowIconButtonDefaultElement, CarouselOverlayArrowIconButtonElement, CarouselOverlayArrowIconButtonProps, CarouselOverlayArrowIconButtonRef, CarouselOverlayLeftArrowButtonDefaultElement, CarouselOverlayLeftArrowButtonElement, CarouselOverlayLeftArrowButtonProps, CarouselOverlayLeftArrowButtonRef, CarouselOverlayLeftArrowIconButtonDefaultElement, CarouselOverlayLeftArrowIconButtonElement, CarouselOverlayLeftArrowIconButtonProps, CarouselOverlayLeftArrowIconButtonRef, CarouselOverlayRightArrowButtonDefaultElement, CarouselOverlayRightArrowButtonElement, CarouselOverlayRightArrowButtonProps, CarouselOverlayRightArrowButtonRef, CarouselOverlayRightArrowIconButtonDefaultElement, CarouselOverlayRightArrowIconButtonElement, CarouselOverlayRightArrowIconButtonProps, CarouselOverlayRightArrowIconButtonRef, CarouselProps, CarouselRef, CarouselRenderIconButtonProps, CarouselRightArrowButtonDefaultElement, CarouselRightArrowButtonElement, CarouselRightArrowButtonProps, CarouselRightArrowButtonRef, CarouselRightArrowIconButtonDefaultElement, CarouselRightArrowIconButtonElement, CarouselRightArrowIconButtonProps, CarouselRightArrowIconButtonRef, CarouselRightLinearGradientProps, CarouselRightLinearGradientRef, CarouselScrollAmount, CarouselVariant };
//# sourceMappingURL=index.d.ts.map