import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { ProgressProps } from '../types';
type UseProgressStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<ProgressProps<Element>, 'variant'>;
type UseProgressStylesReturn = Style;
declare const useProgressStyles: <Element_1 extends ElementType = "div">(props: UseProgressStylesProps<Element_1>) => UseProgressStylesReturn;
export default useProgressStyles;
//# sourceMappingURL=useProgressStyles.d.ts.map