import { type ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { IndicatorProps } from '../types';
type UseIndicatorStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<IndicatorProps<Element>, 'offset' | 'placement'>;
type UseIndicatorStylesReturn = Record<'overlay' | 'position', Style>;
declare const useIndicatorStyles: <Element_1 extends ElementType = "div">(props: UseIndicatorStylesProps<Element_1>) => UseIndicatorStylesReturn;
export default useIndicatorStyles;
//# sourceMappingURL=useIndicatorStyles.d.ts.map