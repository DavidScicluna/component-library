import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { GlassOverlayProps } from '../types';
type UseGlassOverlayStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<GlassOverlayProps<Element>, 'color' | 'colorMode' | 'backdropAmount' | 'hasBackground'>;
type UseGlassOverlayStylesReturn = Style;
declare const useGlassOverlayStyles: <Element_1 extends ElementType = "div">(props: UseGlassOverlayStylesProps<Element_1>) => UseGlassOverlayStylesReturn;
export default useGlassOverlayStyles;
//# sourceMappingURL=useGlassOverlayStyles.d.ts.map