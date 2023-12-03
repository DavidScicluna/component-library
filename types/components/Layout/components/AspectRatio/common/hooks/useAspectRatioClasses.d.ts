import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { AspectRatioProps } from '../types';
type UseAspectRatioClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<AspectRatioProps<Element>, 'ratio'>;
type UseAspectRatioClassesReturn = ClassName;
declare const useAspectRatioClasses: <Element_1 extends ElementType = "div">(props: UseAspectRatioClassesProps<Element_1>) => UseAspectRatioClassesReturn;
export default useAspectRatioClasses;
//# sourceMappingURL=useAspectRatioClasses.d.ts.map