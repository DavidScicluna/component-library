import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import type { BadgeProps } from '../types';
type BadgeSizeConfig = {
    fontSize: ThemeFontSize;
    padding: Record<'x' | 'y', ThemeSpacing>;
    radius: ThemeRadius;
    spacing: ThemeSpacing;
};
type UseBadgeSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<BadgeProps<Element>, 'isCompact' | 'isRound' | 'size' | 'variant'>;
type UseBadgeSizeConfigReturn = BadgeSizeConfig;
declare const useBadgeSizeConfig: <Element_1 extends ElementType = "div">(props: UseBadgeSizeConfigProps<Element_1>) => UseBadgeSizeConfigReturn;
export default useBadgeSizeConfig;
//# sourceMappingURL=useBadgeSizeConfig.d.ts.map