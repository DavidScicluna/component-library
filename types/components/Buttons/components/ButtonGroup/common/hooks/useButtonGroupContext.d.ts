import type { ElementType } from 'react';
import type { FlexDirectionClass } from '@common/types';
declare const useButtonGroupContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").ButtonGroupProps<Element_1>["color"];
    colorMode: import("../types").ButtonGroupProps<Element_1>["colorMode"];
    direction: FlexDirectionClass;
    isAttached: boolean;
    isCompact: import("../types").ButtonGroupProps<Element_1>["isCompact"];
    isDisabled: import("../types").ButtonGroupProps<Element_1>["isDisabled"];
    isFullWidth: import("../types").ButtonGroupProps<Element_1>["isFullWidth"];
    isRound: import("../types").ButtonGroupProps<Element_1>["isRound"];
    size: import("../types").ButtonGroupProps<Element_1>["size"];
    variant: import("../types").ButtonGroupProps<Element_1>["variant"];
};
export default useButtonGroupContext;
//# sourceMappingURL=useButtonGroupContext.d.ts.map