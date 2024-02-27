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

export type ModalDefaultElement = 'dialog';
export type ModalElement = Extract<PolymorphicElementType, 'dialog'>;

export type ModalSize =
	| PickFrom<ThemeFontSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'>
	| 'full';

export type ModalRenderTriggerProps<Element extends ModalElement> = {
	/**
	 * If `true`, the modal will be open
	 */
	isOpen: boolean;
	/**
	 * Callback invoked to open the modal
	 */
	onOpen: () => void;
} & Pick<ModalProps<Element>, 'color' | 'colorMode'>;
export type ModalRenderBackdropProps<Element extends ModalElement> = Pick<ModalProps<Element>, 'color' | 'colorMode'>;

type ModalOtherProps<Element extends ModalElement> = ThemeAppAppearanceProps & {
	renderTrigger?: (props: ModalRenderTriggerProps<Element>) => ReactNode;
	renderBackdrop?: (props: ModalRenderBackdropProps<Element>) => ReactNode;
	/**
	 * If `true`, the modal will close when the Esc key is pressed
	 * @default true
	 */
	closeOnEsc?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the modal will close when the overlay is clicked
	 * @default true
	 */
	closeOnOverlayClick?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the modal will render without a backdrop behind the modal
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
	size?: ResponsiveValue<ModalSize>;
	spacing?: ResponsiveValue<ThemeSpacing>;
	/**
	 * Transition name for the modal
	 *
	 * @default 'fade'
	 */
	transition?: ResponsiveValue<TransitionKey>;
};
export type ModalProps<Element extends ModalElement> = BoxProps<Element, ModalOtherProps<Element>>;

export type ModalRef<Element extends ModalElement> = BoxRef<Element>;

type PickedModalProps = 'color' | 'colorMode' | 'isOpen' | 'onClose' | 'size' | 'spacing';
export type ModalContext<Element extends ModalElement> = Pick<ModalProps<Element>, PickedModalProps> & {
	id: string;
};
