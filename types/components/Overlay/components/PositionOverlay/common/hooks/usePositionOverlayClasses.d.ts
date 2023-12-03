import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { PositionOverlayProps } from '../types';
type UsePositionOverlayClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<PositionOverlayProps<Element>, 'blur' | 'blurType' | 'radius' | 'hasGlass'>;
type UsePositionOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;
declare const usePositionOverlayClasses: <Element_1 extends ElementType = "div">(props: UsePositionOverlayClassesProps<Element_1>) => UsePositionOverlayClassesReturn;
export default usePositionOverlayClasses;
//# sourceMappingURL=usePositionOverlayClasses.d.ts.map