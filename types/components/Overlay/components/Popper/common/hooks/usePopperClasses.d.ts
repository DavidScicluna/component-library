import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { PopperProps } from '../types';
type UsePopperClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<PopperProps<Element>, 'color' | 'colorMode' | 'radius'>;
type UsePopperClassesReturn = Record<'popper' | 'arrow', ClassName>;
declare const usePopperClasses: <Element_1 extends ElementType = "div">(props: UsePopperClassesProps<Element_1>) => UsePopperClassesReturn;
export default usePopperClasses;
//# sourceMappingURL=usePopperClasses.d.ts.map