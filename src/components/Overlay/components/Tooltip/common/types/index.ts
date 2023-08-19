import type { ElementType, ReactElement } from 'react';

import type { CommonAppThemeProps } from '@common/types/theme';

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

export type TooltipOtherProps = CommonAppThemeProps & {
	children: ReactElement;
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
	 * If true, the tooltip will be initially shown
	 * @default false
	 */
	defaultIsOpen?: boolean;
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
	 * If true, the tooltip will be shown (in controlled mode)
	 */
	isOpen: boolean;
	/**
	 * The label of the tooltip
	 */
	label?: string;
	/**
	 * Callback to run when the tooltip hides
	 */
	onClose?: () => void;
	/**
	 * Callback to run when the tooltip shows
	 */
	onOpen?: () => void;
	/**
	 * The placement of the tooltip relative to its reference.
	 * @default 'top'
	 */
	placement?: TooltipPlacement;
};

export type TooltipProps<Element extends ElementType> = Omit<BoxProps<Element, TooltipOtherProps>, keyof BoxOtherProps>;

export type TooltipRef<Element extends ElementType> = BoxRef<Element>;
