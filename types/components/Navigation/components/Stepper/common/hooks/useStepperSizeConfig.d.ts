import { type ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeSpacing } from '@common/types';
import type { StepperProps } from '../types';
type StepperSizeConfig = {
    fontSize: Record<'title' | 'subtitle' | 'status', ThemeFontSize>;
    icon: ThemeFontSize;
    padding: Record<'x' | 'y', ThemeSpacing>;
    spacing: ThemeSpacing;
};
type UseStepperSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<StepperProps<Element>, 'size'>;
type UseStepperSizeConfigReturn = StepperSizeConfig;
declare const useStepperSizeConfig: <Element_1 extends ElementType = "div">(props: UseStepperSizeConfigProps<Element_1>) => UseStepperSizeConfigReturn;
export default useStepperSizeConfig;
//# sourceMappingURL=useStepperSizeConfig.d.ts.map