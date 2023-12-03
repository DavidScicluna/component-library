import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { ProgressSectionProps } from '../types';
type UseProgressSectionClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<ProgressSectionProps<Element>, 'color' | 'colorMode'>;
type UseProgressSectionClassesReturn = ClassName;
declare const useProgressSectionClasses: <Element_1 extends ElementType = "div">(props: UseProgressSectionClassesProps<Element_1>) => UseProgressSectionClassesReturn;
export default useProgressSectionClasses;
//# sourceMappingURL=useProgressSectionClasses.d.ts.map