import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { RadioProps } from '../types';
type UseRadioClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<RadioProps<Element>, 'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'>;
type UseRadioClassesReturn = ClassName;
declare const useRadioClasses: <Element_1 extends ElementType = "div">(props: UseRadioClassesProps<Element_1>) => UseRadioClassesReturn;
export default useRadioClasses;
//# sourceMappingURL=useRadioClasses.d.ts.map