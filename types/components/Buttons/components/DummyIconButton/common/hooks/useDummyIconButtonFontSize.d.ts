import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { DummyIconButtonProps } from '../types';
type UseDummyIconButtonFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyIconButtonProps<Element>, 'size'>;
declare const useDummyIconButtonFontSize: <Element_1 extends ElementType = "div">(props: UseDummyIconButtonFontSizeProps<Element_1>) => number;
export default useDummyIconButtonFontSize;
//# sourceMappingURL=useDummyIconButtonFontSize.d.ts.map