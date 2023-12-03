import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { DummyTabProps } from '../types';
type UseDummyTabClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyTabProps<Element>, 'color' | 'colorMode' | 'isCompact' | 'isUppercase'> & {
    isSelected: boolean;
};
type UseDummyTabClassesReturn = Record<'tab' | 'topDivider' | 'bottomDivider' | 'label', ClassName>;
declare const useDummyTabClasses: <Element_1 extends ElementType = "div">(props: UseDummyTabClassesProps<Element_1>) => UseDummyTabClassesReturn;
export default useDummyTabClasses;
//# sourceMappingURL=useDummyTabClasses.d.ts.map