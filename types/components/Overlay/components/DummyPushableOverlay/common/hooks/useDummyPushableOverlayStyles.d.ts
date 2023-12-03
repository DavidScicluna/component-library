import { type ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { DummyPushableOverlayProps } from '../types';
type UseDummyPushableOverlayStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyPushableOverlayProps<Element>, 'color' | 'colorMode' | 'variant'>;
type UseDummyPushableOverlayStylesReturn = Style;
declare const useDummyPushableOverlayStyles: <Element_1 extends ElementType = "div">(props: UseDummyPushableOverlayStylesProps<Element_1>) => UseDummyPushableOverlayStylesReturn;
export default useDummyPushableOverlayStyles;
//# sourceMappingURL=useDummyPushableOverlayStyles.d.ts.map