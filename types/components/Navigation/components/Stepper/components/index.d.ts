import type { StepDefaultElement, StepElement, StepMouseEvent, StepProps, StepRef, StepRenderProps } from './Step';
import { Step } from './Step';
import type { StepHeadlineProps, StepHeadlineRef } from './StepHeadline';
import { StepHeadline } from './StepHeadline';
import type { StepIconDefaultElement, StepIconElement, StepIconProps, StepIconRef } from './StepIcon';
import { StepIcon } from './StepIcon';
import type { StepListProps, StepListRef, StepListRenderProps } from './StepList';
import { StepList } from './StepList';
import type { StepPanelProps, StepPanelsProps, StepPanelsRef } from './StepPanels';
import { StepPanels } from './StepPanels';
import type { StepProgressProps, StepProgressRef } from './StepProgress';
import { StepProgress } from './StepProgress';
import type { StepStatusDefaultElement, StepStatusElement, StepStatusProps, StepStatusRef } from './StepStatus';
import { StepStatus } from './StepStatus';
import type { StepStatusIconDefaultElement, StepStatusIconElement, StepStatusIconProps, StepStatusIconRef } from './StepStatusIcon';
import { StepStatusIcon } from './StepStatusIcon';
import type { StepSubtitleDefaultElement, StepSubtitleElement, StepSubtitleProps, StepSubtitleRef } from './StepSubtitle';
import { StepSubtitle } from './StepSubtitle';
import type { StepTitleDefaultElement, StepTitleElement, StepTitleProps, StepTitleRef } from './StepTitle';
import { StepTitle } from './StepTitle';
export declare const constants: {
    __DEFAULT_STEP_BORDER_WIDTH__: import("../../../../..").ThemeBorderWidth;
    __DEFAULT_STEP_INDEX__: -1;
    __DEFAULT_STEP_IS_ACTIVE__: false;
    __DEFAULT_STEP_IS_COMPACT__: false;
    __DEFAULT_STEP_IS_DISABLED__: false;
    __DEFAULT_STEP_IS_UPPERCASE__: false;
    __DEFAULT_STEP_STATUS__: import("./Step/common/types").StepStatus;
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
};
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
        status: import("./Step/common/types").StepStatus;
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
        status: import("./Step/common/types").StepStatus;
    };
    useStepSizeConfig: <Element_4 extends "button" = "button">(props: {
        isCompact?: StepProps<Element_4>["isCompact"] | undefined;
    }) => {
        fontSize: import("../../../../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../../../../..").ThemeSpacing>;
        spacing: import("../../../../..").ThemeSpacing;
    };
};
export { Step, StepHeadline, StepIcon, StepList, StepPanels, StepProgress, StepStatus, StepStatusIcon, StepSubtitle, StepTitle };
export type { StepDefaultElement, StepElement, StepHeadlineProps, StepHeadlineRef, StepIconDefaultElement, StepIconElement, StepIconProps, StepIconRef, StepListProps, StepListRef, StepListRenderProps, StepMouseEvent, StepPanelProps, StepPanelsProps, StepPanelsRef, StepProgressProps, StepProgressRef, StepProps, StepRef, StepRenderProps, StepStatusDefaultElement, StepStatusElement, StepStatusIconDefaultElement, StepStatusIconElement, StepStatusIconProps, StepStatusIconRef, StepStatusProps, StepStatusRef, StepSubtitleDefaultElement, StepSubtitleElement, StepSubtitleProps, StepSubtitleRef, StepTitleDefaultElement, StepTitleElement, StepTitleProps, StepTitleRef };
//# sourceMappingURL=index.d.ts.map