import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { BackdropOverlayProps } from '../types';
type UseBackdropOverlayClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<BackdropOverlayProps<Element>, 'blur' | 'blurType' | 'radius'>;
type UseBackdropOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;
declare const useBackdropOverlayClasses: <Element_1 extends ElementType = "div">(props: UseBackdropOverlayClassesProps<Element_1>) => UseBackdropOverlayClassesReturn;
export default useBackdropOverlayClasses;
//# sourceMappingURL=useBackdropOverlayClasses.d.ts.map