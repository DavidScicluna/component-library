import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { BadgeProps } from '../types';
type UseBadgeFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<BadgeProps<Element>, 'size'>;
declare const useBadgeFontSize: <Element_1 extends ElementType = "div">(props: UseBadgeFontSizeProps<Element_1>) => number;
export default useBadgeFontSize;
//# sourceMappingURL=useBadgeFontSize.d.ts.map