/// <reference types="react" />
import type { DummyTabIconDefaultElement, DummyTabIconElement, DummyTabIconProps, DummyTabIconRef, DummyTabListProps, DummyTabListRef, DummyTabListRenderProps, DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef, DummyTabProps, DummyTabRef, DummyTabRenderProps, DummyTabsAlign, DummyTabsContext, DummyTabsOrientation, DummyTabsProps, DummyTabsRef, DummyTabsSize } from './components/DummyTabs';
import { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabs } from './components/DummyTabs';
import type { StepDefaultElement, StepElement, StepHeadlineProps, StepHeadlineRef, StepIconDefaultElement, StepIconElement, StepIconProps, StepIconRef, StepListProps, StepListRef, StepListRenderProps, StepMouseEvent, StepPanelProps, StepPanelsProps, StepPanelsRef, StepperAlign, StepperContext, StepperOrientation, StepperProps, StepperRef, StepperSize, StepProgressProps, StepProgressRef, StepProps, StepRef, StepRenderProps, StepStatusDefaultElement, StepStatusElement, StepStatusIconDefaultElement, StepStatusIconElement, StepStatusIconProps, StepStatusIconRef, StepStatusProps, StepStatusRef, StepSubtitleDefaultElement, StepSubtitleElement, StepSubtitleProps, StepSubtitleRef, StepTitleDefaultElement, StepTitleElement, StepTitleProps, StepTitleRef } from './components/Stepper';
import { Step, StepHeadline, StepIcon, StepList, StepPanels, Stepper, StepProgress, StepStatus, StepStatusIcon, StepSubtitle, StepTitle } from './components/Stepper';
import type { TabDefaultElement, TabElement, TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef, TabListProps, TabListRef, TabListRenderProps, TabMouseEvent, TabPanelProps, TabPanelsProps, TabPanelsRef, TabProps, TabRef, TabRenderProps, TabsAlign, TabsContext, TabsOrientation, TabsProps, TabsRef, TabsSize } from './components/Tabs';
import { Tab, TabIcon, TabList, TabPanels, Tabs } from './components/Tabs';
export declare const constants: {
    __DEFAULT_TAB_BORDER_WIDTH__: import("../..").ThemeBorderWidth;
    __DEFAULT_TAB_IS_ACTIVE__: false;
    __DEFAULT_TAB_IS_COMPACT__: false;
    __DEFAULT_TAB_IS_DISABLED__: false;
    __DEFAULT_TAB_IS_UPPERCASE__: false;
    __DEFAULT_TABS_ALIGN__: TabsAlign;
    __DEFAULT_TABS_ID__: string;
    __DEFAULT_TABS_INDEX__: 0;
    __DEFAULT_TABS_IS_DISABLED__: false;
    __DEFAULT_TABS_IS_FITTED__: false;
    __DEFAULT_TABS_ORIENTATION__: TabsOrientation;
    __DEFAULT_TABS_SIZE__: TabsSize;
    __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_STEP_BORDER_WIDTH__: import("../..").ThemeBorderWidth;
    __DEFAULT_STEP_INDEX__: -1;
    __DEFAULT_STEP_IS_ACTIVE__: false;
    __DEFAULT_STEP_IS_COMPACT__: false;
    __DEFAULT_STEP_IS_DISABLED__: false;
    __DEFAULT_STEP_IS_UPPERCASE__: false;
    __DEFAULT_STEP_STATUS__: import("./components/Stepper/components/Step/common/types").StepStatus;
    __DEFAULT_STEPPER_ALIGN__: StepperAlign;
    __DEFAULT_STEPPER_ID__: string;
    __DEFAULT_STEPPER_INDEX__: 0;
    __DEFAULT_STEPPER_IS_CONSECUTIVELY__: false;
    __DEFAULT_STEPPER_IS_DISABLED__: false;
    __DEFAULT_STEPPER_IS_FITTED__: false;
    __DEFAULT_STEPPER_ORIENTATION__: StepperOrientation;
    __DEFAULT_STEPPER_SIZE__: StepperSize;
    __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_STEPPER_TOTAL__: 0;
    __DEFAULT_STEPPER_VARIANT__: import("./components/Stepper/common/types").StepperVariant;
    __DEFAULT_DUMMY_TAB_BORDER_WIDTH__: import("../..").ThemeBorderWidth;
    __DEFAULT_DUMMY_TAB_IS_COMPACT__: false;
    __DEFAULT_DUMMY_TAB_IS_UPPERCASE__: false;
    __DEFAULT_DUMMY_TABS_ALIGN__: DummyTabsAlign;
    __DEFAULT_DUMMY_TABS_ID__: string;
    __DEFAULT_DUMMY_TABS_INDEX__: 0;
    __DEFAULT_DUMMY_TABS_IS_ANIMATED__: true;
    __DEFAULT_DUMMY_TABS_IS_FITTED__: false;
    __DEFAULT_DUMMY_TABS_ORIENTATION__: DummyTabsOrientation;
    __DEFAULT_DUMMY_TABS_SIZE__: DummyTabsSize;
    __DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
};
export declare const keys: {
    __KEYS_TABS_TAB_PANELS_CLASS__: "ds-cl-tabs-tab-panels";
    __KEYS_TABS_TAB_LIST_CLASS__: "ds-cl-tabs-tab-list";
    __KEYS_TAB_ICON_CLASS__: "ds-cl-tabs-tab-icon";
    __KEYS_TAB_CLASS__: "ds-cl-tabs-tab";
    __KEYS_TABS_CLASS__: "ds-cl-tabs";
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
    __KEY_DUMMY_TAB_SKELETON_CLASS__: "ds-cl-dummy-tabs-skeleton";
    __KEYS_DUMMY_TABS_TAB_PANELS_CLASS__: "ds-cl-dummy-tabs-tab-panels";
    __KEYS_DUMMY_TABS_TAB_LIST_CLASS__: "ds-cl-dummy-tabs-tab-list";
    __KEYS_DUMMY_TAB_ICON_CLASS__: "ds-cl-dummy-tabs-tab-icon";
    __KEYS_DUMMY_TAB_CLASS__: "ds-cl-dummy-tabs-tab";
    __KEYS_DUMMY_TABS_CLASS__: "ds-cl-dummy-tabs";
};
export declare const utils: {
    getTabsID: (id: string) => string;
    getTabListID: (id: string) => string;
    getTabID: (id: string, index: number) => string;
    getTabPanelsID: (id: string) => string;
    getTabPanelID: (id: string, index: number) => string;
    getStepID: (id: string, index: number) => string;
    getStepListID: (id: string) => string;
    getStepPanelID: (id: string, index: number) => string;
    getStepPanelsID: (id: string) => string;
    getStepperID: (id: string) => string;
    getStepStatusColor: import("micro-memoize").Memoized<(color: import("../..").ThemeAppColor, status: StepStatus) => import("../..").ThemeColor>;
    getStepStatusIcon: import("micro-memoize").Memoized<(status: StepStatus, variant: StepperVariant) => import("../..").IconKey>;
    getStepStatusLabel: import("micro-memoize").Memoized<(isSelected: boolean, status: StepStatus) => StepStatus>;
    getStepSubtitleID: (id: string) => string;
    getStepTitleID: (id: string) => string;
    getDummyTabsID: (id: string) => string;
    getDummyTabListID: (id: string) => string;
    getDummyTabID: (id: string, index: number) => string;
    getDummyTabPanelsID: (id: string) => string;
    getDummyTabPanelID: (id: string, index: number) => string;
};
export declare const hooks: {
    useTabClasses: <Element_1 extends "button" = "button">(props: Pick<TabProps<Element_1>, "color" | "colorMode" | "isActive" | "isDisabled" | "isCompact" | "isUppercase"> & {
        isFocused: boolean;
    }) => {
        label: string;
        tab: string;
        topDivider: string;
        bottomDivider: string;
    };
    useTabSizeConfig: <Element_1 extends "button" = "button">(props: {
        isCompact?: TabProps<Element_1>["isCompact"] | undefined;
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../..").ThemeSpacing>;
        spacing: import("../..").ThemeSpacing;
    };
    useTabsContext: <Element_2 extends import("react").ElementType = "div">() => {
        color: TabsProps<Element_2>["color"];
        colorMode: TabsProps<Element_2>["colorMode"];
        align: TabsAlign;
        id: string | TabsProps<Element_2>["id"];
        index: number;
        isDisabled: boolean;
        isFitted: boolean;
        onChange: (() => undefined) | TabsProps<Element_2>["onChange"];
        orientation: TabsOrientation;
        size: TabsSize;
        spacing: import("../..").ThemeSpacing;
    };
    useTabsTabFontSize: <Element_3 extends import("react").ElementType = "div">(props: {
        size: TabsProps<Element_3>["size"];
    }) => number;
    useStepClasses: <Element_4 extends "button" = "button">(props: Pick<StepProps<Element_4>, "color" | "colorMode" | "isActive" | "isDisabled" | "isCompact" | "isUppercase"> & {
        isFocused: boolean;
    }) => {
        label: string;
        step: string;
        topDivider: string;
        bottomDivider: string;
    };
    useStepContext: <Element_5 extends "button" = "button">() => {
        id: string;
        index: number | StepProps<Element_5>["index"];
        status: import("./components/Stepper/components/Step/common/types").StepStatus;
    };
    useStepResponsiveValues: <Element_6 extends "button" = "button">(props: {
        status?: StepProps<Element_6>["status"] | undefined;
        isActive?: StepProps<Element_6>["isActive"] | undefined;
        isDisabled?: StepProps<Element_6>["isDisabled"] | undefined;
        isCompact?: StepProps<Element_6>["isCompact"] | undefined;
        isUppercase?: StepProps<Element_6>["isUppercase"] | undefined;
    }) => {
        isActive: boolean;
        isCompact: boolean;
        isStepDisabled: boolean;
        isUppercase: boolean;
        status: import("./components/Stepper/components/Step/common/types").StepStatus;
    };
    useStepSizeConfig: <Element_7 extends "button" = "button">(props: {
        isCompact?: StepProps<Element_7>["isCompact"] | undefined;
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../..").ThemeSpacing>;
        spacing: import("../..").ThemeSpacing;
    };
    useStepperContext: <Element_8 extends import("react").ElementType = "div">() => {
        color: StepperProps<Element_8>["color"];
        colorMode: StepperProps<Element_8>["colorMode"];
        id: string;
        align: StepperAlign;
        index: number;
        total: number;
        isConsecutively: boolean;
        isDisabled: boolean;
        isFitted: boolean;
        onChange: (() => undefined) | StepperProps<Element_8>["onChange"];
        orientation: StepperOrientation;
        size: StepperSize;
        spacing: import("../..").ThemeSpacing;
        variant: import("./components/Stepper/common/types").StepperVariant;
    };
    useStepperResponsiveValues: <Element_9 extends import("react").ElementType = "div">(props: {
        orientation: StepperProps<Element_9>["orientation"];
        spacing: StepperProps<Element_9>["spacing"];
        size: StepperProps<Element_9>["size"];
        align: StepperProps<Element_9>["align"];
        isDisabled: StepperProps<Element_9>["isDisabled"];
        variant: StepperProps<Element_9>["variant"];
        index: StepperProps<Element_9>["index"];
        total: StepperProps<Element_9>["total"];
        isFitted: StepperProps<Element_9>["isFitted"];
        isConsecutively: StepperProps<Element_9>["isConsecutively"];
    }) => {
        align: StepperAlign;
        index: number;
        total: number;
        isConsecutively: boolean;
        isDisabled: boolean;
        isFitted: boolean;
        orientation: StepperOrientation;
        size: StepperSize;
        spacing: import("../..").ThemeSpacing;
        variant: import("./components/Stepper/common/types").StepperVariant;
    };
    useStepperSizeConfig: <Element_10 extends import("react").ElementType = "div">(props: {
        size: StepperProps<Element_10>["size"];
    }) => {
        fontSize: Record<"title" | "status" | "subtitle", import("../..").ThemeFontSize>;
        icon: import("../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../..").ThemeSpacing>;
        spacing: import("../..").ThemeSpacing;
    };
    useStepperStepFontSize: <Element_11 extends import("react").ElementType = "div">(props: {
        size: StepperProps<Element_11>["size"];
    }) => number;
    useDummyTabClasses: <Element_12 extends import("react").ElementType = "div">(props: Pick<DummyTabProps<Element_12>, "color" | "colorMode" | "isCompact" | "isUppercase"> & {
        isSelected: boolean;
    }) => {
        label: string;
        tab: string;
        topDivider: string;
        bottomDivider: string;
    };
    useDummyTabSizeConfig: <Element_13 extends import("react").ElementType = "div">(props: {
        isCompact: DummyTabProps<Element_13>["isCompact"];
    }) => {
        fontSize: import("../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../..").ThemeSpacing>;
        spacing: import("../..").ThemeSpacing;
    };
    useDummyTabsContext: <Element_14 extends import("react").ElementType = "div">() => {
        color: DummyTabsProps<Element_14>["color"];
        colorMode: DummyTabsProps<Element_14>["colorMode"];
        align: DummyTabsAlign;
        id: string | DummyTabsProps<Element_14>["id"];
        index: number;
        isAnimated: boolean;
        isFitted: boolean;
        orientation: DummyTabsOrientation;
        size: DummyTabsSize;
        spacing: import("../..").ThemeSpacing;
    };
    useDummyTabsDummyTabFontSize: <Element_15 extends import("react").ElementType = "div">(props: {
        size: DummyTabsProps<Element_15>["size"];
    }) => number;
};
export { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabs, Step, StepHeadline, StepIcon, StepList, StepPanels, Stepper, StepProgress, StepStatus, StepStatusIcon, StepSubtitle, StepTitle, Tab, TabIcon, TabList, TabPanels, Tabs };
export type { DummyTabIconDefaultElement, DummyTabIconElement, DummyTabIconProps, DummyTabIconRef, DummyTabListProps, DummyTabListRef, DummyTabListRenderProps, DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef, DummyTabProps, DummyTabRef, DummyTabRenderProps, DummyTabsAlign, DummyTabsContext, DummyTabsOrientation, DummyTabsProps, DummyTabsRef, DummyTabsSize, StepDefaultElement, StepElement, StepHeadlineProps, StepHeadlineRef, StepIconDefaultElement, StepIconElement, StepIconProps, StepIconRef, StepListProps, StepListRef, StepListRenderProps, StepMouseEvent, StepPanelProps, StepPanelsProps, StepPanelsRef, StepperAlign, StepperContext, StepperOrientation, StepperProps, StepperRef, StepperSize, StepProgressProps, StepProgressRef, StepProps, StepRef, StepRenderProps, StepStatusDefaultElement, StepStatusElement, StepStatusIconDefaultElement, StepStatusIconElement, StepStatusIconProps, StepStatusIconRef, StepStatusProps, StepStatusRef, StepSubtitleDefaultElement, StepSubtitleElement, StepSubtitleProps, StepSubtitleRef, StepTitleDefaultElement, StepTitleElement, StepTitleProps, StepTitleRef, TabDefaultElement, TabElement, TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef, TabListProps, TabListRef, TabListRenderProps, TabMouseEvent, TabPanelProps, TabPanelsProps, TabPanelsRef, TabProps, TabRef, TabRenderProps, TabsAlign, TabsContext, TabsOrientation, TabsProps, TabsRef, TabsSize };
//# sourceMappingURL=index.d.ts.map