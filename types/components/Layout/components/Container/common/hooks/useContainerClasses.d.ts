import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { ContainerProps } from '../types';
type UseContainerClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<ContainerProps<Element>, 'breakpoint' | 'isContentCentered' | 'isFluid'>;
type UseContainerClassesReturn = ClassName;
declare const useContainerClasses: <Element_1 extends ElementType = "div">(props: UseContainerClassesProps<Element_1>) => UseContainerClassesReturn;
export default useContainerClasses;
//# sourceMappingURL=useContainerClasses.d.ts.map