import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { TabsProps } from '../types';
type UseTabsTabFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<TabsProps<Element>, 'size'>;
declare const useTabsTabFontSize: <Element_1 extends ElementType = "div">(props: UseTabsTabFontSizeProps<Element_1>) => number;
export default useTabsTabFontSize;
//# sourceMappingURL=useTabsTabFontSize.d.ts.map