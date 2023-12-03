import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { LoadingOverlayProps } from '../types';
type UseLoadingOverlayStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<LoadingOverlayProps<Element>, 'color' | 'colorMode' | 'backdropAmount' | 'hasBackground'>;
type UseLoadingOverlayStylesReturn = Style;
declare const useLoadingOverlayStyles: <Element_1 extends ElementType = "div">(props: UseLoadingOverlayStylesProps<Element_1>) => UseLoadingOverlayStylesReturn;
export default useLoadingOverlayStyles;
//# sourceMappingURL=useLoadingOverlayStyles.d.ts.map