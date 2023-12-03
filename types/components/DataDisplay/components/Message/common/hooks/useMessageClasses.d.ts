import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { MessageProps } from '../types';
type UseMessageClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<MessageProps<Element>, 'color' | 'colorMode' | 'radius' | 'size' | 'variant'>;
type UseMessageClassesReturn = ClassName;
declare const useMessageClasses: <Element_1 extends ElementType = "div">(props: UseMessageClassesProps<Element_1>) => UseMessageClassesReturn;
export default useMessageClasses;
//# sourceMappingURL=useMessageClasses.d.ts.map