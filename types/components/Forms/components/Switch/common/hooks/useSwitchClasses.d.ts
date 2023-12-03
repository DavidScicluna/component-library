import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { SwitchProps } from '../types';
type UseSwitchClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<SwitchProps<Element>, 'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'>;
type UseSwitchClassesReturn = ClassName;
declare const useSwitchClasses: <Element_1 extends ElementType = "div">(props: UseSwitchClassesProps<Element_1>) => UseSwitchClassesReturn;
export default useSwitchClasses;
//# sourceMappingURL=useSwitchClasses.d.ts.map