import type { ElementType, ReactNode } from 'react';

import type { PickFrom, ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { IconButtonProps } from '@components/Buttons/components/IconButton';

export type ConfirmModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ConfirmModalRenderTriggerProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = {
	/**
	 * If `true`, the modal will be open
	 */
	isOpen: boolean;
	/**
	 * Callback invoked to open the modal
	 */
	onOpen: () => void;
} & Pick<ConfirmModalProps<Element>, 'color' | 'colorMode'>;
export type ConfirmModalRenderBackdropProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = Pick<
	ConfirmModalProps<Element>,
	'color' | 'colorMode'
>;
export type ConfirmModalRenderCancelProps = Pick<
	IconButtonProps,
	'color' | 'colorMode' | 'onClick' | 'size' | 'variant'
>;

export type ConfirmModalDefaultElement = 'dialog';
export type ConfirmModalElement = PickFrom<ElementType, 'dialog'>;

type ConfirmModalOtherProps = ThemeAppAppearanceProps & {
	renderTrigger: (props: ConfirmModalRenderTriggerProps) => ReactNode;
	renderBackdrop?: (props: ConfirmModalRenderBackdropProps) => ReactNode;
	renderCancel?: (props: ConfirmModalRenderCancelProps) => ReactNode;
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
	size?: ResponsiveValue<ConfirmModalSize>;
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type ConfirmModalProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = Omit<
	BoxProps<Element, ConfirmModalOtherProps>,
	keyof BoxOtherProps
>;
export type ConfirmModalRef<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = BoxRef<Element>;

export type ConfirmModalContext<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = {
	/**
	 * If `true`, the ConfirmModal will be open
	 */
	isOpen: boolean;
} & Pick<ConfirmModalProps<Element>, 'color' | 'colorMode' | 'onClose' | 'size' | 'spacing'>;
