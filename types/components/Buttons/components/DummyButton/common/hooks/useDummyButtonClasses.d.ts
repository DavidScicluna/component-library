import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { DummyButtonProps } from '../types';
type UseDummyButtonClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyButtonProps<Element>, 'isAnimated' | 'isCompact' | 'isFullWidth' | 'isRound' | 'size' | 'variant'>;
type UseDummyButtonClassesReturn = ClassName;
declare const useDummyButtonClasses: <Element_1 extends ElementType = "div">(props: UseDummyButtonClassesProps<Element_1>) => UseDummyButtonClassesReturn;
export default useDummyButtonClasses;
//# sourceMappingURL=useDummyButtonClasses.d.ts.map