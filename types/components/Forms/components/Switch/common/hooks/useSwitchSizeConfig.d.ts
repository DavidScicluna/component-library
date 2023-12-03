import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import type { SwitchProps } from '../types';
type SwitchSizeConfig = {
    fontSize: ThemeFontSize;
    padding: Record<'x' | 'y', ThemeSpacing>;
    radius: ThemeRadius;
    spacing: ThemeSpacing;
};
type UseSwitchSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<SwitchProps<Element>, 'isCompact' | 'size'>;
type UseSwitchSizeConfigReturn = SwitchSizeConfig;
declare const useSwitchSizeConfig: <Element_1 extends ElementType = "div">(props: UseSwitchSizeConfigProps<Element_1>) => UseSwitchSizeConfigReturn;
export default useSwitchSizeConfig;
//# sourceMappingURL=useSwitchSizeConfig.d.ts.map