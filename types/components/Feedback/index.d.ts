/// <reference types="react" />
import type { AlertContext, AlertDescriptionDefaultElement, AlertDescriptionElement, AlertDescriptionProps, AlertDescriptionRef, AlertDuration, AlertIconDefaultElement, AlertIconElement, AlertIconProps, AlertIconRef, AlertLabelDefaultElement, AlertLabelElement, AlertLabelProps, AlertLabelRef, AlertProps, AlertRef, AlertRenderActionsProps, AlertRenderCloseProps, AlertStatus, AlertVariant } from './components/Alert';
import { Alert, AlertDescription, AlertIcon, AlertLabel } from './components/Alert';
import type { ProgressContext, ProgressLabelDefaultElement, ProgressLabelElement, ProgressLabelProps, ProgressLabelRef, ProgressProps, ProgressRef, ProgressSectionProps, ProgressSectionRef } from './components/Progress';
import { Progress, ProgressLabel, ProgressSection } from './components/Progress';
import type { SkeletonProps, SkeletonRef } from './components/Skeleton';
import { Skeleton } from './components/Skeleton';
import type { SpinnerBarsVariant, SpinnerColorRingVariant, SpinnerOvalVariant, SpinnerProps, SpinnerPuffVariant, SpinnerRef, SpinnerRingsVariant, SpinnerRotatingLinesVariant, SpinnerSize, SpinnerTailSpinVariant, SpinnerThreeDotsVariant, SpinnerVariant } from './components/Spinner';
import { Spinner } from './components/Spinner';
export declare const constants: {
    __DEFAULT_SKELETON_IS_ANIMATED__: true;
    __DEFAULT_SKELETON_IS_LOADED__: false;
    __DEFAULT_SPINNER_IS_VISIBLE__: true;
    __DEFAULT_SPINNER_SIZE__: SpinnerSize;
    __DEFAULT_SPINNER_VARIANT__: SpinnerVariant;
    __DEFAULT_PROGRESS_SECTION_VALUE__: 0;
    __DEFAULT_PROGRESS_IS_INDETERMINATE__: false;
    __DEFAULT_PROGRESS_MAX__: 100;
    __DEFAULT_PROGRESS_MIN__: 0;
    __DEFAULT_PROGRESS_VALUE__: 0;
    __DEFAULT_PROGRESS_VARIANT__: import("./components/Progress").ProgressVariant;
    __DEFAULT_ALERT_DURATION__: AlertDuration;
    __DEFAULT_ALERT_LINE_HEIGHT_SIZE__: import("../..").ThemeLineHeight;
    __DEFAULT_ALERT_STATUS__: AlertStatus;
    __DEFAULT_ALERT_VARIANT__: AlertVariant;
};
export declare const keys: {
    __KEY_SKELETON_CLASS__: "ds-cl-skeleton";
    __KEY_SKELETON_CHILD_CLASS__: "ds-cl-skeleton-child";
    __KEY_SKELETON_OVERLAY_CLASS__: "ds-cl-skeleton-overlay";
    __KEYS_SPINNER_CLASS__: "ds-cl-spinner";
    __KEYS_SPINNER_BARS_CLASS__: "ds-cl-bars-spinner";
    __KEYS_SPINNER_COLOR_RING_CLASS__: "ds-cl-color-ring-spinner";
    __KEYS_SPINNER_OVAL_CLASS__: "ds-cl-oval-spinner";
    __KEYS_SPINNER_PUFF_CLASS__: "ds-cl-puff-spinner";
    __KEYS_SPINNER_RINGS_CLASS__: "ds-cl-rings-spinner";
    __KEYS_SPINNER_TAIL_SPIN_CLASS__: "ds-cl-tail-spin-spinner";
    __KEYS_SPINNER_THREE_DOTS_CLASS__: "ds-cl-three-dots-spinner";
    __KEYS_PROGRESS_SECTION_CLASS__: "ds-cl-progress-section";
    __KEYS_PROGRESS_LABEL_CLASS__: "ds-cl-progress-label";
    __KEYS_PROGRESS_CLASS__: "ds-cl-progress";
    __KEYS_ALERT_LABEL_CLASS__: "ds-cl-alert-label";
    __KEYS_ALERT_ICON_CLASS__: "ds-cl-alert-icon";
    __KEYS_ALERT_DESCRIPTION_CLASS__: "ds-cl-alert-description";
    __KEYS_ALERT_CLASS__: "ds-cl-alert";
};
export declare const utils: {
    getStatusColor: import("micro-memoize").Memoized<(status: AlertStatus, color?: import("../..").ThemeColor) => import("../..").ThemeColor>;
    getStatusIcon: import("micro-memoize").Memoized<(status: AlertStatus) => import("../..").IconKey>;
};
export declare const hooks: {
    useSkeletonClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        color: SkeletonProps<Element_1>["color"];
        radius: SkeletonProps<Element_1>["radius"];
        colorMode: SkeletonProps<Element_1>["colorMode"];
        isAnimated: SkeletonProps<Element_1>["isAnimated"];
    }) => string;
    useProgressSectionClasses: <Element_2 extends import("react").ElementType = "div">(props: {
        color: ProgressSectionProps<Element_2>["color"];
        colorMode: ProgressSectionProps<Element_2>["colorMode"];
    }) => string;
    useProgressClasses: <Element_3 extends import("react").ElementType = "div">(props: {
        color: ProgressProps<Element_3>["color"];
        radius: ProgressProps<Element_3>["radius"];
        colorMode: ProgressProps<Element_3>["colorMode"];
    }) => string;
    useProgressContext: <Element_4 extends import("react").ElementType = "div">() => {
        color: ProgressProps<Element_4>["color"];
        colorMode: ProgressProps<Element_4>["colorMode"];
        isIndeterminate: boolean;
        max: number;
        min: number;
        radius: import("../..").ThemeRadius;
        variant: import("./components/Progress").ProgressVariant;
    };
    useProgressStyles: <Element_5 extends import("react").ElementType = "div">(props: {
        variant: ProgressProps<Element_5>["variant"];
    }) => import("@emotion/serialize").CSSObject;
    useAlertClasses: <Element_6 extends import("react").ElementType = "div">(props: {
        color: AlertProps<Element_6>["color"];
        status: AlertProps<Element_6>["status"];
        colorMode: AlertProps<Element_6>["colorMode"];
    }) => string;
    useAlertContext: <Element_7 extends import("react").ElementType = "div">() => {
        color: AlertProps<Element_7>["color"];
        colorMode: AlertProps<Element_7>["colorMode"];
        status: AlertStatus;
        variant: AlertVariant;
    };
};
export { Alert, AlertDescription, AlertIcon, AlertLabel, Progress, ProgressLabel, ProgressSection, Skeleton, Spinner };
export type { AlertContext, AlertDescriptionDefaultElement, AlertDescriptionElement, AlertDescriptionProps, AlertDescriptionRef, AlertDuration, AlertIconDefaultElement, AlertIconElement, AlertIconProps, AlertIconRef, AlertLabelDefaultElement, AlertLabelElement, AlertLabelProps, AlertLabelRef, AlertProps, AlertRef, AlertRenderActionsProps, AlertRenderCloseProps, AlertStatus, AlertVariant, ProgressContext, ProgressLabelDefaultElement, ProgressLabelElement, ProgressLabelProps, ProgressLabelRef, ProgressProps, ProgressRef, ProgressSectionProps, ProgressSectionRef, SkeletonProps, SkeletonRef, SpinnerBarsVariant, SpinnerColorRingVariant, SpinnerOvalVariant, SpinnerProps, SpinnerPuffVariant, SpinnerRef, SpinnerRingsVariant, SpinnerRotatingLinesVariant, SpinnerSize, SpinnerTailSpinVariant, SpinnerThreeDotsVariant, SpinnerVariant };
//# sourceMappingURL=index.d.ts.map