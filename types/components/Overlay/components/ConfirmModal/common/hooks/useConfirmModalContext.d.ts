/// <reference types="react" />
import type { ThemeSpacing } from '@common/types';
import type { ConfirmModalSize } from '../types';
declare const useConfirmModalContext: <Element_1 extends "dialog" = "dialog">() => {
    color: import("../types").ConfirmModalProps<Element_1>["color"] | undefined;
    colorMode: import("../types").ConfirmModalProps<Element_1>["colorMode"] | undefined;
    id: string;
    isOpen: boolean;
    onClose: (() => void) & import("react").ReactEventHandler<HTMLDialogElement>;
    size: ConfirmModalSize;
    spacing: ThemeSpacing;
};
export default useConfirmModalContext;
//# sourceMappingURL=useConfirmModalContext.d.ts.map