import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { BadgeProps } from '../types';
type UseBadgeClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<BadgeProps<Element>, 'isCompact' | 'isFullWidth' | 'isRound' | 'isUppercase' | 'size' | 'variant'>;
type UseBadgeClassesReturn = ClassName;
declare const useBadgeClasses: <Element_1 extends ElementType = "div">(props: UseBadgeClassesProps<Element_1>) => UseBadgeClassesReturn;
export default useBadgeClasses;
//# sourceMappingURL=useBadgeClasses.d.ts.map