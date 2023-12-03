import type { ElementType } from 'react';
import type { DummyBadgeVariant } from '../types';
declare const useDummyBadgeContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").DummyBadgeProps<Element_1>["color"];
    colorMode: import("../types").DummyBadgeProps<Element_1>["colorMode"];
    size: import("@common/types").ThemeFontSize;
    variant: DummyBadgeVariant;
};
export default useDummyBadgeContext;
//# sourceMappingURL=useDummyBadgeContext.d.ts.map