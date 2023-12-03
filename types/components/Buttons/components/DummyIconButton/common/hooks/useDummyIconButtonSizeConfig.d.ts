import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeRadius, ThemeSpacing } from '@common/types';
import type { DummyIconButtonProps } from '../types';
type DummyIconButtonSizeConfig = {
    fontSize: ThemeFontSize;
    padding: ThemeSpacing;
    radius: ThemeRadius;
};
type UseDummyIconButtonSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyIconButtonProps<Element>, 'isCompact' | 'isRound' | 'size' | 'variant'>;
type UseDummyIconButtonSizeConfigReturn = DummyIconButtonSizeConfig;
declare const useDummyIconButtonSizeConfig: <Element_1 extends ElementType = "div">(props: UseDummyIconButtonSizeConfigProps<Element_1>) => UseDummyIconButtonSizeConfigReturn;
export default useDummyIconButtonSizeConfig;
//# sourceMappingURL=useDummyIconButtonSizeConfig.d.ts.map