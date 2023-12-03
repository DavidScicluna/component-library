import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { DummyIconButtonProps } from '../types';
type UseDummyIconButtonClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyIconButtonProps<Element>, 'variant'>;
type UseDummyIconButtonClassesReturn = ClassName;
declare const useDummyIconButtonClasses: <Element_1 extends ElementType = "div">(props: UseDummyIconButtonClassesProps<Element_1>) => UseDummyIconButtonClassesReturn;
export default useDummyIconButtonClasses;
//# sourceMappingURL=useDummyIconButtonClasses.d.ts.map