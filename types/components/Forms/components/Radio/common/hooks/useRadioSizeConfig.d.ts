import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import type { RadioProps } from '../types';
type RadioSizeConfig = {
    fontSize: ThemeFontSize;
    padding: Record<'x' | 'y', ThemeSpacing>;
    radius: ThemeRadius;
    spacing: ThemeSpacing;
};
type UseRadioSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<RadioProps<Element>, 'isCompact' | 'size'>;
type UseRadioSizeConfigReturn = RadioSizeConfig;
declare const useRadioSizeConfig: <Element_1 extends ElementType = "div">(props: UseRadioSizeConfigProps<Element_1>) => UseRadioSizeConfigReturn;
export default useRadioSizeConfig;
//# sourceMappingURL=useRadioSizeConfig.d.ts.map