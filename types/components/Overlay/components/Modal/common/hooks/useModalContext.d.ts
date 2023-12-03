/// <reference types="react" />
import type { ThemeSpacing } from '@common/types';
import type { ModalSize } from '../types';
declare const useModalContext: <Element_1 extends "dialog" = "dialog">() => {
    color: import("../types").ModalProps<Element_1>["color"] | undefined;
    colorMode: import("../types").ModalProps<Element_1>["colorMode"] | undefined;
    id: string;
    isOpen: boolean;
    onClose: (() => void) & import("react").ReactEventHandler<HTMLDialogElement>;
    size: ModalSize;
    spacing: ThemeSpacing;
};
export default useModalContext;
//# sourceMappingURL=useModalContext.d.ts.map