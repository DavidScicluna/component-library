import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type {
	ConfirmModalDefaultElement,
	ConfirmModalElement,
	ConfirmModalProps
} from '@components/Overlay/components/ConfirmModal/common/types';

type PickedConfirmModalProps =
	| 'renderBackdrop'
	| 'renderCancel'
	| 'closeOnEsc'
	| 'closeOnOverlayClick'
	| 'hasBackdrop'
	| 'onEsc'
	| 'onOverlayClick';
type ConfirmModalContainerOtherProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = Pick<
	ConfirmModalProps<Element>,
	PickedConfirmModalProps
>;

export type ConfirmModalContainerProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = Omit<
	BoxProps<Element, ConfirmModalContainerOtherProps>,
	keyof BoxOtherProps
>;
export type ConfirmModalContainerRef<Element extends ConfirmModalElement = ConfirmModalDefaultElement> =
	BoxRef<Element>;
