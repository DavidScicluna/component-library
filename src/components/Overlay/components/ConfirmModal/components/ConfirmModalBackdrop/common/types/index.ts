import type {
	BackdropOverlayElement,
	BackdropOverlayProps,
	BackdropOverlayRef
} from '@components/Overlay/components/BackdropOverlay/common/types';

export type ConfirmModalBackdropElement = BackdropOverlayElement;

export type ConfirmModalBackdropProps<Element extends ConfirmModalBackdropElement> = BackdropOverlayProps<Element>;

export type ConfirmModalBackdropRef<Element extends ConfirmModalBackdropElement> = BackdropOverlayRef<Element>;
