import type { ElementType, ReactNode } from 'react';

import type { PickFrom, ResponsiveValue } from '@common/types';
import type { CommonAppThemeProps, Space } from '@common/types/theme';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box/common/types';

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';

export type ModalRenderTriggerProps = Pick<ModalProps, 'color' | 'colorMode'> & {
	/**
	 * If `true`, the modal will be open
	 */
	isOpen: boolean;
	/**
	 * Callback invoked to open the modal
	 */
	onOpen: () => void;
	// /**
	//  * Callback invoked to close the modal
	//  */
	// onClose: () => void;
};
export type ModalRenderBackdropProps = Pick<ModalProps, 'color' | 'colorMode'>;

export type ModalDefaultElement = 'dialog';
export type ModalElement = PickFrom<ElementType, 'dialog'>;

type ModalOtherProps = CommonAppThemeProps & {
	renderTrigger: (props: ModalRenderTriggerProps) => ReactNode;
	renderBackdrop?: (props: ModalRenderBackdropProps) => ReactNode;
	/**
	 * If `true`, the modal will close when the Esc key is pressed
	 * @default true
	 */
	closeOnEsc?: boolean;
	/**
	 * If `true`, the modal will close when the overlay is clicked
	 * @default true
	 */
	closeOnOverlayClick?: boolean;
	/**
	 * If `true`, the modal will render without a backdrop behind the modal
	 * @default true
	 */
	hasBackdrop?: boolean;
	/**
	 * Callback invoked to close the modal
	 */
	onClose?: () => void;
	/**
	 * Callback fired when all exiting nodes have completed animating out
	 */
	onCloseComplete?: () => void;
	/**
	 * Callback fired when the escape key is pressed and focus is within modal
	 */
	onEsc?: () => void;
	/**
	 * Callback fired when the overlay is clicked
	 */
	onOverlayClick?: () => void;
	/**
	 * Callback invoked to open the modal
	 */
	onOpen?: () => void;
	/**
	 * The size of the Modal
	 * @default "xl"
	 */
	size?: ResponsiveValue<ModalSize>;
	spacing?: ResponsiveValue<Space>;
};

export type ModalProps<Element extends ModalElement = ModalDefaultElement> = Omit<
	BoxProps<Element, ModalOtherProps>,
	keyof BoxOtherProps
>;
export type ModalRef<Element extends ModalElement = ModalDefaultElement> = BoxRef<Element>;

export type ModalContext<Element extends ModalElement = ModalDefaultElement> = {
	/**
	 * If `true`, the modal will be open
	 */
	isOpen: boolean;
} & Pick<ModalProps<Element>, 'color' | 'colorMode' | 'onClose' | 'size' | 'spacing'>;
