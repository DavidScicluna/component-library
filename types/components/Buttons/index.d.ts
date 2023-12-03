/// <reference types="react" />
import type { ButtonContext, ButtonDefaultElement, ButtonElement, ButtonIconDefaultElement, ButtonIconElement, ButtonIconProps, ButtonIconRef, ButtonMouseEvent, ButtonProps, ButtonRef, ButtonRenderProps, ButtonSize, ButtonSpinnerProps, ButtonSpinnerRef, ButtonVariant } from './components/Button';
import { Button, ButtonIcon, ButtonSpinner } from './components/Button';
import type { ButtonGroupContext, ButtonGroupItemProps, ButtonGroupItemRef, ButtonGroupProps, ButtonGroupRef } from './components/ButtonGroup';
import { ButtonGroup, ButtonGroupItem } from './components/ButtonGroup';
import type { ClearIconButtonDefaultElement, ClearIconButtonElement, ClearIconButtonProps, ClearIconButtonRef } from './components/ClearIconButton';
import { ClearIconButton } from './components/ClearIconButton';
import type { CloseIconButtonDefaultElement, CloseIconButtonElement, CloseIconButtonProps, CloseIconButtonRef } from './components/CloseIconButton';
import { CloseIconButton } from './components/CloseIconButton';
import type { CopyButtonChildrenProps, CopyButtonProps, CopyButtonTimeout } from './components/CopyButton';
import { CopyButton } from './components/CopyButton';
import type { DeleteIconButtonDefaultElement, DeleteIconButtonElement, DeleteIconButtonProps, DeleteIconButtonRef } from './components/DeleteIconButton';
import { DeleteIconButton } from './components/DeleteIconButton';
import type { DummyButtonContext, DummyButtonIconDefaultElement, DummyButtonIconElement, DummyButtonIconProps, DummyButtonIconRef, DummyButtonProps, DummyButtonRef, DummyButtonRenderProps, DummyButtonSize, DummyButtonSkeletonProps, DummyButtonSkeletonRef, DummyButtonVariant } from './components/DummyButton';
import { DummyButton, DummyButtonIcon, DummyButtonSkeleton } from './components/DummyButton';
import type { DummyIconButtonContext, DummyIconButtonIconDefaultElement, DummyIconButtonIconElement, DummyIconButtonIconProps, DummyIconButtonIconRef, DummyIconButtonProps, DummyIconButtonRef, DummyIconButtonSize, DummyIconButtonSkeletonProps, DummyIconButtonSkeletonRef, DummyIconButtonVariant } from './components/DummyIconButton';
import { DummyIconButton, DummyIconButtonIcon, DummyIconButtonSkeleton } from './components/DummyIconButton';
import type { FileButtonBlob, FileButtonBlobs, FileButtonChangeEvent, FileButtonChildrenProps, FileButtonError, FileButtonErrors, FileButtonMouseEvent, FileButtonProps } from './components/FileButton';
import { FileButton } from './components/FileButton';
import type { IconButtonContext, IconButtonDefaultElement, IconButtonElement, IconButtonIconDefaultElement, IconButtonIconElement, IconButtonIconProps, IconButtonIconRef, IconButtonMouseEvent, IconButtonProps, IconButtonRef, IconButtonRenderProps, IconButtonSize, IconButtonSpinnerProps, IconButtonSpinnerRef, IconButtonVariant } from './components/IconButton';
import { IconButton, IconButtonIcon, IconButtonSpinner } from './components/IconButton';
import type { IconButtonGroupContext, IconButtonGroupItemProps, IconButtonGroupItemRef, IconButtonGroupProps, IconButtonGroupRef } from './components/IconButtonGroup';
import { IconButtonGroup, IconButtonGroupItem } from './components/IconButtonGroup';
import type { LinkDefaultElement, LinkElement, LinkMouseEvent, LinkProps, LinkRef } from './components/Link';
import { Link } from './components/Link';
import type { ScrollToTopIconButtonDefaultElement, ScrollToTopIconButtonElement, ScrollToTopIconButtonMouseEvent, ScrollToTopIconButtonProps, ScrollToTopIconButtonRef } from './components/ScrollToTopIconButton';
import { ScrollToTopIconButton } from './components/ScrollToTopIconButton';
export declare const constants: {
    __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_HAS_TOOLTIP__: true;
    __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_LABEL__: "Scroll to top";
    __DEFAULT_SCROLL_TO_TOP_ICON_BUTTON_PLACEMENT__: import("../Overlay").TooltipPlacement;
    __DEFAULT_LINK_IS_DISABLED__: false;
    __DEFAULT_LINK_IS_UNDERLINE__: true;
    __DEFAULT_LINK_IS_UNSTYLED__: false;
    __DEFAULT_LINK_OFFSET_SIZE__: Record<"base" | "active" | "hover", import("../..").TextUnderlineOffsetClass>;
    __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__: false;
    __DEFAULT_ICON_BUTTON_IS_ACTIVE__: false;
    __DEFAULT_ICON_BUTTON_IS_COMPACT__: false;
    __DEFAULT_ICON_BUTTON_IS_DISABLED__: false;
    __DEFAULT_ICON_BUTTON_IS_FOCUSED__: false;
    __DEFAULT_ICON_BUTTON_IS_LOADING__: false;
    __DEFAULT_ICON_BUTTON_IS_OUTLINED__: false;
    __DEFAULT_ICON_BUTTON_IS_ROUND__: false;
    __DEFAULT_ICON_BUTTON_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_ICON_BUTTON_SIZE__: IconButtonSize;
    __DEFAULT_ICON_BUTTON_VARIANT__: IconButtonVariant;
    __DEFAULT_FILE_BUTTON_ACCEPT__: "image/*";
    __DEFAULT_FILE_BUTTON_DURATION__: import("../..").ThemeDuration;
    __DEFAULT_FILE_BUTTON_IS_MULTIPLE__: false;
    __DEFAULT_FILE_BUTTON_TIMEOUT__: number;
    __DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__: true;
    __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__: false;
    __DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED__: false;
    __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__: false;
    __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_DUMMY_ICON_BUTTON_SIZE__: DummyIconButtonSize;
    __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__: DummyIconButtonVariant;
    __DEFAULT_DUMMY_BUTTON_IS_ANIMATED__: true;
    __DEFAULT_DUMMY_BUTTON_IS_COMPACT__: false;
    __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__: false;
    __DEFAULT_DUMMY_BUTTON_IS_OUTLINED__: false;
    __DEFAULT_DUMMY_BUTTON_IS_ROUND__: false;
    __DEFAULT_DUMMY_BUTTON_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_DUMMY_BUTTON_SIZE__: DummyButtonSize;
    __DEFAULT_DUMMY_BUTTON_VARIANT__: DummyButtonVariant;
    __DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP__: true;
    __DEFAULT_DELETE_ICON_BUTTON_LABEL__: "Delete";
    __DEFAULT_DELETE_ICON_BUTTON_PLACEMENT__: import("../Overlay").TooltipPlacement;
    __DEFAULT_COPY_BUTTON_DURATION__: import("../..").ThemeDuration;
    __DEFAULT_COPY_BUTTON_TIMEOUT__: CopyButtonTimeout;
    __DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP__: true;
    __DEFAULT_CLOSE_ICON_BUTTON_LABEL__: "Close";
    __DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT__: import("../Overlay").TooltipPlacement;
    __DEFAULT_CLEAR_ICON_BUTTON_HAS_TOOLTIP__: true;
    __DEFAULT_CLEAR_ICON_BUTTON_LABEL__: "Clear";
    __DEFAULT_CLEAR_ICON_BUTTON_PLACEMENT__: import("../Overlay").TooltipPlacement;
    __DEFAULT_BUTTON_GROUP_IS_ATTACHED__: false;
    __DEFAULT_BUTTON_IS_ACTIVE__: false;
    __DEFAULT_BUTTON_IS_COMPACT__: false;
    __DEFAULT_BUTTON_IS_DISABLED__: false;
    __DEFAULT_BUTTON_IS_FOCUSED__: false;
    __DEFAULT_BUTTON_IS_FULLWIDTH__: false;
    __DEFAULT_BUTTON_IS_LOADING__: false;
    __DEFAULT_BUTTON_IS_OUTLINED__: false;
    __DEFAULT_BUTTON_IS_ROUND__: false;
    __DEFAULT_BUTTON_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_BUTTON_SIZE__: ButtonSize;
    __DEFAULT_BUTTON_VARIANT__: ButtonVariant;
};
export declare const keys: {
    __KEYS_SCROLL_TO_TOP_ICON_BUTTON_CLASS__: "ds-cl-scroll-to-top-icon-button";
    __KEYS_LINK_CLASS__: "ds-cl-link";
    __KEYS_ICON_BUTTON_GROUP_ITEM_CLASS__: "ds-cl-icon-button-group-item";
    __KEYS_ICON_BUTTON_GROUP_CLASS__: "ds-cl-icon-button-group";
    __KEYS_ICON_BUTTON_CLASS__: "ds-cl-icon-button";
    __KEY_DUMMY_ICON_BUTTON_SKELETON_CLASS__: "ds-cl-dummy-icon-button-skeleton";
    __KEY_DUMMY_ICON_BUTTON_ICON_CLASS__: "ds-cl-dummy-icon-button-icon";
    __KEY_DUMMY_ICON_BUTTON_CLASS__: "ds-cl-dummy-icon-button";
    __KEY_DUMMY_BUTTON_SKELETON_CLASS__: "ds-cl-dummy-button-skeleton";
    __KEY_DUMMY_BUTTON_ICON_CLASS__: "ds-cl-dummy-button-icon";
    __KEY_DUMMY_BUTTON_CLASS__: "ds-cl-dummy-button";
    __KEYS_DELETE_ICON_BUTTON_CLASS__: "ds-cl-delete-icon-button";
    __KEYS_CLOSE_ICON_BUTTON_CLASS__: "ds-cl-close-icon-button";
    __KEYS_CLEAR_ICON_BUTTON_CLASS__: "ds-cl-clear-icon-button";
    __KEYS_BUTTON_GROUP_ITEM_CLASS__: "ds-cl-button-group-item";
    __KEYS_BUTTON_GROUP_CLASS__: "ds-cl-button-group";
    __KEYS_BUTTON_SPINNER_CLASS__: "ds-cl-button-spinner";
    __KEYS_BUTTON_ICON_CLASS__: "ds-cl-button-icon";
    __KEYS_BUTTON_CLASS__: "ds-cl-button";
};
export declare const hooks: {
    useLinkClasses: <Element_1 extends "a" = "a">(props: {
        color?: LinkProps<Element_1>["color"] | undefined;
        colorMode?: LinkProps<Element_1>["colorMode"] | undefined;
        isDisabled?: LinkProps<Element_1>["isDisabled"] | undefined;
        isUnderline?: LinkProps<Element_1>["isUnderline"] | undefined;
        isUnstyled?: LinkProps<Element_1>["isUnstyled"] | undefined;
    }) => string;
    useIconButtonGroupItemClasses: <Element_2 extends import("react").ElementType = "div">(props: {
        index: IconButtonGroupItemProps<Element_2>["index"];
        total: IconButtonGroupItemProps<Element_2>["total"];
    }) => string;
    useIconButtonGroupContext: <Element_3 extends import("react").ElementType = "div">() => {
        color: IconButtonGroupProps<Element_3>["color"];
        colorMode: IconButtonGroupProps<Element_3>["colorMode"];
        direction: import("../..").FlexDirectionClass;
        isAttached: boolean;
        isCompact: IconButtonGroupProps<Element_3>["isCompact"];
        isDisabled: IconButtonGroupProps<Element_3>["isDisabled"];
        isRound: IconButtonGroupProps<Element_3>["isRound"];
        size: IconButtonGroupProps<Element_3>["size"];
        variant: IconButtonGroupProps<Element_3>["variant"];
    };
    useIconButtonClasses: <Element_4 extends "button" = "button">(props: {
        variant?: IconButtonProps<Element_4>["variant"] | undefined;
    }) => string;
    useIconButtonContext: <Element_5 extends "button" = "button">() => {
        color: IconButtonProps<Element_5>["color"] | undefined;
        colorMode: IconButtonProps<Element_5>["colorMode"] | undefined;
        size: IconButtonSize;
        variant: IconButtonVariant;
    };
    useIconButtonFontSize: <Element_6 extends "button" = "button">(props: {
        size?: IconButtonProps<Element_6>["size"] | undefined;
    }) => number;
    useIconButtonSizeConfig: <Element_7 extends "button" = "button">(props: {
        size?: IconButtonProps<Element_7>["size"] | undefined;
        variant?: IconButtonProps<Element_7>["variant"] | undefined;
        isCompact?: IconButtonProps<Element_7>["isCompact"] | undefined;
        isRound?: IconButtonProps<Element_7>["isRound"] | undefined;
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: import("../..").ThemeSpacing;
        radius: import("../..").ThemeRadius;
    };
    useIconButtonStyles: <Element_8 extends "button" = "button">(props: {
        size?: IconButtonProps<Element_8>["size"] | undefined;
    }) => import("@emotion/serialize").CSSObject;
    useDummyIconButtonClasses: <Element_9 extends import("react").ElementType = "div">(props: {
        variant: DummyIconButtonProps<Element_9>["variant"];
    }) => string;
    useDummyIconButtonContext: <Element_10 extends import("react").ElementType = "div">() => {
        color: DummyIconButtonProps<Element_10>["color"];
        colorMode: DummyIconButtonProps<Element_10>["colorMode"];
        size: DummyIconButtonSize;
        variant: DummyIconButtonVariant;
    };
    useDummyIconButtonFontSize: <Element_11 extends import("react").ElementType = "div">(props: {
        size: DummyIconButtonProps<Element_11>["size"];
    }) => number;
    useDummyIconButtonSizeConfig: <Element_12 extends import("react").ElementType = "div">(props: {
        size: DummyIconButtonProps<Element_12>["size"];
        variant: DummyIconButtonProps<Element_12>["variant"];
        isCompact: DummyIconButtonProps<Element_12>["isCompact"];
        isRound: DummyIconButtonProps<Element_12>["isRound"];
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: import("../..").ThemeSpacing;
        radius: import("../..").ThemeRadius;
    };
    useDummyIconButtonStyles: <Element_13 extends import("react").ElementType = "div">(props: {
        size: DummyIconButtonProps<Element_13>["size"];
    }) => import("@emotion/serialize").CSSObject;
    useDummyButtonClasses: <Element_14 extends import("react").ElementType = "div">(props: {
        size: DummyButtonProps<Element_14>["size"];
        variant: DummyButtonProps<Element_14>["variant"];
        isCompact: DummyButtonProps<Element_14>["isCompact"];
        isFullWidth: DummyButtonProps<Element_14>["isFullWidth"];
        isRound: DummyButtonProps<Element_14>["isRound"];
        isAnimated: DummyButtonProps<Element_14>["isAnimated"];
    }) => string;
    useDummyButtonContext: <Element_15 extends import("react").ElementType = "div">() => {
        color: DummyButtonProps<Element_15>["color"];
        colorMode: DummyButtonProps<Element_15>["colorMode"];
        size: DummyButtonSize;
        variant: DummyButtonVariant;
    };
    useDummyButtonFontSize: <Element_16 extends import("react").ElementType = "div">(props: {
        size: DummyButtonProps<Element_16>["size"];
    }) => number;
    useDummyButtonSizeConfig: <Element_17 extends import("react").ElementType = "div">(props: {
        size: DummyButtonProps<Element_17>["size"];
        variant: DummyButtonProps<Element_17>["variant"];
        isCompact: DummyButtonProps<Element_17>["isCompact"];
        isRound: DummyButtonProps<Element_17>["isRound"];
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../..").ThemeSpacing>;
        radius: import("../..").ThemeRadius;
        spacing: import("../..").ThemeSpacing;
    };
    useCopyToClipboard: () => [string | null, (text: string) => Promise<boolean>];
    useButtonGroupItemClasses: <Element_18 extends import("react").ElementType = "div">(props: {
        index: ButtonGroupItemProps<Element_18>["index"];
        total: ButtonGroupItemProps<Element_18>["total"];
    }) => string;
    useButtonGroupContext: <Element_19 extends import("react").ElementType = "div">() => {
        color: ButtonGroupProps<Element_19>["color"];
        colorMode: ButtonGroupProps<Element_19>["colorMode"];
        direction: import("../..").FlexDirectionClass;
        isAttached: boolean;
        isCompact: ButtonGroupProps<Element_19>["isCompact"];
        isDisabled: ButtonGroupProps<Element_19>["isDisabled"];
        isFullWidth: ButtonGroupProps<Element_19>["isFullWidth"];
        isRound: ButtonGroupProps<Element_19>["isRound"];
        size: ButtonGroupProps<Element_19>["size"];
        variant: ButtonGroupProps<Element_19>["variant"];
    };
    useButtonClasses: <Element_20 extends "button" = "button">(props: {
        size?: ButtonProps<Element_20>["size"] | undefined;
        variant?: ButtonProps<Element_20>["variant"] | undefined;
        isCompact?: ButtonProps<Element_20>["isCompact"] | undefined;
        isFullWidth?: ButtonProps<Element_20>["isFullWidth"] | undefined;
        isRound?: ButtonProps<Element_20>["isRound"] | undefined;
    }) => string;
    useButtonContext: <Element_21 extends "button" = "button">() => {
        color: ButtonProps<Element_21>["color"] | undefined;
        colorMode: ButtonProps<Element_21>["colorMode"] | undefined;
        size: ButtonSize;
        variant: ButtonVariant;
    };
    useButtonFontSize: <Element_22 extends "button" = "button">(props: {
        size?: ButtonProps<Element_22>["size"] | undefined;
    }) => number;
    useButtonSizeConfig: <Element_23 extends "button" = "button">(props: {
        size?: ButtonProps<Element_23>["size"] | undefined;
        variant?: ButtonProps<Element_23>["variant"] | undefined;
        isCompact?: ButtonProps<Element_23>["isCompact"] | undefined;
        isRound?: ButtonProps<Element_23>["isRound"] | undefined;
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../..").ThemeSpacing>;
        radius: import("../..").ThemeRadius;
        spacing: import("../..").ThemeSpacing;
    };
};
export { Button, ButtonGroup, ButtonGroupItem, ButtonIcon, ButtonSpinner, ClearIconButton, CloseIconButton, CopyButton, DeleteIconButton, DummyButton, DummyButtonIcon, DummyButtonSkeleton, DummyIconButton, DummyIconButtonIcon, DummyIconButtonSkeleton, FileButton, IconButton, IconButtonGroup, IconButtonGroupItem, IconButtonIcon, IconButtonSpinner, Link, ScrollToTopIconButton };
export type { ButtonContext, ButtonDefaultElement, ButtonElement, ButtonGroupContext, ButtonGroupItemProps, ButtonGroupItemRef, ButtonGroupProps, ButtonGroupRef, ButtonIconDefaultElement, ButtonIconElement, ButtonIconProps, ButtonIconRef, ButtonMouseEvent, ButtonProps, ButtonRef, ButtonRenderProps, ButtonSize, ButtonSpinnerProps, ButtonSpinnerRef, ButtonVariant, ClearIconButtonDefaultElement, ClearIconButtonElement, ClearIconButtonProps, ClearIconButtonRef, CloseIconButtonDefaultElement, CloseIconButtonElement, CloseIconButtonProps, CloseIconButtonRef, CopyButtonChildrenProps, CopyButtonProps, CopyButtonTimeout, DeleteIconButtonDefaultElement, DeleteIconButtonElement, DeleteIconButtonProps, DeleteIconButtonRef, DummyButtonContext, DummyButtonIconDefaultElement, DummyButtonIconElement, DummyButtonIconProps, DummyButtonIconRef, DummyButtonProps, DummyButtonRef, DummyButtonRenderProps, DummyButtonSize, DummyButtonSkeletonProps, DummyButtonSkeletonRef, DummyButtonVariant, DummyIconButtonContext, DummyIconButtonIconDefaultElement, DummyIconButtonIconElement, DummyIconButtonIconProps, DummyIconButtonIconRef, DummyIconButtonProps, DummyIconButtonRef, DummyIconButtonSize, DummyIconButtonSkeletonProps, DummyIconButtonSkeletonRef, DummyIconButtonVariant, FileButtonBlob, FileButtonBlobs, FileButtonChangeEvent, FileButtonChildrenProps, FileButtonError, FileButtonErrors, FileButtonMouseEvent, FileButtonProps, IconButtonContext, IconButtonDefaultElement, IconButtonElement, IconButtonGroupContext, IconButtonGroupItemProps, IconButtonGroupItemRef, IconButtonGroupProps, IconButtonGroupRef, IconButtonIconDefaultElement, IconButtonIconElement, IconButtonIconProps, IconButtonIconRef, IconButtonMouseEvent, IconButtonProps, IconButtonRef, IconButtonRenderProps, IconButtonSize, IconButtonSpinnerProps, IconButtonSpinnerRef, IconButtonVariant, LinkDefaultElement, LinkElement, LinkMouseEvent, LinkProps, LinkRef, ScrollToTopIconButtonDefaultElement, ScrollToTopIconButtonElement, ScrollToTopIconButtonMouseEvent, ScrollToTopIconButtonProps, ScrollToTopIconButtonRef };
//# sourceMappingURL=index.d.ts.map