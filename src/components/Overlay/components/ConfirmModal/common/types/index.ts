import type { ReactNode } from 'react';

import type {
	PickFrom,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeFontSize,
	ThemeSpacing
} from '@common/types';

import type { TransitionKey } from '@components/Animation';
import type { BoxProps, BoxRef } from '@components/Box';

export type ConfirmModalDefaultElement = 'dialog';
export type ConfirmModalElement = Extract<PolymorphicElementType, 'dialog'>;

export type ConfirmModalSize = PickFrom<ThemeFontSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export type ConfirmModalRenderTriggerProps<Element extends ConfirmModalElement> = {
	/**
	 * If `true`, the modal will be open
	 */
	isOpen: boolean;
	/**
	 * Callback invoked to open the modal
	 */
	onOpen: () => void;
} & Pick<ConfirmModalProps<Element>, 'color' | 'colorMode'>;
export type ConfirmModalRenderBackdropProps<Element extends ConfirmModalElement> = Pick<
	ConfirmModalProps<Element>,
	'color' | 'colorMode'
>;
export type ConfirmModalRenderCancelProps<Element extends ConfirmModalElement> = Pick<
	ConfirmModalProps<Element>,
	'color' | 'colorMode'
>;

type ConfirmModalOtherProps<Element extends ConfirmModalElement> = ThemeAppAppearanceProps & {
	renderTrigger?: (props: ConfirmModalRenderTriggerProps<Element>) => ReactNode;
	renderBackdrop?: (props: ConfirmModalRenderBackdropProps<Element>) => ReactNode;
	renderCancel?: (props: ConfirmModalRenderCancelProps<Element>) => ReactNode;
	/**
	 * If `true`, the modal will close when the Esc key is pressed
	 *
	 * @default true
	 */
	closeOnEsc?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the modal will close when the overlay is clicked
	 *
	 * @default true
	 */
	closeOnOverlayClick?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the modal will render without a backdrop behind the modal
	 *
	 * @default true
	 */
	hasBackdrop?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the modal will be open
	 */
	isOpen?: ResponsiveValue<boolean>;
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
	/**
	 * Transition name for the modal
	 *
	 * @default 'fade'
	 */
	transition?: ResponsiveValue<TransitionKey>;
};

export type ConfirmModalProps<Element extends ConfirmModalElement> = BoxProps<Element, ConfirmModalOtherProps<Element>>;

export type ConfirmModalRef<Element extends ConfirmModalElement> = BoxRef<Element>;

type PickedConfirmModalProps = 'color' | 'colorMode' | 'isOpen' | 'onClose' | 'size' | 'spacing';

export type ConfirmModalContext<Element extends ConfirmModalElement> = {
	id: string;
} & Pick<ConfirmModalProps<Element>, PickedConfirmModalProps>;
