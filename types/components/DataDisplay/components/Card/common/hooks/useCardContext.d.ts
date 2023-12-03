import type { ElementType } from 'react';
import type { ThemeSpacing } from '@common/types';
import type { CardVariant } from '../types';
declare const useCardContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").CardProps<Element_1>["color"];
    colorMode: import("../types").CardProps<Element_1>["colorMode"];
    isCollapsable: boolean;
    isDisabled: boolean;
    isDivisible: boolean;
    isHovering: boolean;
    isOpen: boolean;
    onHover: import("../../../../../../common/hooks/useBoolean").UseBooleanToggles;
    spacing: ThemeSpacing;
    variant: CardVariant;
};
export default useCardContext;
//# sourceMappingURL=useCardContext.d.ts.map