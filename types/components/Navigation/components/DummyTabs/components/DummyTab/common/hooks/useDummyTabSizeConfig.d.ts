import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize, ThemeSpacing } from '@common/types';
import type { DummyTabProps } from '../types';
type DummyTabSizeConfig = {
    fontSize: ThemeFontSize;
    padding: Record<'x' | 'y', ThemeSpacing>;
    spacing: ThemeSpacing;
};
type UseDummyTabSizeConfigProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyTabProps<Element>, 'isCompact'>;
type UseDummyTabSizeConfigReturn = DummyTabSizeConfig;
declare const useDummyTabSizeConfig: <Element_1 extends ElementType = "div">(props: UseDummyTabSizeConfigProps<Element_1>) => UseDummyTabSizeConfigReturn;
export default useDummyTabSizeConfig;
//# sourceMappingURL=useDummyTabSizeConfig.d.ts.map