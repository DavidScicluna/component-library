import type { ElementType } from 'react';
import type { ThemeRadius } from '@common/types';
import type { ProgressVariant } from '../types';
declare const useProgressContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").ProgressProps<Element_1>["color"];
    colorMode: import("../types").ProgressProps<Element_1>["colorMode"];
    isIndeterminate: boolean;
    max: number;
    min: number;
    radius: ThemeRadius;
    variant: ProgressVariant;
};
export default useProgressContext;
//# sourceMappingURL=useProgressContext.d.ts.map