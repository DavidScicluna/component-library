import { type ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { PositionOverlayProps } from '../types';
type UsePositionOverlayStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<PositionOverlayProps<Element>, 'color' | 'colorMode' | 'backdropAmount' | 'placement' | 'hasBackground'>;
type UsePositionOverlayStylesReturn = Record<'overlay' | 'position', Style>;
declare const usePositionOverlayStyles: <Element_1 extends ElementType = "div">(props: UsePositionOverlayStylesProps<Element_1>) => UsePositionOverlayStylesReturn;
export default usePositionOverlayStyles;
//# sourceMappingURL=usePositionOverlayStyles.d.ts.map