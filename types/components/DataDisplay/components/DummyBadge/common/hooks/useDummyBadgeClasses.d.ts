import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { DummyBadgeProps } from '../types';
type UseDummyBadgeClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyBadgeProps<Element>, 'isCompact' | 'isFullWidth' | 'isRound' | 'isUppercase' | 'size' | 'variant'>;
type UseDummyBadgeClassesReturn = ClassName;
declare const useDummyBadgeClasses: <Element_1 extends ElementType = "div">(props: UseDummyBadgeClassesProps<Element_1>) => UseDummyBadgeClassesReturn;
export default useDummyBadgeClasses;
//# sourceMappingURL=useDummyBadgeClasses.d.ts.map