import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { CheckboxProps } from '../types';
type UseCheckboxClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<CheckboxProps<Element>, 'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'>;
type UseCheckboxClassesReturn = ClassName;
declare const useCheckboxClasses: <Element_1 extends ElementType = "div">(props: UseCheckboxClassesProps<Element_1>) => UseCheckboxClassesReturn;
export default useCheckboxClasses;
//# sourceMappingURL=useCheckboxClasses.d.ts.map