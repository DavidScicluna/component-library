import { type ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { BoxOtherProps, BoxProps } from '../types';
type UseBoxStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<BoxProps<Element>, keyof BoxOtherProps>;
type UseBoxStylesReturn = Style;
declare const useBoxStyles: <Element_1 extends ElementType = "div">(props: UseBoxStylesProps<Element_1>) => UseBoxStylesReturn;
export default useBoxStyles;
//# sourceMappingURL=useBoxStyles.d.ts.map