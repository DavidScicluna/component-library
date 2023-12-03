import { type ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { AlertProps } from '../types';
type UseAlertClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<AlertProps<Element>, 'color' | 'colorMode' | 'status'>;
type UseAlertClassesReturn = ClassName;
declare const useAlertClasses: <Element_1 extends ElementType = "div">(props: UseAlertClassesProps<Element_1>) => UseAlertClassesReturn;
export default useAlertClasses;
//# sourceMappingURL=useAlertClasses.d.ts.map