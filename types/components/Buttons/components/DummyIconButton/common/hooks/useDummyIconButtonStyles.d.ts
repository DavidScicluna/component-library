import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import type { DummyIconButtonProps } from '../types';
type UseDummyIconButtonStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyIconButtonProps<Element>, 'size'>;
type UseDummyIconButtonStylesReturn = Style;
declare const useDummyIconButtonStyles: <Element_1 extends ElementType = "div">(props: UseDummyIconButtonStylesProps<Element_1>) => UseDummyIconButtonStylesReturn;
export default useDummyIconButtonStyles;
//# sourceMappingURL=useDummyIconButtonStyles.d.ts.map