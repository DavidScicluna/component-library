import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { GridProps } from '../types';
type UseGridStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<GridProps<Element>, 'templateColumns' | 'templateRows'>;
type UseGridStylesReturn = Style;
declare const useGridStyles: <Element_1 extends ElementType = "div">(props: UseGridStylesProps<Element_1>) => UseGridStylesReturn;
export default useGridStyles;
//# sourceMappingURL=useGridStyles.d.ts.map