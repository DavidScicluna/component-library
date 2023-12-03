import type { ElementType } from 'react';
import type { ThemeSpacing } from '@common/types';
declare const useFormControlContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").FormControlProps<Element_1>["color"];
    colorMode: import("../types").FormControlProps<Element_1>["colorMode"];
    id: string | import("../types").FormControlProps<Element_1>["id"];
    hasFormControl: import("@common/types").ResponsiveValue<boolean>;
    isDisabled: boolean;
    isError: boolean;
    isFocused: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    isSuccess: boolean;
    isWarning: boolean;
    size: import("../../../..").FormsCommonSize;
    spacing: ThemeSpacing;
};
export default useFormControlContext;
//# sourceMappingURL=useFormControlContext.d.ts.map