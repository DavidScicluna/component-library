import type { ElementType } from 'react';
import type { DummyButtonSize, DummyButtonVariant } from '../types';
declare const useDummyButtonContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").DummyButtonProps<Element_1>["color"];
    colorMode: import("../types").DummyButtonProps<Element_1>["colorMode"];
    size: DummyButtonSize;
    variant: DummyButtonVariant;
};
export default useDummyButtonContext;
//# sourceMappingURL=useDummyButtonContext.d.ts.map