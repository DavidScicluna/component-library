import type { ElementType } from 'react';

import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

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

export type TooltipOtherProps = ThemeAppAppearanceProps & {
	/**
	 * Delay (in ms) before hiding the tooltip
	 * @default 0
	 */
	closeDelay?: ResponsiveValue<number>;
	/**
	 * Delay (in ms) before showing the tooltip
	 * @default 0
	 */
	openDelay?: ResponsiveValue<number>;
	/**
	 * If true, the tooltip will hide on click
	 * @default true
	 */
	closeOnClick?: ResponsiveValue<boolean>;
	/**
	 * If true, the tooltip will hide on pressing Esc key
	 * @default true
	 */
	closeOnEsc?: ResponsiveValue<boolean>;
	/**
	 * The distance or margin between the trigger and the tooltip.
	 * @default 8
	 */
	gutter?: ResponsiveValue<number>;
	/**
	 * If true, the tooltip will not be shown
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * The label of the tooltip
	 */
	label?: string;
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
	/**
	 * The placement of the tooltip relative to its reference.
	 * @default 'top'
	 */
	placement?: ResponsiveValue<TooltipPlacement>;
};

export type TooltipProps<Element extends ElementType> = Omit<BoxProps<Element, TooltipOtherProps>, keyof BoxOtherProps>;

export type TooltipRef<Element extends ElementType> = BoxRef<Element>;
