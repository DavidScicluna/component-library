import type {
	ConfirmModalDefaultElement,
	ConfirmModalElement,
	ConfirmModalProps,
	ConfirmModalRef
} from '@components/Overlay/components/ConfirmModal/common/types';

type PickedConfirmModalProps =
	| 'children'
	| 'className'
	| 'renderBackdrop'
	| 'closeOnEsc'
	| 'closeOnOverlayClick'
	| 'hasBackdrop'
	| 'onEsc'
	| 'onOverlayClick';

export type ConfirmModalContainerProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = Pick<
	ConfirmModalProps<Element>,
	PickedConfirmModalProps
>;
export type ConfirmModalContainerRef<Element extends ConfirmModalElement = ConfirmModalDefaultElement> =
	ConfirmModalRef<Element>;
