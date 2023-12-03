/// <reference types="react" />
import type { BackgroundImageFilters, BackgroundImageOptions, BackgroundImageProps, BackgroundImageRef } from './components/BackgroundImage';
import { BackgroundImage } from './components/BackgroundImage';
import type { BadgeCloseIconButtonDefaultElement, BadgeCloseIconButtonElement, BadgeCloseIconButtonProps, BadgeCloseIconButtonRef, BadgeContext, BadgeIconDefaultElement, BadgeIconElement, BadgeIconProps, BadgeIconRef, BadgeProps, BadgeRef, BadgeRenderProps, BadgeSize, BadgeVariant } from './components/Badge';
import { Badge, BadgeCloseIconButton, BadgeIcon } from './components/Badge';
import type { CardBodyProps, CardBodyRef, CardContext, CardDividerDefaultElement, CardDividerElement, CardDividerProps, CardDividerRef, CardFooterProps, CardFooterRef, CardHeaderProps, CardHeaderRef, CardHeaderRenderProps, CardMouseEvent, CardProps, CardRef, CardStackProps, CardStackRef, CardSubtitleDefaultElement, CardSubtitleElement, CardSubtitleProps, CardSubtitleRef, CardTitleDefaultElement, CardTitleElement, CardTitleProps, CardTitleRef, CardVariant } from './components/Card';
import { CardBody, CardDivider, CardFooter, CardHeader, CardStack, CardSubtitle, CardTitle } from './components/Card';
import type { CarouselArrowButtonDefaultElement, CarouselArrowButtonElement, CarouselArrowButtonGroupProps, CarouselArrowButtonGroupRef, CarouselArrowButtonMouseEvent, CarouselArrowButtonProps, CarouselArrowButtonRef, CarouselArrowDirection, CarouselArrowIconButtonDefaultElement, CarouselArrowIconButtonElement, CarouselArrowIconButtonGroupProps, CarouselArrowIconButtonGroupRef, CarouselArrowIconButtonMouseEvent, CarouselArrowIconButtonProps, CarouselArrowIconButtonRef, CarouselContext, CarouselDotProps, CarouselDotRef, CarouselDotsProps, CarouselDotsRef, CarouselDotsType, CarouselDotType, CarouselItem, CarouselItems, CarouselLeftArrowButtonDefaultElement, CarouselLeftArrowButtonElement, CarouselLeftArrowButtonProps, CarouselLeftArrowButtonRef, CarouselLeftArrowIconButtonDefaultElement, CarouselLeftArrowIconButtonElement, CarouselLeftArrowIconButtonProps, CarouselLeftArrowIconButtonRef, CarouselLeftLinearGradientProps, CarouselLeftLinearGradientRef, CarouselLinearGradientProps, CarouselLinearGradientRef, CarouselOrientation, CarouselOverlayArrowButtonDefaultElement, CarouselOverlayArrowButtonElement, CarouselOverlayArrowButtonProps, CarouselOverlayArrowButtonRef, CarouselOverlayArrowIconButtonDefaultElement, CarouselOverlayArrowIconButtonElement, CarouselOverlayArrowIconButtonProps, CarouselOverlayArrowIconButtonRef, CarouselOverlayLeftArrowButtonDefaultElement, CarouselOverlayLeftArrowButtonElement, CarouselOverlayLeftArrowButtonProps, CarouselOverlayLeftArrowButtonRef, CarouselOverlayLeftArrowIconButtonDefaultElement, CarouselOverlayLeftArrowIconButtonElement, CarouselOverlayLeftArrowIconButtonProps, CarouselOverlayLeftArrowIconButtonRef, CarouselOverlayRightArrowButtonDefaultElement, CarouselOverlayRightArrowButtonElement, CarouselOverlayRightArrowButtonProps, CarouselOverlayRightArrowButtonRef, CarouselOverlayRightArrowIconButtonDefaultElement, CarouselOverlayRightArrowIconButtonElement, CarouselOverlayRightArrowIconButtonProps, CarouselOverlayRightArrowIconButtonRef, CarouselProps, CarouselRef, CarouselRenderIconButtonProps, CarouselRightArrowButtonDefaultElement, CarouselRightArrowButtonElement, CarouselRightArrowButtonProps, CarouselRightArrowButtonRef, CarouselRightArrowIconButtonDefaultElement, CarouselRightArrowIconButtonElement, CarouselRightArrowIconButtonProps, CarouselRightArrowIconButtonRef, CarouselRightLinearGradientProps, CarouselRightLinearGradientRef, CarouselScrollAmount, CarouselVariant } from './components/Carousel';
import { Carousel, CarouselArrowButton, CarouselArrowButtonGroup, CarouselArrowIconButton, CarouselArrowIconButtonGroup, CarouselDots, CarouselLeftArrowButton, CarouselLeftArrowIconButton, CarouselLeftLinearGradient, CarouselLinearGradient, CarouselOverlayArrowButton, CarouselOverlayArrowIconButton, CarouselOverlayLeftArrowButton, CarouselOverlayLeftArrowIconButton, CarouselOverlayRightArrowButton, CarouselOverlayRightArrowIconButton, CarouselRightArrowButton, CarouselRightArrowIconButton, CarouselRightLinearGradient } from './components/Carousel';
import type { DividerDefaultElement, DividerElement, DividerPlacement, DividerProps, DividerRef, DividerVariant } from './components/Divider';
import { Divider } from './components/Divider';
import type { DummyBadgeContext, DummyBadgeIconDefaultElement, DummyBadgeIconElement, DummyBadgeIconProps, DummyBadgeIconRef, DummyBadgeProps, DummyBadgeRef, DummyBadgeRenderProps, DummyBadgeSize, DummyBadgeSkeletonProps, DummyBadgeSkeletonRef, DummyBadgeVariant } from './components/DummyBadge';
import { DummyBadge, DummyBadgeIcon, DummyBadgeSkeleton } from './components/DummyBadge';
import type { HeadlineProps, HeadlineRef, HeadlineRenderProps } from './components/Headline';
import { Headline } from './components/Headline';
import type { IconCategory, IconDefaultElement, IconElement, IconProps, IconRef, IconVariant } from './components/Icon';
import { Icon } from './components/Icon';
import type { ImageFilters, ImageMode, ImageModes, ImageOptions, ImageProps, ImageRef, ImageSyntheticEvent, ImageType } from './components/Image';
import { Image } from './components/Image';
import type { MessageActionsChildrenProps, MessageActionsProps, MessageActionsRef, MessageBodyProps, MessageBodyRef, MessageContext, MessageIconDefaultElement, MessageIconElement, MessageIconProps, MessageIconRef, MessageProps, MessageRef, MessageStackProps, MessageStackRef, MessageSubtitleDefaultElement, MessageSubtitleElement, MessageSubtitleProps, MessageSubtitleRef, MessageTitleDefaultElement, MessageTitleElement, MessageTitleProps, MessageTitleRef, MessageVariant } from './components/Message';
import { Message, MessageActions, MessageBody, MessageIcon, MessageStack, MessageSubtitle, MessageTitle } from './components/Message';
export declare const constants: {
    __DEFAULT_MESSAGE_BODY_SPACING__: import("../..").ThemeSpacing;
    __DEFAULT_MESSAGE_RADIUS__: import("../..").ThemeRadius;
    __DEFAULT_MESSAGE_SIZE__: import("../..").ThemeBorderWidth;
    __DEFAULT_MESSAGE_VARIANT__: MessageVariant;
    __DEFAULT_IMAGE_BLUR__: import("../..").ThemeBlurClass;
    __DEFAULT_IMAGE_BRIGHTNESS__: import("../..").BrightnessClass;
    __DEFAULT_IMAGE_CONTRAST__: import("../..").ContrastClass;
    __DEFAULT_IMAGE_FILTERS__: ImageFilters;
    __DEFAULT_IMAGE_FIT__: import("../..").ObjectFitClass;
    __DEFAULT_IMAGE_GRAYSCALE__: import("../..").GrayscaleClass;
    __DEFAULT_IMAGE_HUE_ROTATE__: import("../..").HueRotateClass;
    __DEFAULT_IMAGE_INVERT__: import("../..").InvertClass;
    __DEFAULT_IMAGE_OPTIONS__: ImageOptions;
    __DEFAULT_IMAGE_POSITION__: import("../..").ObjectPositionClass;
    __DEFAULT_IMAGE_SATURATE__: import("../..").SaturateClass;
    __DEFAULT_IMAGE_SEPIA__: import("../..").SepiaClass;
    __DEFAULT_ICON_CATEGORY__: IconCategory;
    __DEFAULT_ICON_RADIUS__: import("../..").ThemeRadius;
    __DEFAULT_ICON_SIZE__: import("./components/Icon/common/types").IconSize;
    __DEFAULT_ICON_VARIANT__: IconVariant;
    __DEFAULT_DIVIDER_ORIENTATION__: import("./components/Divider").DividerOrientation;
    __DEFAULT_DIVIDER_PLACEMENT__: DividerPlacement;
    __DEFAULT_DIVIDER_VARIANT__: DividerVariant;
    __DEFAULT_DUMMY_BADGE_IS_ANIMATED__: true;
    __DEFAULT_DUMMY_BADGE_IS_COMPACT__: false;
    __DEFAULT_DUMMY_BADGE_IS_FULLWIDTH__: false;
    __DEFAULT_DUMMY_BADGE_IS_OUTLINED__: false;
    __DEFAULT_DUMMY_BADGE_IS_ROUND__: false;
    __DEFAULT_DUMMY_BADGE_IS_UPPERCASE__: true;
    __DEFAULT_DUMMY_BADGE_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_DUMMY_BADGE_SIZE__: import("../..").ThemeFontSize;
    __DEFAULT_DUMMY_BADGE_VARIANT__: DummyBadgeVariant;
    __DEFAULT_CAROUSEL_DOTS__: CarouselDotsType;
    __DEFAULT_CAROUSEL_DOTS_SIZE__: import("../..").ThemeSpacing;
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
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_PLACEMENT__: import("../Overlay").TooltipPlacement;
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_RIGHT_LABEL__: "Scroll Right";
    __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_TOP_LABEL__: "Scroll Top";
    __DEFAULT_CAROUSEL_DURATION_NUMBER__: number;
    __DEFAULT_CAROUSEL_DURATION_THEME__: import("../..").ThemeDuration;
    __DEFAULT_CAROUSEL_ID__: string;
    __DEFAULT_CAROUSEL_ITEMS__: CarouselItems;
    __DEFAULT_CAROUSEL_ORIENTTATION__: CarouselOrientation;
    __DEFAULT_CAROUSEL_SCROLL_AMOUNT__: CarouselScrollAmount;
    __DEFAULT_CAROUSEL_VARIANT__: CarouselVariant;
    __DEFAULT_CAROUSEL_VISIBLE_ITEMS__: import("./components/Carousel/common/types").CarouselVisibleItems;
    __DEFAULT_CARD_ID__: string;
    __DEFAULT_CARD_IS_ACTIVE__: false;
    __DEFAULT_CARD_IS_CLICKABLE__: false;
    __DEFAULT_CARD_IS_COLLAPSABLE__: false;
    __DEFAULT_CARD_IS_DISABLED__: false;
    __DEFAULT_CARD_IS_DIVISIBLE__: true;
    __DEFAULT_CARD_IS_FIXED__: false;
    __DEFAULT_CARD_IS_HOVERING__: false;
    __DEFAULT_CARD_IS_OPEN__: false;
    __DEFAULT_CARD_IS_OUTLINED__: false;
    __DEFAULT_CARD_RADIUS__: import("../..").ThemeRadius;
    __DEFAULT_CARD_VARIANT__: CardVariant;
    __DEFAULT_BADGE_CLOSE_ICON_BUTTON_IS_COMPACT__: true;
    __DEFAULT_BADGE_CLOSE_ICON_BUTTON_SIZE__: import("../Buttons").IconButtonSize;
    __DEFAULT_BADGE_IS_ACTIVE__: false;
    __DEFAULT_BADGE_IS_CLICKABLE__: false;
    __DEFAULT_BADGE_IS_COMPACT__: false;
    __DEFAULT_BADGE_IS_DISABLED__: false;
    __DEFAULT_BADGE_IS_FULLWIDTH__: false;
    __DEFAULT_BADGE_IS_OUTLINED__: false;
    __DEFAULT_BADGE_IS_ROUND__: false;
    __DEFAULT_BADGE_IS_UPPERCASE__: true;
    __DEFAULT_BADGE_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_BADGE_SIZE__: import("../..").ThemeFontSize;
    __DEFAULT_BADGE_VARIANT__: BadgeVariant;
    __DEFAULT_BACKGROUND_IMAGE_ATTACHMENT__: import("../..").BackgroundAttachmentClass;
    __DEFAULT_BACKGROUND_IMAGE_BLEND_MODE__: import("../..").BackgroundBlendModeClass;
    __DEFAULT_BACKGROUND_IMAGE_BLUR__: import("../..").ThemeBlurClass;
    __DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS__: import("../..").BrightnessClass;
    __DEFAULT_BACKGROUND_IMAGE_CLIP__: import("../..").BackgroundClipClass;
    __DEFAULT_BACKGROUND_IMAGE_CONTRAST__: import("../..").ContrastClass;
    __DEFAULT_BACKGROUND_IMAGE_FILTERS__: BackgroundImageFilters;
    __DEFAULT_BACKGROUND_IMAGE_GRAYSCALE__: import("../..").GrayscaleClass;
    __DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE__: import("../..").HueRotateClass;
    __DEFAULT_BACKGROUND_IMAGE_INVERT__: import("../..").InvertClass;
    __DEFAULT_BACKGROUND_IMAGE_OPTIONS__: BackgroundImageOptions;
    __DEFAULT_BACKGROUND_IMAGE_ORIGIN__: import("../..").BackgroundOriginClass;
    __DEFAULT_BACKGROUND_IMAGE_POSITION__: import("../..").BackgroundPositionClass;
    __DEFAULT_BACKGROUND_IMAGE_REPEAT__: import("../..").BackgroundRepeatClass;
    __DEFAULT_BACKGROUND_IMAGE_SATURATE__: import("../..").SaturateClass;
    __DEFAULT_BACKGROUND_IMAGE_SEPIA__: import("../..").SepiaClass;
    __DEFAULT_BACKGROUND_IMAGE_SIZE__: import("../..").BackgroundSizeClass;
};
export declare const keys: {
    __KEYS_MESSAGE_TITLE_CLASS__: "ds-cl-message-title";
    __KEYS_MESSAGE_SUBTITLE_CLASS__: "ds-cl-message-subtitle";
    __KEYS_MESSAGE_STACK_CLASS__: "ds-cl-message-stack";
    __KEYS_MESSAGE_ICON_CLASS__: "ds-cl-message-icon";
    __KEYS_MESSAGE_BODY_CLASS__: "ds-cl-message-body";
    __KEYS_MESSAGE_ACTIONS_CLASS__: "ds-cl-message-actions";
    __KEYS_MESSAGE_CLASS__: "ds-cl-message";
    __KEYS_IMAGE_CLASS__: "ds-cl-image";
    __KEYS_IMAGE_FALLBACK_CLASS__: "ds-cl-image-fallback";
    __KEYS_IMAGE_BORING_CLASS__: "ds-cl-image-boring";
    __KEYS_IMAGE_THUMBNAIL_CLASS__: "ds-cl-image-thumbnail";
    __KEYS_IMAGE_FULL_CLASS__: "ds-cl-image-full";
    __KEYS_ICON_CLASS__: any;
    __KEYS_HEADLINE_CLASS__: "ds-cl-headline";
    __KEY_DUMMY_BADGE_SKELETON_CLASS__: "ds-cl-dummy-badge-skeleton";
    __KEY_DUMMY_BADGE_ICON_CLASS__: "ds-cl-dummy-badge-icon";
    __KEYS_DUMMY_BADGE_CLASS__: "ds-cl-dummy-badge";
    __KEYS_DIVIDER_CLASS__: "ds-cl-divider";
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
    __KEYS_CARD_TITLE_CLASS__: "ds-cl-card-title";
    __KEYS_CARD_SUBTITLE_CLASS__: "ds-cl-card-subtitle";
    __KEYS_CARD_STACK_CLASS__: "ds-cl-card-stack";
    __KEYS_CARD_HEADER_CLASS__: "ds-cl-card-header";
    __KEYS_CARD_FOOTER_CLASS__: "ds-cl-card-footer";
    __KEYS_CARD_DIVIDER_CLASS__: "ds-cl-card-divider";
    __KEYS_CARD_BODY_CLASS__: "ds-cl-card-body";
    __KEYS_CARD_CLASS__: "ds-cl-card";
    __KEYS_BADGE_ICON_CLASS__: "ds-cl-badge-icon";
    __KEYS_BADGE_CLOSE_ICON_BUTTON_CLASS__: "ds-cl-badge-close-icon-button";
    __KEYS_BADGE_CLASS__: "ds-cl-badge";
    __KEYS_BACKGROUND_IMAGE_CLASS__: "ds-cl-background-image";
    __KEYS_BACKGROUND_IMAGE_IMAGE_CLASS__: "ds-cl-background-image-image";
};
export declare const utils: {
    getCarouselID: (id: string) => string;
    getCarouselItemID: (id: string, index: number) => string;
};
export declare const hooks: {
    useMessageClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        color?: MessageProps<Element_1>["color"] | undefined;
        radius?: MessageProps<Element_1>["radius"] | undefined;
        size?: MessageProps<Element_1>["size"] | undefined;
        colorMode?: MessageProps<Element_1>["colorMode"] | undefined;
        variant?: MessageProps<Element_1>["variant"] | undefined;
    }) => string;
    useMessageContext: <Element_2 extends import("react").ElementType = "div">() => MessageContext<Element_2>;
    useImageClasses: <Element_3 extends import("react").ElementType = "div">(props: {
        color: ImageProps<Element_3>["color"];
        radius: ImageProps<Element_3>["radius"];
        filters: ImageProps<Element_3>["filters"];
        options: ImageProps<Element_3>["options"];
        colorMode: ImageProps<Element_3>["colorMode"];
    }) => {
        image: string;
        container: string;
        thumbnail: string;
        fallback: string;
    };
    useIconClasses: <Element_4 extends "span">(props: {
        color?: IconProps<Element_4>["color"] | undefined;
        radius?: IconProps<Element_4>["radius"] | undefined;
        size?: IconProps<Element_4>["size"] | undefined;
        colorMode?: IconProps<Element_4>["colorMode"] | undefined;
        variant?: IconProps<Element_4>["variant"] | undefined;
    }) => string;
    useIconStyles: <Element_5 extends "span" = "span">(props: {
        size?: IconProps<Element_5>["size"] | undefined;
    }) => import("@emotion/serialize").CSSObject;
    useDummyBadgeClasses: <Element_6 extends import("react").ElementType = "div">(props: {
        size: DummyBadgeProps<Element_6>["size"];
        variant: DummyBadgeProps<Element_6>["variant"];
        isCompact: DummyBadgeProps<Element_6>["isCompact"];
        isFullWidth: DummyBadgeProps<Element_6>["isFullWidth"];
        isRound: DummyBadgeProps<Element_6>["isRound"];
        isUppercase: DummyBadgeProps<Element_6>["isUppercase"];
    }) => string;
    useDummyBadgeContext: <Element_7 extends import("react").ElementType = "div">() => {
        color: DummyBadgeProps<Element_7>["color"];
        colorMode: DummyBadgeProps<Element_7>["colorMode"];
        size: import("../..").ThemeFontSize;
        variant: DummyBadgeVariant;
    };
    useDummyBadgeFontSize: <Element_8 extends import("react").ElementType = "div">(props: {
        size: DummyBadgeProps<Element_8>["size"];
    }) => number;
    useDummyBadgeSizeConfig: <Element_9 extends import("react").ElementType = "div">(props: {
        size: DummyBadgeProps<Element_9>["size"];
        variant: DummyBadgeProps<Element_9>["variant"];
        isCompact: DummyBadgeProps<Element_9>["isCompact"];
        isRound: DummyBadgeProps<Element_9>["isRound"];
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../..").ThemeSpacing>;
        radius: import("../..").ThemeRadius;
        spacing: import("../..").ThemeSpacing;
    };
    useDividerClasses: <Element_10 extends "div">(props: {
        color?: DividerProps<Element_10>["color"] | undefined;
        orientation?: DividerProps<Element_10>["orientation"] | undefined;
        size?: DividerProps<Element_10>["size"] | undefined;
        colorMode?: DividerProps<Element_10>["colorMode"] | undefined;
        variant?: DividerProps<Element_10>["variant"] | undefined;
        placement?: DividerProps<Element_10>["placement"] | undefined;
    }) => string;
    useDividerStyles: <Element_11 extends "div">(props: Pick<DividerProps<Element_11>, "color" | "orientation" | "spacing" | "size" | "placement"> & {
        hasChildren: boolean;
    }) => import("@emotion/serialize").CSSObject;
    useCarouselDotClasses: <Element_12 extends import("react").ElementType = "div">(props: Pick<CarouselDotProps<Element_12>, "color" | "size" | "colorMode"> & {
        isVisible: boolean;
    }) => {
        item: string;
        scale100: string;
        scale75: string;
        scale50: string;
    };
    useCarouselArrowState: (direction: import("../..").PickFrom<CarouselVariant, "left" | "right">) => {
        isDisabled: boolean;
        isVisible: boolean;
    };
    useCarouselClasses: <Element_13 extends import("react").ElementType = "div">(props: {
        orientation: CarouselProps<Element_13>["orientation"];
        spacing: CarouselProps<Element_13>["spacing"];
        variant: CarouselProps<Element_13>["variant"];
    }) => Record<"items" | "item", string> & {
        overflow: Record<"hidden" | "auto", string>;
    };
    useCarouselContext: <Element_14 extends import("react").ElementType = "div">() => {
        color: CarouselProps<Element_14>["color"];
        colorMode: CarouselProps<Element_14>["colorMode"];
        id: string | CarouselProps<Element_14>["id"];
        items: CarouselItems;
        visibleItems: import("./components/Carousel/common/types").CarouselVisibleItems;
        scrollAmount: CarouselScrollAmount;
        spacing: import("../..").ThemeSpacing;
        orientation: CarouselOrientation;
        variant: CarouselVariant;
    };
    useCarouselManager: () => {
        getItemByKey: (key: string) => import("../..").Undefinable<CarouselItem>;
        getItemIndexByKey: (key: string) => import("../..").Undefinable<number>;
        getItemByIndex: (index: number) => import("../..").Undefinable<CarouselItem>;
        getItemPos: (key: string) => Record<"next" | "prev", import("../..").Undefinable<CarouselItem>>;
        getNextItem: () => import("../..").Undefinable<CarouselItem>;
        getPrevItem: () => import("../..").Undefinable<CarouselItem>;
        isFirstItem: (key: string) => boolean;
        isFirstItemVisible: () => boolean;
        getFirstVisibleItem: () => import("../..").Undefinable<CarouselItem>;
        isItemVisible: (key: string) => boolean;
        isLastItem: (key: string) => boolean;
        isLastItemVisible: () => boolean;
        getLastVisibleItem: () => import("../..").Undefinable<CarouselItem>;
        scrollToItem: (item?: CarouselItem | undefined, inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition) => void;
        scrollNext: (inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition) => void;
        scrollPrev: (inline?: ScrollLogicalPosition, block?: ScrollLogicalPosition) => void;
    };
    useCardContext: <Element_15 extends import("react").ElementType = "div">() => {
        color: CardProps<Element_15>["color"];
        colorMode: CardProps<Element_15>["colorMode"];
        isCollapsable: boolean;
        isDisabled: boolean;
        isDivisible: boolean;
        isHovering: boolean;
        isOpen: boolean;
        onHover: import("../../common/hooks/useBoolean").UseBooleanToggles;
        spacing: import("../..").ThemeSpacing;
        variant: CardVariant;
    };
    useBadgeClasses: <Element_16 extends import("react").ElementType = "div">(props: {
        size: BadgeProps<Element_16>["size"];
        variant: BadgeProps<Element_16>["variant"];
        isCompact: BadgeProps<Element_16>["isCompact"];
        isFullWidth: BadgeProps<Element_16>["isFullWidth"];
        isRound: BadgeProps<Element_16>["isRound"];
        isUppercase: BadgeProps<Element_16>["isUppercase"];
    }) => string;
    useBadgeContext: <Element_17 extends import("react").ElementType = "div">() => {
        color: BadgeProps<Element_17>["color"];
        colorMode: BadgeProps<Element_17>["colorMode"];
        size: import("../..").ThemeFontSize;
        variant: BadgeVariant;
    };
    useBadgeFontSize: <Element_18 extends import("react").ElementType = "div">(props: {
        size: BadgeProps<Element_18>["size"];
    }) => number;
    useBadgeSizeConfig: <Element_19 extends import("react").ElementType = "div">(props: {
        size: BadgeProps<Element_19>["size"];
        variant: BadgeProps<Element_19>["variant"];
        isCompact: BadgeProps<Element_19>["isCompact"];
        isRound: BadgeProps<Element_19>["isRound"];
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../..").ThemeSpacing>;
        radius: import("../..").ThemeRadius;
        spacing: import("../..").ThemeSpacing;
    };
    useBackgroundImageClasses: <Element_20 extends import("react").ElementType = "div">(props: {
        radius: BackgroundImageProps<Element_20>["radius"];
        filters: BackgroundImageProps<Element_20>["filters"];
        options: BackgroundImageProps<Element_20>["options"];
    }) => {
        image: string;
        container: string;
    };
};
export { BackgroundImage, Badge, BadgeCloseIconButton, BadgeIcon, CardBody, CardDivider, CardFooter, CardHeader, CardStack, CardSubtitle, CardTitle, Carousel, CarouselArrowButton, CarouselArrowButtonGroup, CarouselArrowIconButton, CarouselArrowIconButtonGroup, CarouselDots, CarouselLeftArrowButton, CarouselLeftArrowIconButton, CarouselLeftLinearGradient, CarouselLinearGradient, CarouselOverlayArrowButton, CarouselOverlayArrowIconButton, CarouselOverlayLeftArrowButton, CarouselOverlayLeftArrowIconButton, CarouselOverlayRightArrowButton, CarouselOverlayRightArrowIconButton, CarouselRightArrowButton, CarouselRightArrowIconButton, CarouselRightLinearGradient, Divider, DummyBadge, DummyBadgeIcon, DummyBadgeSkeleton, Headline, Icon, Image, Message, MessageActions, MessageBody, MessageIcon, MessageStack, MessageSubtitle, MessageTitle };
export type { BackgroundImageFilters, BackgroundImageOptions, BackgroundImageProps, BackgroundImageRef, BadgeCloseIconButtonDefaultElement, BadgeCloseIconButtonElement, BadgeCloseIconButtonProps, BadgeCloseIconButtonRef, BadgeContext, BadgeIconDefaultElement, BadgeIconElement, BadgeIconProps, BadgeIconRef, BadgeProps, BadgeRef, BadgeRenderProps, BadgeSize, BadgeVariant, CardBodyProps, CardBodyRef, CardContext, CardDividerDefaultElement, CardDividerElement, CardDividerProps, CardDividerRef, CardFooterProps, CardFooterRef, CardHeaderProps, CardHeaderRef, CardHeaderRenderProps, CardMouseEvent, CardProps, CardRef, CardStackProps, CardStackRef, CardSubtitleDefaultElement, CardSubtitleElement, CardSubtitleProps, CardSubtitleRef, CardTitleDefaultElement, CardTitleElement, CardTitleProps, CardTitleRef, CardVariant, CarouselArrowButtonDefaultElement, CarouselArrowButtonElement, CarouselArrowButtonGroupProps, CarouselArrowButtonGroupRef, CarouselArrowButtonMouseEvent, CarouselArrowButtonProps, CarouselArrowButtonRef, CarouselArrowDirection, CarouselArrowIconButtonDefaultElement, CarouselArrowIconButtonElement, CarouselArrowIconButtonGroupProps, CarouselArrowIconButtonGroupRef, CarouselArrowIconButtonMouseEvent, CarouselArrowIconButtonProps, CarouselArrowIconButtonRef, CarouselContext, CarouselDotProps, CarouselDotRef, CarouselDotsProps, CarouselDotsRef, CarouselDotsType, CarouselDotType, CarouselItem, CarouselItems, CarouselLeftArrowButtonDefaultElement, CarouselLeftArrowButtonElement, CarouselLeftArrowButtonProps, CarouselLeftArrowButtonRef, CarouselLeftArrowIconButtonDefaultElement, CarouselLeftArrowIconButtonElement, CarouselLeftArrowIconButtonProps, CarouselLeftArrowIconButtonRef, CarouselLeftLinearGradientProps, CarouselLeftLinearGradientRef, CarouselLinearGradientProps, CarouselLinearGradientRef, CarouselOrientation, CarouselOverlayArrowButtonDefaultElement, CarouselOverlayArrowButtonElement, CarouselOverlayArrowButtonProps, CarouselOverlayArrowButtonRef, CarouselOverlayArrowIconButtonDefaultElement, CarouselOverlayArrowIconButtonElement, CarouselOverlayArrowIconButtonProps, CarouselOverlayArrowIconButtonRef, CarouselOverlayLeftArrowButtonDefaultElement, CarouselOverlayLeftArrowButtonElement, CarouselOverlayLeftArrowButtonProps, CarouselOverlayLeftArrowButtonRef, CarouselOverlayLeftArrowIconButtonDefaultElement, CarouselOverlayLeftArrowIconButtonElement, CarouselOverlayLeftArrowIconButtonProps, CarouselOverlayLeftArrowIconButtonRef, CarouselOverlayRightArrowButtonDefaultElement, CarouselOverlayRightArrowButtonElement, CarouselOverlayRightArrowButtonProps, CarouselOverlayRightArrowButtonRef, CarouselOverlayRightArrowIconButtonDefaultElement, CarouselOverlayRightArrowIconButtonElement, CarouselOverlayRightArrowIconButtonProps, CarouselOverlayRightArrowIconButtonRef, CarouselProps, CarouselRef, CarouselRenderIconButtonProps, CarouselRightArrowButtonDefaultElement, CarouselRightArrowButtonElement, CarouselRightArrowButtonProps, CarouselRightArrowButtonRef, CarouselRightArrowIconButtonDefaultElement, CarouselRightArrowIconButtonElement, CarouselRightArrowIconButtonProps, CarouselRightArrowIconButtonRef, CarouselRightLinearGradientProps, CarouselRightLinearGradientRef, CarouselScrollAmount, CarouselVariant, DividerDefaultElement, DividerElement, DividerPlacement, DividerProps, DividerRef, DividerVariant, DummyBadgeContext, DummyBadgeIconDefaultElement, DummyBadgeIconElement, DummyBadgeIconProps, DummyBadgeIconRef, DummyBadgeProps, DummyBadgeRef, DummyBadgeRenderProps, DummyBadgeSize, DummyBadgeSkeletonProps, DummyBadgeSkeletonRef, DummyBadgeVariant, HeadlineProps, HeadlineRef, HeadlineRenderProps, IconCategory, IconDefaultElement, IconElement, IconProps, IconRef, IconVariant, ImageFilters, ImageMode, ImageModes, ImageOptions, ImageProps, ImageRef, ImageSyntheticEvent, ImageType, MessageActionsChildrenProps, MessageActionsProps, MessageActionsRef, MessageBodyProps, MessageBodyRef, MessageContext, MessageIconDefaultElement, MessageIconElement, MessageIconProps, MessageIconRef, MessageProps, MessageRef, MessageStackProps, MessageStackRef, MessageSubtitleDefaultElement, MessageSubtitleElement, MessageSubtitleProps, MessageSubtitleRef, MessageTitleDefaultElement, MessageTitleElement, MessageTitleProps, MessageTitleRef, MessageVariant };
//# sourceMappingURL=index.d.ts.map