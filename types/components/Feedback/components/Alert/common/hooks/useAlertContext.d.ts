import type { ElementType } from 'react';
import type { AlertStatus, AlertVariant } from '../types';
declare const useAlertContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").AlertProps<Element_1>["color"];
    colorMode: import("../types").AlertProps<Element_1>["colorMode"];
    status: AlertStatus;
    variant: AlertVariant;
};
export default useAlertContext;
//# sourceMappingURL=useAlertContext.d.ts.map