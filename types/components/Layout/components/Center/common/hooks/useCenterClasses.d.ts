import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { CenterProps } from '../types';
type UseCenterClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<CenterProps<Element>, 'spacing'>;
type UseCenterClassesReturn = ClassName;
declare const useCenterClasses: <Element_1 extends ElementType = "div">(props: UseCenterClassesProps<Element_1>) => UseCenterClassesReturn;
export default useCenterClasses;
//# sourceMappingURL=useCenterClasses.d.ts.map