/// <reference types="react" />
import type { StepperAlign, StepperContext, StepperOrientation, StepperProps, StepperRef, StepperSize } from './common/types';
import type { StepDefaultElement, StepElement, StepHeadlineProps, StepHeadlineRef, StepIconDefaultElement, StepIconElement, StepIconProps, StepIconRef, StepListProps, StepListRef, StepListRenderProps, StepMouseEvent, StepPanelProps, StepPanelsProps, StepPanelsRef, StepProgressProps, StepProgressRef, StepProps, StepRef, StepRenderProps, StepStatusDefaultElement, StepStatusElement, StepStatusIconDefaultElement, StepStatusIconElement, StepStatusIconProps, StepStatusIconRef, StepStatusProps, StepStatusRef, StepSubtitleDefaultElement, StepSubtitleElement, StepSubtitleProps, StepSubtitleRef, StepTitleDefaultElement, StepTitleElement, StepTitleProps, StepTitleRef } from './components';
import { Step, StepHeadline, StepIcon, StepList, StepPanels, StepProgress, StepStatus, StepStatusIcon, StepSubtitle, StepTitle } from './components';
import Stepper from './Stepper';
export declare const constants: {
    __DEFAULT_STEP_BORDER_WIDTH__: import("../../../..").ThemeBorderWidth;
    __DEFAULT_STEP_INDEX__: -1;
    __DEFAULT_STEP_IS_ACTIVE__: false;
    __DEFAULT_STEP_IS_COMPACT__: false;
    __DEFAULT_STEP_IS_DISABLED__: false;
    __DEFAULT_STEP_IS_UPPERCASE__: false;
    __DEFAULT_STEP_STATUS__: import("./components/Step/common/types").StepStatus;
    __DEFAULT_STEPPER_ALIGN__: StepperAlign;
    __DEFAULT_STEPPER_ID__: string;
    __DEFAULT_STEPPER_INDEX__: 0;
    __DEFAULT_STEPPER_IS_CONSECUTIVELY__: false;
    __DEFAULT_STEPPER_IS_DISABLED__: false;
    __DEFAULT_STEPPER_IS_FITTED__: false;
    __DEFAULT_STEPPER_ORIENTATION__: StepperOrientation;
    __DEFAULT_STEPPER_SIZE__: StepperSize;
    __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__: import("../../../..").ThemeLineHeight;
    __DEFAULT_STEPPER_TOTAL__: 0;
    __DEFAULT_STEPPER_VARIANT__: import("./common/types").StepperVariant;
};
export declare const keys: {
    __KEYS_STEP_TITLE_CLASS__: "ds-cl-step-title";
    __KEYS_STEP_SUBTITLE_CLASS__: "ds-cl-stepper-step-subtitle";
    __KEYS_STEP_STATUS_ICON_CLASS__: "ds-cl-stepper-step-status-icon";
    __KEYS_STEP_STATUS_CLASS__: "ds-cl-stepper-step-status";
    __KEYS_STEP_PROGRESS_CLASS__: "ds-cl-stepper-step-progress";
    __KEYS_STEPPER_STEP_PANELS_CLASS__: "ds-cl-stepper-step-panels";
    __KEYS_STEPPER_STEP_LIST_CLASS__: "ds-cl-stepper-step-list";
    __KEYS_STEP_ICON_CLASS__: "ds-cl-stepper-step-icon";
    __KEYS_STEP_HEADLINE_CLASS__: "ds-cl-stepper-step-headline";
    __KEYS_STEP_CLASS__: "ds-cl-stepper-step";
    __KEYS_STEPPER_CLASS__: "ds-cl-stepper";
};
export * as utils from './common/utils';
export declare const hooks: {
    useStepClasses: <Element_1 extends "button" = "button">(props: Pick<StepProps<Element_1>, "color" | "colorMode" | "isActive" | "isDisabled" | "isCompact" | "isUppercase"> & {
        isFocused: boolean;
    }) => {
        label: string;
        step: string;
        topDivider: string;
        bottomDivider: string;
    };
    useStepContext: <Element_2 extends "button" = "button">() => {
        id: string;
        index: number | StepProps<Element_2>["index"];
        status: import("./components/Step/common/types").StepStatus;
    };
    useStepResponsiveValues: <Element_3 extends "button" = "button">(props: {
        status?: StepProps<Element_3>["status"] | undefined;
        isActive?: StepProps<Element_3>["isActive"] | undefined;
        isDisabled?: StepProps<Element_3>["isDisabled"] | undefined;
        isCompact?: StepProps<Element_3>["isCompact"] | undefined;
        isUppercase?: StepProps<Element_3>["isUppercase"] | undefined;
    }) => {
        isActive: boolean;
        isCompact: boolean;
        isStepDisabled: boolean;
        isUppercase: boolean;
        status: import("./components/Step/common/types").StepStatus;
    };
    useStepSizeConfig: <Element_4 extends "button" = "button">(props: {
        isCompact?: StepProps<Element_4>["isCompact"] | undefined;
    }) => {
        fontSize: import("../../../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../../../..").ThemeSpacing>;
        spacing: import("../../../..").ThemeSpacing;
    };
    useStepperContext: <Element_5 extends import("react").ElementType = "div">() => {
        color: StepperProps<Element_5>["color"];
        colorMode: StepperProps<Element_5>["colorMode"];
        id: string;
        align: StepperAlign;
        index: number;
        total: number;
        isConsecutively: boolean;
        isDisabled: boolean;
        isFitted: boolean;
        onChange: (() => undefined) | StepperProps<Element_5>["onChange"];
        orientation: StepperOrientation;
        size: StepperSize;
        spacing: import("../../../..").ThemeSpacing;
        variant: import("./common/types").StepperVariant;
    };
    useStepperResponsiveValues: <Element_6 extends import("react").ElementType = "div">(props: {
        orientation: StepperProps<Element_6>["orientation"];
        spacing: StepperProps<Element_6>["spacing"];
        size: StepperProps<Element_6>["size"];
        align: StepperProps<Element_6>["align"];
        isDisabled: StepperProps<Element_6>["isDisabled"];
        variant: StepperProps<Element_6>["variant"];
        index: StepperProps<Element_6>["index"];
        total: StepperProps<Element_6>["total"];
        isFitted: StepperProps<Element_6>["isFitted"];
        isConsecutively: StepperProps<Element_6>["isConsecutively"];
    }) => {
        align: StepperAlign;
        index: number;
        total: number;
        isConsecutively: boolean;
        isDisabled: boolean;
        isFitted: boolean;
        orientation: StepperOrientation;
        size: StepperSize;
        spacing: import("../../../..").ThemeSpacing;
        variant: import("./common/types").StepperVariant;
    };
    useStepperSizeConfig: <Element_7 extends import("react").ElementType = "div">(props: {
        size: StepperProps<Element_7>["size"];
    }) => {
        fontSize: Record<"title" | "status" | "subtitle", import("../../../..").ThemeFontSize>;
        icon: import("../../../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../../../..").ThemeSpacing>;
        spacing: import("../../../..").ThemeSpacing;
    };
    useStepperStepFontSize: <Element_8 extends import("react").ElementType = "div">(props: {
        size: StepperProps<Element_8>["size"];
    }) => number;
};
export { Step, StepHeadline, StepIcon, StepList, StepPanels, Stepper, StepProgress, StepStatus, StepStatusIcon, StepSubtitle, StepTitle };
export type { StepDefaultElement, StepElement, StepHeadlineProps, StepHeadlineRef, StepIconDefaultElement, StepIconElement, StepIconProps, StepIconRef, StepListProps, StepListRef, StepListRenderProps, StepMouseEvent, StepPanelProps, StepPanelsProps, StepPanelsRef, StepperAlign, StepperContext, StepperOrientation, StepperProps, StepperRef, StepperSize, StepProgressProps, StepProgressRef, StepProps, StepRef, StepRenderProps, StepStatusDefaultElement, StepStatusElement, StepStatusIconDefaultElement, StepStatusIconElement, StepStatusIconProps, StepStatusIconRef, StepStatusProps, StepStatusRef, StepSubtitleDefaultElement, StepSubtitleElement, StepSubtitleProps, StepSubtitleRef, StepTitleDefaultElement, StepTitleElement, StepTitleProps, StepTitleRef };
//# sourceMappingURL=index.d.ts.map