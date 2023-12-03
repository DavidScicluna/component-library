import type { ButtonSize, ButtonVariant } from '../types';
declare const useButtonContext: <Element_1 extends "button" = "button">() => {
    color: import("../types").ButtonProps<Element_1>["color"] | undefined;
    colorMode: import("../types").ButtonProps<Element_1>["colorMode"] | undefined;
    size: ButtonSize;
    variant: ButtonVariant;
};
export default useButtonContext;
//# sourceMappingURL=useButtonContext.d.ts.map