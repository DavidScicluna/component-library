import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { BackdropOverlayProps } from '../types';
type UseBackdropOverlayStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<BackdropOverlayProps<Element>, 'color' | 'colorMode' | 'amount'>;
type UseBackdropOverlayStylesReturn = Style;
declare const useBackdropOverlayStyles: <Element_1 extends ElementType = "div">(props: UseBackdropOverlayStylesProps<Element_1>) => UseBackdropOverlayStylesReturn;
export default useBackdropOverlayStyles;
//# sourceMappingURL=useBackdropOverlayStyles.d.ts.map