import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { LinearGradientProps } from '../types';
type UseLinearGradientClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<LinearGradientProps<Element>, 'direction' | 'from' | 'middle' | 'to'>;
type UseLinearGradientClassesReturn = ClassName;
declare const useLinearGradientClasses: <Element_1 extends ElementType = "div">(props: UseLinearGradientClassesProps<Element_1>) => UseLinearGradientClassesReturn;
export default useLinearGradientClasses;
//# sourceMappingURL=useLinearGradientClasses.d.ts.map