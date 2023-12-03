import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { GridItemProps } from '../types';
type UseGridItemClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<GridItemProps<Element>, 'alignSelf' | 'columnSpan' | 'columnStart' | 'columnEnd' | 'justifySelf' | 'rowSpan' | 'rowStart' | 'rowEnd' | 'zIndex'>;
type UseGridItemClassesReturn = ClassName;
declare const useGridItemClasses: <Element_1 extends ElementType = "div">(props: UseGridItemClassesProps<Element_1>) => UseGridItemClassesReturn;
export default useGridItemClasses;
//# sourceMappingURL=useGridItemClasses.d.ts.map