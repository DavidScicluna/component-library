import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { SkeletonProps } from '../types';
type UseSkeletonClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<SkeletonProps<Element>, 'color' | 'colorMode' | 'isAnimated' | 'radius'>;
type UseSkeletonClassesReturn = ClassName;
declare const useSkeletonClasses: <Element_1 extends ElementType = "div">(props: UseSkeletonClassesProps<Element_1>) => UseSkeletonClassesReturn;
export default useSkeletonClasses;
//# sourceMappingURL=useSkeletonClasses.d.ts.map