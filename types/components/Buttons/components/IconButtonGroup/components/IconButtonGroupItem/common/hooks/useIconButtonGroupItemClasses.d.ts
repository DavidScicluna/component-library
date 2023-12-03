import { type ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { IconButtonGroupItemProps } from '../types';
type UseIconButtonGroupItemClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<IconButtonGroupItemProps<Element>, 'index' | 'total'>;
type UseIconButtonGroupItemClassesReturn = ClassName;
declare const useIconButtonGroupItemClasses: <Element_1 extends ElementType = "div">(props: UseIconButtonGroupItemClassesProps<Element_1>) => UseIconButtonGroupItemClassesReturn;
export default useIconButtonGroupItemClasses;
//# sourceMappingURL=useIconButtonGroupItemClasses.d.ts.map