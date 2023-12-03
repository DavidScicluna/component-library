import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { GridProps } from '../types';
type UseGridClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<GridProps<Element>, 'alignContent' | 'alignItems' | 'autoColumns' | 'autoFlow' | 'autoRows' | 'columnSpacing' | 'justifyContent' | 'justifyItems' | 'rowSpacing' | 'templateColumns' | 'templateRows' | 'spacing'>;
type UseGridClassesReturn = ClassName;
declare const useGridClasses: <Element_1 extends ElementType = "div">(props: UseGridClassesProps<Element_1>) => UseGridClassesReturn;
export default useGridClasses;
//# sourceMappingURL=useGridClasses.d.ts.map