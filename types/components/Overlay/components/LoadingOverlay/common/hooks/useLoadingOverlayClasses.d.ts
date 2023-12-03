import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { LoadingOverlayProps } from '../types';
type UseLoadingOverlayClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<LoadingOverlayProps<Element>, 'blur' | 'blurType' | 'radius' | 'hasGlass'>;
type UseLoadingOverlayClassesReturn = Record<'container' | 'overlay', ClassName>;
declare const useLoadingOverlayClasses: <Element_1 extends ElementType = "div">(props: UseLoadingOverlayClassesProps<Element_1>) => UseLoadingOverlayClassesReturn;
export default useLoadingOverlayClasses;
//# sourceMappingURL=useLoadingOverlayClasses.d.ts.map