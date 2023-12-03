import type { ElementType } from 'react';
import type { ThemeSpacing } from '@common/types';
import type { DummyTabsAlign, DummyTabsOrientation, DummyTabsSize } from '../types';
declare const useDummyTabsContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").DummyTabsProps<Element_1>["color"];
    colorMode: import("../types").DummyTabsProps<Element_1>["colorMode"];
    align: DummyTabsAlign;
    id: string | import("../types").DummyTabsProps<Element_1>["id"];
    index: number;
    isAnimated: boolean;
    isFitted: boolean;
    orientation: DummyTabsOrientation;
    size: DummyTabsSize;
    spacing: ThemeSpacing;
};
export default useDummyTabsContext;
//# sourceMappingURL=useDummyTabsContext.d.ts.map