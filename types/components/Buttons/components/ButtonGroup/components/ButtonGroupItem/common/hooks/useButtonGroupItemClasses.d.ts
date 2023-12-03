import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { ButtonGroupItemProps } from '../types';
type UseButtonGroupItemClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<ButtonGroupItemProps<Element>, 'index' | 'total'>;
type UseButtonGroupItemClassesReturn = ClassName;
declare const useButtonGroupItemClasses: <Element_1 extends ElementType = "div">(props: UseButtonGroupItemClassesProps<Element_1>) => UseButtonGroupItemClassesReturn;
export default useButtonGroupItemClasses;
//# sourceMappingURL=useButtonGroupItemClasses.d.ts.map