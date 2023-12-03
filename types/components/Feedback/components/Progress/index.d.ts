/// <reference types="react" />
import type { ProgressContext, ProgressProps, ProgressRef, ProgressVariant } from './common/types';
import type { ProgressLabelDefaultElement, ProgressLabelElement, ProgressLabelProps, ProgressLabelRef, ProgressSectionProps, ProgressSectionRef } from './components';
import { ProgressLabel, ProgressSection } from './components';
import Progress from './Progress';
export declare const constants: {
    __DEFAULT_PROGRESS_SECTION_VALUE__: 0;
    __DEFAULT_PROGRESS_IS_INDETERMINATE__: false;
    __DEFAULT_PROGRESS_MAX__: 100;
    __DEFAULT_PROGRESS_MIN__: 0;
    __DEFAULT_PROGRESS_VALUE__: 0;
    __DEFAULT_PROGRESS_VARIANT__: ProgressVariant;
};
export declare const keys: {
    __KEYS_PROGRESS_SECTION_CLASS__: "ds-cl-progress-section";
    __KEYS_PROGRESS_LABEL_CLASS__: "ds-cl-progress-label";
    __KEYS_PROGRESS_CLASS__: "ds-cl-progress";
};
export declare const hooks: {
    useProgressSectionClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        color: ProgressSectionProps<Element_1>["color"];
        colorMode: ProgressSectionProps<Element_1>["colorMode"];
    }) => string;
    useProgressClasses: <Element_2 extends import("react").ElementType = "div">(props: {
        color: ProgressProps<Element_2>["color"];
        radius: ProgressProps<Element_2>["radius"];
        colorMode: ProgressProps<Element_2>["colorMode"];
    }) => string;
    useProgressContext: <Element_3 extends import("react").ElementType = "div">() => {
        color: ProgressProps<Element_3>["color"];
        colorMode: ProgressProps<Element_3>["colorMode"];
        isIndeterminate: boolean;
        max: number;
        min: number;
        radius: import("../../../..").ThemeRadius;
        variant: ProgressVariant;
    };
    useProgressStyles: <Element_4 extends import("react").ElementType = "div">(props: {
        variant: ProgressProps<Element_4>["variant"];
    }) => import("@emotion/serialize").CSSObject;
};
export { Progress, ProgressLabel, ProgressSection };
export type { ProgressContext, ProgressLabelDefaultElement, ProgressLabelElement, ProgressLabelProps, ProgressLabelRef, ProgressProps, ProgressRef, ProgressSectionProps, ProgressSectionRef, ProgressVariant };
//# sourceMappingURL=index.d.ts.map