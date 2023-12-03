import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { PushableOverlayProps } from '../types';
type UsePushableOverlayClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<PushableOverlayProps<Element>, 'color' | 'colorMode' | 'isActive' | 'isDisabled' | 'isFixed' | 'isOutlined' | 'isPushable' | 'radius' | 'variant'>;
type UsePushableOverlayClassesReturn = ClassName;
declare const usePushableOverlayClasses: <Element_1 extends ElementType = "div">(props: UsePushableOverlayClassesProps<Element_1>) => UsePushableOverlayClassesReturn;
export default usePushableOverlayClasses;
//# sourceMappingURL=usePushableOverlayClasses.d.ts.map