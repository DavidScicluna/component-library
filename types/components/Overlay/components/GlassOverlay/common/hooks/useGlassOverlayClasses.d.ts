import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { GlassOverlayProps } from '../types';
type UseGlassOverlayClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<GlassOverlayProps<Element>, 'blur' | 'blurType' | 'radius'>;
type UseGlassOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;
declare const useGlassOverlayClasses: <Element_1 extends ElementType = "div">(props: UseGlassOverlayClassesProps<Element_1>) => UseGlassOverlayClassesReturn;
export default useGlassOverlayClasses;
//# sourceMappingURL=useGlassOverlayClasses.d.ts.map