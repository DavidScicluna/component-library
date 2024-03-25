import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type TooltipPlacement =
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

export type TooltipNonResponsiveValueProps = {
	/**
	 * Delay (in ms) before hiding the tooltip
	 * @default 0
	 */
	closeDelay?: number;
	/**
	 * Delay (in ms) before showing the tooltip
	 * @default 0
	 */
	openDelay?: number;
	/**
	 * If true, the tooltip will hide on click
	 * @default true
	 */
	closeOnClick?: boolean;
	/**
	 * If true, the tooltip will hide on pressing Esc key
	 * @default true
	 */
	closeOnEsc?: boolean;
	/**
	 * The distance or margin between the trigger and the tooltip.
	 * @default 8
	 */
	gutter?: number;
	/**
	 * If true, the tooltip will not be shown
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * The label of the tooltip
	 */
	label?: string;
	/**
	 * The placement of the tooltip relative to its reference.
	 * @default 'top'
	 */
	placement?: TooltipPlacement;
};
export type TooltipResponsiveValueProps = ResponsiveValueProps<TooltipNonResponsiveValueProps>;

export type TooltipUniqueProps = ThemeAppAppearanceProps & {
	/**
	 * Callback to run when the tooltip hides
	 */
	onClose?: () => void;
	/**
	 * Callback fired when all exiting nodes have completed animating out
	 */
	onCloseComplete?: () => void;
	/**
	 * Callback to run when the tooltip shows
	 */
	onOpen?: () => void;
} & TooltipResponsiveValueProps;

export type TooltipProps<Element extends PolymorphicElementType> = BoxProps<Element, TooltipUniqueProps>;

export type TooltipRef<Element extends PolymorphicElementType> = BoxRef<Element>;
