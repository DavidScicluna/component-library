import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeSpacing } from '@common/types';
import type { StepperAlign, StepperOrientation, StepperProps, StepperSize, StepperVariant } from '../types';
type UseStepperResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<StepperProps<Element>, 'align' | 'index' | 'total' | 'isConsecutively' | 'isDisabled' | 'isFitted' | 'orientation' | 'size' | 'variant' | 'spacing'>;
declare const useStepperResponsiveValues: <Element_1 extends ElementType = "div">(props: UseStepperResponsiveValuesProps<Element_1>) => {
    align: StepperAlign;
    index: number;
    total: number;
    isConsecutively: boolean;
    isDisabled: boolean;
    isFitted: boolean;
    orientation: StepperOrientation;
    size: StepperSize;
    spacing: ThemeSpacing;
    variant: StepperVariant;
};
export default useStepperResponsiveValues;
//# sourceMappingURL=useStepperResponsiveValues.d.ts.map