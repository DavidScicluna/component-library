import type { ElementType } from 'react';
import type { ThemeSpacing } from '@common/types';
import type { TabsAlign, TabsOrientation, TabsSize } from '../types';
declare const useTabsContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").TabsProps<Element_1>["color"];
    colorMode: import("../types").TabsProps<Element_1>["colorMode"];
    align: TabsAlign;
    id: string | import("../types").TabsProps<Element_1>["id"];
    index: number;
    isDisabled: boolean;
    isFitted: boolean;
    onChange: (() => undefined) | import("../types").TabsProps<Element_1>["onChange"];
    orientation: TabsOrientation;
    size: TabsSize;
    spacing: ThemeSpacing;
};
export default useTabsContext;
//# sourceMappingURL=useTabsContext.d.ts.map