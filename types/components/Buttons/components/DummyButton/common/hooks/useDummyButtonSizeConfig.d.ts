import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import type { DummyButtonProps } from '../types';
type DummyButtonSizeConfig = {
    fontSize: ThemeFontSize;
    padding: Record<'x' | 'y', ThemeSpacing>;
    radius: ThemeRadius;
    spacing: ThemeSpacing;
};
type UseDummyButtonSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyButtonProps<Element>, 'isCompact' | 'isRound' | 'size' | 'variant'>;
type UseDummyButtonSizeConfigReturn = DummyButtonSizeConfig;
declare const useDummyButtonSizeConfig: <Element_1 extends ElementType = "div">(props: UseDummyButtonSizeConfigProps<Element_1>) => UseDummyButtonSizeConfigReturn;
export default useDummyButtonSizeConfig;
//# sourceMappingURL=useDummyButtonSizeConfig.d.ts.map