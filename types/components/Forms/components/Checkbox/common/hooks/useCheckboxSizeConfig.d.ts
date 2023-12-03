import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import type { CheckboxProps } from '../types';
type CheckboxSizeConfig = {
    fontSize: ThemeFontSize;
    padding: Record<'x' | 'y', ThemeSpacing>;
    radius: ThemeRadius;
    spacing: ThemeSpacing;
};
type UseCheckboxSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<CheckboxProps<Element>, 'isCompact' | 'size'>;
type UseCheckboxSizeConfigReturn = CheckboxSizeConfig;
declare const useCheckboxSizeConfig: <Element_1 extends ElementType = "div">(props: UseCheckboxSizeConfigProps<Element_1>) => UseCheckboxSizeConfigReturn;
export default useCheckboxSizeConfig;
//# sourceMappingURL=useCheckboxSizeConfig.d.ts.map