import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { DummyBadgeProps } from '../types';
type UseDummyBadgeFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyBadgeProps<Element>, 'size'>;
declare const useDummyBadgeFontSize: <Element_1 extends ElementType = "div">(props: UseDummyBadgeFontSizeProps<Element_1>) => number;
export default useDummyBadgeFontSize;
//# sourceMappingURL=useDummyBadgeFontSize.d.ts.map