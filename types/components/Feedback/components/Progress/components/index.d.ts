/// <reference types="react" />
import type { ProgressLabelDefaultElement, ProgressLabelElement, ProgressLabelProps, ProgressLabelRef } from './ProgressLabel';
import { ProgressLabel } from './ProgressLabel';
import type { ProgressSectionProps, ProgressSectionRef } from './ProgressSection';
import { ProgressSection } from './ProgressSection';
export declare const constants: {
    __DEFAULT_PROGRESS_SECTION_VALUE__: 0;
};
export declare const keys: {
    __KEYS_PROGRESS_SECTION_CLASS__: "ds-cl-progress-section";
    __KEYS_PROGRESS_LABEL_CLASS__: "ds-cl-progress-label";
};
export declare const hooks: {
    useProgressSectionClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        color: ProgressSectionProps<Element_1>["color"];
        colorMode: ProgressSectionProps<Element_1>["colorMode"];
    }) => string;
};
export { ProgressLabel, ProgressSection };
export type { ProgressLabelDefaultElement, ProgressLabelElement, ProgressLabelProps, ProgressLabelRef, ProgressSectionProps, ProgressSectionRef };
//# sourceMappingURL=index.d.ts.map