import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { DummyButtonProps } from '../types';
type UseDummyButtonFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<DummyButtonProps<Element>, 'size'>;
declare const useDummyButtonFontSize: <Element_1 extends ElementType = "div">(props: UseDummyButtonFontSizeProps<Element_1>) => number;
export default useDummyButtonFontSize;
//# sourceMappingURL=useDummyButtonFontSize.d.ts.map