import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { SpaceProps } from '../types';
type UseSpaceClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<SpaceProps<Element>, 'width' | 'height'>;
type UseSpaceClassesReturn = ClassName;
declare const useSpaceClasses: <Element_1 extends ElementType = "div">(props: UseSpaceClassesProps<Element_1>) => UseSpaceClassesReturn;
export default useSpaceClasses;
//# sourceMappingURL=useSpaceClasses.d.ts.map