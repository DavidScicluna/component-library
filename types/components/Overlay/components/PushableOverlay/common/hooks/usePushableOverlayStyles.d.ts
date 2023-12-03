import { type ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { PushableOverlayProps } from '../types';
type UsePushableOverlayStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<PushableOverlayProps<Element>, 'color' | 'colorMode' | 'isActive' | 'isDisabled' | 'isFixed' | 'isPushable' | 'variant'>;
type UsePushableOverlayStylesReturn = Style;
declare const usePushableOverlayStyles: <Element_1 extends ElementType = "div">(props: UsePushableOverlayStylesProps<Element_1>) => UsePushableOverlayStylesReturn;
export default usePushableOverlayStyles;
//# sourceMappingURL=usePushableOverlayStyles.d.ts.map