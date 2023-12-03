import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { StackProps } from '../types';
type UseStackClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<StackProps<Element>, 'alignItems' | 'direction' | 'justifyContent' | 'spacing' | 'wrap'>;
type UseStackClassesReturn = ClassName;
declare const useStackClasses: <Element_1 extends ElementType = "div">(props: UseStackClassesProps<Element_1>) => UseStackClassesReturn;
export default useStackClasses;
//# sourceMappingURL=useStackClasses.d.ts.map