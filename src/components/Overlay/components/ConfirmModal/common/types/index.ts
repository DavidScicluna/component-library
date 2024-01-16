import type { ReactNode } from 'react';

import type {
	PickFrom,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeFontSize,
	ThemeSpacing
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type ConfirmModalDefaultElement = 'dialog';
export type ConfirmModalElement = Extract<PolymorphicElementType, 'dialog'>;

export type ConfirmModalSize = PickFrom<ThemeFontSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export type ConfirmModalRenderTriggerProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> =
	BoxProps & {
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
export type ConfirmModalRenderCancelProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = Pick<
	ConfirmModalProps<Element>,
	'color' | 'colorMode'
>;

type ConfirmModalOtherProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> =
	ThemeAppAppearanceProps & {
		renderTrigger: (props: ConfirmModalRenderTriggerProps<Element>) => ReactNode;
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
	BoxProps<Element, ConfirmModalOtherProps<Element>>,
	keyof BoxOtherProps
>;
export type ConfirmModalRef<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = BoxRef<Element>;

type PickedConfirmModalProps = 'color' | 'colorMode' | 'id' | 'onClose' | 'size' | 'spacing';

export type ConfirmModalContext = Pick<ConfirmModalProps, PickedConfirmModalProps> & {
	/**
	 * If `true`, the ConfirmModal will be open
	 */
	isOpen: boolean;
};
