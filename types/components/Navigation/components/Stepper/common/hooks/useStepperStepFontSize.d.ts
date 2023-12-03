import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { StepperProps } from '../types';
type UseStepperStepFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<StepperProps<Element>, 'size'>;
declare const useStepperStepFontSize: <Element_1 extends ElementType = "div">(props: UseStepperStepFontSizeProps<Element_1>) => number;
export default useStepperStepFontSize;
//# sourceMappingURL=useStepperStepFontSize.d.ts.map