import type { ElementType, ReactNode } from 'react';

import type { Nullish, ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';

// TODO: Check all components sub folder and replace all imports to import from root instead
import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { IconButtonProps } from '@components/Buttons';

export type AlertDuration = Nullish<number>;

export type AlertStatus = 'default' | 'info' | 'warning' | 'success' | 'error';

export type AlertVariant = 'horizontal' | 'vertical';

export type AlertRenderActionsProps = Pick<AlertOtherProps, 'color' | 'colorMode' | 'spacing'>;
export type AlertRenderCloseProps = Pick<
	IconButtonProps,
	'color' | 'colorMode' | 'isCompact' | 'onClick' | 'size' | 'variant'
>;

type AlertOtherProps = ThemeAppAppearanceProps & {
	/**
	 * Callback invoked to render the actions
	 */
	renderActions?: (props: AlertRenderActionsProps) => ReactNode;
	/**
	 * Callback invoked to render the button to close the alert
	 */
	renderClose?: (props: AlertRenderCloseProps) => ReactNode;
	/**
	 * Callback invoked to render the description
	 */
	renderDescription?: () => ReactNode;
	/**
	 * Callback invoked to render the label
	 */
	renderLabel?: () => ReactNode;
	/**
	 * Callback invoked to render the icon
	 */
	renderIcon?: () => ReactNode;
	/**
	 * Callback invoked to close the alert
	 */
	onClose?: () => void;
	/**
	 * The time (in seconds) on when the alert will self-close, set null to make it always visible
	 *
	 * @default 15
	 */
	duration?: ResponsiveValue<AlertDuration>;
	spacing?: ResponsiveValue<ThemeSpacing>;
	/**
	 * The status of the alert
	 *
	 * @default 'default'
	 */
	status?: ResponsiveValue<AlertStatus>;
	/**
	 * The variant of the alert
	 *
	 * @default 'horizontal'
	 */
	variant?: ResponsiveValue<AlertVariant>;
};

export type AlertProps<Element extends ElementType> = Omit<BoxProps<Element, AlertOtherProps>, keyof BoxOtherProps>;

export type AlertRef<Element extends ElementType> = BoxRef<Element>;

export type AlertContext<Element extends ElementType> = Pick<
	AlertProps<Element>,
	'color' | 'colorMode' | 'status' | 'variant'
>;
