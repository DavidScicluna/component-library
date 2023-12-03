import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { ProgressProps } from '../types';
type UseProgressClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<ProgressProps<Element>, 'color' | 'colorMode' | 'radius'>;
type UseProgressClassesReturn = ClassName;
declare const useProgressClasses: <Element_1 extends ElementType = "div">(props: UseProgressClassesProps<Element_1>) => UseProgressClassesReturn;
export default useProgressClasses;
//# sourceMappingURL=useProgressClasses.d.ts.map