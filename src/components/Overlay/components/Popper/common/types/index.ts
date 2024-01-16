import type { ReactNode } from 'react';

import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeRadius
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type PopperPlacement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'right'
	| 'right-start'
	| 'right-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end';

export type PopperRenderTriggerProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps & {
	/**
	 * If `true`, the modal will be open
	 */
	isOpen: boolean;
	/**
	 * Callback invoked to open the modal
	 */
	onOpen: () => void;
} & Pick<PopperProps<Element>, 'color' | 'colorMode'>;

export type PopperOtherProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	ThemeAppAppearanceProps & {
		renderTrigger: (props: PopperRenderTriggerProps<Element>) => ReactNode;
		/**
		 * Delay (in ms) before hiding the popper
		 * @default 0
		 */
		closeDelay?: ResponsiveValue<number>;
		/**
		 * Delay (in ms) before showing the popper
		 * @default 0
		 */
		openDelay?: ResponsiveValue<number>;
		/**
		 * If true, the popper will hide on clicking outside of the popper
		 * @default true
		 */
		closeOnClickOutside?: ResponsiveValue<boolean>;
		/**
		 * If true, the popper will hide on pressing Esc key
		 * @default true
		 */
		closeOnEsc?: ResponsiveValue<boolean>;
		/**
		 * The distance or margin between the trigger and the popper.
		 * @default 8
		 */
		gutter?: ResponsiveValue<number>;
		/**
		 * If true, the popper will not be shown
		 * @default false
		 */
		isDisabled?: ResponsiveValue<boolean>;
		/**
		 * Callback to run when the popper hides
		 */
		onClose?: () => void;
		/**
		 * Callback fired when all exiting nodes have completed animating out
		 */
		onCloseComplete?: () => void;
		/**
		 * Callback to run when the popper shows
		 */
		onOpen?: () => void;
		/**
		 * The placement of the popper relative to its reference.
		 * @default 'top'
		 */
		placement?: ResponsiveValue<PopperPlacement>;
		/**
		 *  The radius of the popper
		 *
		 * @default 'base'
		 */
		radius?: ResponsiveValue<ThemeRadius>;
	};

export type PopperProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element, PopperOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type PopperRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
