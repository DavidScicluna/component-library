import type { ElementType } from 'react';
declare const useStepperContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").StepperProps<Element_1>["color"];
    colorMode: import("../types").StepperProps<Element_1>["colorMode"];
    id: string;
    align: import("../types").StepperAlign;
    index: number;
    total: number;
    isConsecutively: boolean;
    isDisabled: boolean;
    isFitted: boolean;
    onChange: (() => undefined) | import("../types").StepperProps<Element_1>["onChange"];
    orientation: import("../types").StepperOrientation;
    size: import("../types").StepperSize;
    spacing: import("@common/types").ThemeSpacing;
    variant: import("../types").StepperVariant;
};
export default useStepperContext;
//# sourceMappingURL=useStepperContext.d.ts.map