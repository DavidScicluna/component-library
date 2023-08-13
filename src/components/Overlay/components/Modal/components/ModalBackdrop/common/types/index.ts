import type {
	BackdropOverlayElement,
	BackdropOverlayProps,
	BackdropOverlayRef
} from '@components/Overlay/components/BackdropOverlay/common/types';

export type ModalBackdropElement = BackdropOverlayElement;

export type ModalBackdropProps<Element extends ModalBackdropElement> = BackdropOverlayProps<Element>;

export type ModalBackdropRef<Element extends ModalBackdropElement> = BackdropOverlayRef<Element>;
