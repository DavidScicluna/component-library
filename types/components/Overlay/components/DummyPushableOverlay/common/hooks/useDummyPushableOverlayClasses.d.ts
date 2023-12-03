import { type ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { DummyPushableOverlayProps } from '../types';
type UseDummyPushableOverlayClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyPushableOverlayProps<Element>, 'colorMode' | 'isAnimated' | 'isOutlined' | 'radius' | 'variant'>;
type UseDummyPushableOverlayClassesReturn = ClassName;
declare const useDummyPushableOverlayClasses: <Element_1 extends ElementType = "div">(props: UseDummyPushableOverlayClassesProps<Element_1>) => UseDummyPushableOverlayClassesReturn;
export default useDummyPushableOverlayClasses;
//# sourceMappingURL=useDummyPushableOverlayClasses.d.ts.map