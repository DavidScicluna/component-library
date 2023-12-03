import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { SimpleGridProps } from '../types';
type UseSimpleGridClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<SimpleGridProps<Element>, 'columns' | 'spacing'>;
type UseSimpleGridClassesReturn = ClassName;
declare const useSimpleGridClasses: <Element_1 extends ElementType = "div">(props: UseSimpleGridClassesProps<Element_1>) => UseSimpleGridClassesReturn;
export default useSimpleGridClasses;
//# sourceMappingURL=useSimpleGridClasses.d.ts.map