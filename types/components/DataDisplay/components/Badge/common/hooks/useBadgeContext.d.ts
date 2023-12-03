import type { ElementType } from 'react';
import type { BadgeVariant } from '../types';
declare const useBadgeContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").BadgeProps<Element_1>["color"];
    colorMode: import("../types").BadgeProps<Element_1>["colorMode"];
    size: import("@common/types").ThemeFontSize;
    variant: BadgeVariant;
};
export default useBadgeContext;
//# sourceMappingURL=useBadgeContext.d.ts.map