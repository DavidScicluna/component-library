import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import type { DummyBadgeProps } from '../types';
type DummyBadgeSizeConfig = {
    fontSize: ThemeFontSize;
    padding: Record<'x' | 'y', ThemeSpacing>;
    radius: ThemeRadius;
    spacing: ThemeSpacing;
};
type UseDummyBadgeSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyBadgeProps<Element>, 'isCompact' | 'isRound' | 'size' | 'variant'>;
type UseDummyBadgeSizeConfigReturn = DummyBadgeSizeConfig;
declare const useDummyBadgeSizeConfig: <Element_1 extends ElementType = "div">(props: UseDummyBadgeSizeConfigProps<Element_1>) => UseDummyBadgeSizeConfigReturn;
export default useDummyBadgeSizeConfig;
//# sourceMappingURL=useDummyBadgeSizeConfig.d.ts.map