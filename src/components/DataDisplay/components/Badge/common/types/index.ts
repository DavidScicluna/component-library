import type { ReactNode } from 'react';

import type {
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeAppAppearanceProps,
	ThemeFontSize
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayNonResponsiveValueProps } from '@components/Overlay';

export type BadgeDefaultElement = 'span';
export type BadgeElement = Extract<PolymorphicElementType, 'span'>;

export type BadgeSize = ThemeFontSize;

export type BadgeVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text';

export type BadgeRenderProps = ThemeAppAppearanceProps & { w?: number; h?: number };

export type BadgeNonResponsiveValueProps = {
	/**
	 * If true, the badge will be clickable
	 *
	 * @default false
	 */
	isClickable?: boolean;
	/**
	 * If true, the badge will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: boolean;
	/**
	 * If true, the badge will take the full width of its parent
	 *
	 * @default false
	 */
	isFullWidth?: boolean;
	/**
	 * If true, the badge's border-radius will be styled in its fullest mode
	 *
	 * @default false
	 */
	isRound?: boolean;
	/**
	 * If true, the badge text will be in uppercase else it will be capitalized
	 *
	 * @default true
	 */
	isUppercase?: boolean;
	/**
	 * The size of the badge
	 *
	 * @default 'md'
	 */
	size?: BadgeSize;
	/**
	 * The variant of the badge
	 *
	 * @default 'contained'
	 */
	variant?: BadgeVariant;
} & Pick<PushableOverlayNonResponsiveValueProps, 'isActive' | 'isDisabled' | 'isOutlined'>;
export type BadgeResponsiveValueProps = ResponsiveValueProps<BadgeNonResponsiveValueProps>;

export type BadgeUniqueProps = ThemeAppAppearanceProps & {
	/**
	 * Callback invoked to render the action button
	 */
	renderAction?: () => ReactNode;
	/**
	 * Callback invoked to render the element to the left of the text
	 */
	renderLeft?: (props: BadgeRenderProps) => ReactNode;
	/**
	 * Callback invoked to render the element to the right of the text
	 */
	renderRight?: (props: BadgeRenderProps) => ReactNode;
} & BadgeResponsiveValueProps;

export type BadgeProps<Element extends BadgeElement> = BoxProps<Element, BadgeUniqueProps>;

export type BadgeRef<Element extends BadgeElement> = BoxRef<Element>;

type PickedBadgeProps = 'color' | 'colorMode' | 'size' | 'variant';
export type BadgeContext<Element extends BadgeElement> = Pick<BadgeProps<Element>, PickedBadgeProps>;
