import type {
	ModalDefaultElement,
	ModalElement,
	ModalProps,
	ModalRef
} from '@components/Overlay/components/Modal/common/types';

type PickedModalProps =
	| 'children'
	| 'className'
	| 'renderBackdrop'
	| 'closeOnEsc'
	| 'closeOnOverlayClick'
	| 'hasBackdrop'
	| 'onEsc'
	| 'onOverlayClick';

export type ModalContainerProps<Element extends ModalElement = ModalDefaultElement> = Pick<
	ModalProps<Element>,
	PickedModalProps
>;
export type ModalContainerRef<Element extends ModalElement = ModalDefaultElement> = ModalRef<Element>;
